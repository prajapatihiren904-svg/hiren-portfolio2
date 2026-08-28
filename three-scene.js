/**
 * Three.js WebGL 3D Interactive Scene Engine
 * Renders futuristic 3D wireframe geometries, floating particle constellation,
 * lighting effects, mouse parallax, and scroll dynamics.
 */

class Portfolio3DScene {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.floatingObjects = [];
    this.particles = null;
    
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollProgress = 0;
    this.isWebGLAvailable = this.checkWebGLSupport();

    if (this.isWebGLAvailable && typeof THREE !== 'undefined') {
      this.init();
    } else {
      console.warn('WebGL or Three.js unavailable. Falling back to 2D ambient CSS gradient background.');
      this.initFallback();
    }
  }

  checkWebGLSupport() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  init() {
    // 1. Scene Setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x07090e, 0.015);

    // 2. Camera Setup
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 30);

    // 3. Renderer Setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const pointLightCyan = new THREE.PointLight(0x00f2fe, 3, 50);
    pointLightCyan.position.set(15, 20, 15);
    this.scene.add(pointLightCyan);

    const pointLightViolet = new THREE.PointLight(0x8b5cf6, 3, 50);
    pointLightViolet.position.set(-15, -20, 15);
    this.scene.add(pointLightViolet);

    // 5. Build 3D Objects
    this.createFloatingGeometries();
    this.createParticleConstellation();

    // 6. Event Listeners
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('scroll', () => this.onScroll());

    // 7. Start Animation Loop
    this.animate();
  }

  createFloatingGeometries() {
    const geometries = [
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.OctahedronGeometry(2, 0),
      new THREE.TorusGeometry(2, 0.6, 16, 50),
      new THREE.BoxGeometry(2.2, 2.2, 2.2),
      new THREE.TetrahedronGeometry(2, 0)
    ];

    const materials = [
      new THREE.MeshStandardMaterial({
        color: 0x00f2fe,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        roughness: 0.2,
        metalness: 0.8
      }),
      new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
        roughness: 0.2,
        metalness: 0.8
      }),
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
        roughness: 0.4
      })
    ];

    // Spawn 12 floating objects at random coordinates
    for (let i = 0; i < 12; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40 - 10
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = 0.6 + Math.random() * 0.8;
      mesh.scale.set(scale, scale, scale);

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeed: 0.001 + Math.random() * 0.002,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: mesh.position.y
      };

      this.floatingObjects.push(mesh);
      this.scene.add(mesh);
    }
  }

  createParticleConstellation() {
    const particleCount = 600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const violetColor = new THREE.Color(0x8b5cf6);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const mixedColor = Math.random() > 0.5 ? cyanColor : violetColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  onMouseMove(event) {
    this.mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
    this.mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 2;
  }

  onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = window.scrollY / (maxScroll || 1);
  }

  onWindowResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Smooth mouse lerping
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Camera movement based on mouse parallax & scroll height
    this.camera.position.x = this.mouse.x * 3;
    this.camera.position.y = this.mouse.y * 3 - (this.scrollProgress * 20);
    this.camera.lookAt(0, - (this.scrollProgress * 20), 0);

    // Rotate floating geometric objects
    const time = Date.now() * 0.001;
    this.floatingObjects.forEach(obj => {
      obj.rotation.x += obj.userData.rotSpeedX;
      obj.rotation.y += obj.userData.rotSpeedY;
      obj.position.y = obj.userData.baseY + Math.sin(time + obj.userData.floatOffset) * 1.5;
    });

    // Slow rotation of particle field
    if (this.particles) {
      this.particles.rotation.y = time * 0.03;
      this.particles.rotation.x = time * 0.015;
    }

    this.renderer.render(this.scene, this.camera);
  }

  initFallback() {
    // Elegant fallback gradient for non-WebGL devices
    if (this.canvas) {
      this.canvas.style.background = 'radial-gradient(circle at 50% 30%, #0d1424 0%, #07090e 100%)';
    }
  }
}

// Initialize on DOM load with guaranteed fail-safe try-catch
window.addEventListener('DOMContentLoaded', () => {
  try {
    window.portfolio3D = new Portfolio3DScene();
  } catch (err) {
    console.warn('3D Scene initialization notice (non-blocking fallback activated):', err);
    const canvas = document.getElementById('webgl-canvas');
    if (canvas) {
      canvas.style.background = 'radial-gradient(circle at 50% 30%, #0d1424 0%, #07090e 100%)';
    }
  }
});
