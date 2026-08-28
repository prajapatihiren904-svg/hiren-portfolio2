/**
 * Core Application Controller for Hiren Prajapati Portfolio
 * Handles DOM rendering, loading animation, tilt interactions, smooth scrolling,
 * counter animations, interactive form submission, and responsive navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize UI Renderers
  renderHeroSection();
  renderAboutSection();
  renderAcademicsSection();
  renderSkillsSection();
  renderCurrentlyLearningSection();
  renderProjectsSection();
  renderJourneySection();
  renderExperienceBanner();
  renderContactSection();
  renderQRSection();
  renderFooter();

  // 2. Initialize Interactive Controllers
  initLoadingScreen();
  initCustomCursor();
  initStickyNavbar();
  initMobileNav();
  initSmoothScroll();
  init3DTiltEffect();
  initScrollAnimations();
  initCounterAnimations();
  initContactForm();
});

/* ==========================================================================
   RENDERERS (DRIVEN BY PORTFOLIO_DATA FROM data.js)
   ========================================================================== */

function renderHeroSection() {
  const { profile, socials } = PORTFOLIO_DATA;
  
  const heroBadges = document.getElementById('hero-badges');
  if (heroBadges) {
    heroBadges.innerHTML = `
      <div class="status-pill">
        <span class="status-dot"></span>
        <span>${profile.statusBadge}</span>
      </div>
      <div class="status-pill" style="border-color: var(--border-violet); color: var(--accent-violet);">
        <span class="status-dot" style="background-color: var(--accent-violet); box-shadow: 0 0 10px var(--accent-violet);"></span>
        <span>${profile.learningBadge}</span>
      </div>
    `;
  }

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `HIREN <span class="gradient-text">PRAJAPATI</span>`;
  }

  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.textContent = profile.title;
  }

  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline) {
    heroTagline.textContent = profile.tagline;
  }

  const heroCtas = document.getElementById('hero-ctas');
  if (heroCtas) {
    heroCtas.innerHTML = `
      <a href="#projects" class="btn btn-primary">
        <span>Explore My Work</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="${socials.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        <span>View GitHub</span>
      </a>
      <a href="#contact" class="btn btn-outline">
        <span>Contact Me</span>
      </a>
    `;
  }

  // Portrait Setup with Fallback
  const portraitImg = document.getElementById('hero-portrait-img');
  if (portraitImg) {
    portraitImg.src = profile.avatarImage;
    portraitImg.alt = `Professional Portrait of ${profile.name}`;
    let fallbackStep = 0;
    const fallbacks = [
      profile.avatarFallback,
      "assets/profile.jpg",
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 600'><defs><linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='%230f172a'/><stop offset='100%' stop-color='%2307090e'/></linearGradient></defs><rect width='500' height='600' fill='url(%23bg)'/><circle cx='250' cy='220' r='90' fill='%231e293b' stroke='%2300f2fe' stroke-width='4'/><path d='M120 540 C120 380, 380 380, 380 540 Z' fill='%231e293b' stroke='%238b5cf6' stroke-width='4'/><text x='250' y='320' text-anchor='middle' fill='%2300f2fe' font-family='sans-serif' font-size='22' font-weight='bold'>HIREN PRAJAPATI</text><text x='250' y='350' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='14'>B.Tech AI &amp; Data Science Student</text></svg>"
    ];
    portraitImg.onerror = function() {
      if (fallbackStep < fallbacks.length) {
        this.src = fallbacks[fallbackStep++];
      } else {
        this.onerror = null;
      }
    };
  }
}

function renderAboutSection() {
  const { profile } = PORTFOLIO_DATA;
  const container = document.getElementById('about-container');
  if (!container) return;

  container.innerHTML = `
    <div class="about-card">
      <div class="about-text">
        <span class="section-kicker">About Me</span>
        <h3 class="section-title">B.Tech Student Developer & Tech Enthusiast</h3>
        <p>
          I am <strong>Hiren Prajapati</strong>, a B.Tech Artificial Intelligence & Data Science student at 
          <strong>Lok Jagruti Kendra University (LJKU), Ahmedabad</strong>.
        </p>
        <p>
          I have completed my initial academic semesters with distinction, building a solid foundation in programming logic, object-oriented software design with Java, IoT automation concepts, and data structures.
        </p>
        <p>
          I am currently entering <strong>Semester 3</strong> and actively expanding my capabilities through 
          <span class="gradient-cyan-blue" style="font-weight: 600;">Python Full-Stack Development</span>. I believe in learning by doing—building practical software projects, exploring backend architectures, database design, and intelligent data systems.
        </p>
      </div>

      <div class="about-highlights">
        <div class="about-highlight-item">
          <div class="about-highlight-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div>
            <div class="about-highlight-title">University</div>
            <div class="about-highlight-desc">LJKU Ahmedabad</div>
          </div>
        </div>

        <div class="about-highlight-item">
          <div class="about-highlight-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div>
            <div class="about-highlight-title">Batch</div>
            <div class="about-highlight-desc">2029 (Semester 3)</div>
          </div>
        </div>

        <div class="about-highlight-item">
          <div class="about-highlight-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>
          </div>
          <div>
            <div class="about-highlight-title">Focus</div>
            <div class="about-highlight-desc">Python Full-Stack</div>
          </div>
        </div>

        <div class="about-highlight-item">
          <div class="about-highlight-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div>
            <div class="about-highlight-title">Sem 1 Grade</div>
            <div class="about-highlight-desc">7.13 SPI (Distinction)</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAcademicsSection() {
  const { academics } = PORTFOLIO_DATA;

  // Render Metric Cards
  const metricsGrid = document.getElementById('metrics-grid');
  if (metricsGrid) {
    metricsGrid.innerHTML = academics.metrics.map(m => `
      <div class="metric-card">
        <div class="metric-value" data-target="${m.value}">${m.value}${m.suffix}</div>
        <div class="metric-label">${m.label}</div>
        <div class="metric-detail">${m.detail}</div>
      </div>
    `).join('');
  }

  // Render Academic Timeline
  const timelineWrapper = document.getElementById('academic-timeline');
  if (timelineWrapper) {
    timelineWrapper.innerHTML = `
      <div class="timeline-line"></div>
      ${academics.timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h4 class="timeline-title">${t.semester}</h4>
              <span class="tag ${t.badgeClass}">${t.status}</span>
            </div>
            <div class="timeline-meta">
              <span>📅 ${t.period}</span>
              <span>⭐ ${t.spi}</span>
              <span>🎓 ${t.result}</span>
            </div>
            <p class="timeline-desc">${t.description}</p>
            <div class="timeline-tags">
              ${t.highlights.map(h => `<span class="tag">${h}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    `;
  }
}

function renderSkillsSection() {
  const { skills } = PORTFOLIO_DATA;
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = skills.map(cat => `
    <div class="skill-card tilt-card">
      <div class="skill-card-header">
        <div class="skill-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
        </div>
        <h4 class="skill-card-title">${cat.category}</h4>
      </div>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item-row ${item.highlight ? 'highlight' : ''}">
            <span class="skill-item-name">${item.name}</span>
            <span class="skill-item-level">${item.level}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderCurrentlyLearningSection() {
  const { learningRoadmap } = PORTFOLIO_DATA;
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  container.innerHTML = learningRoadmap.map(step => `
    <div class="roadmap-step-card ${step.statusBadge === 'In Progress' || step.statusBadge === 'Learning' ? 'active' : ''}">
      <div class="roadmap-number">${step.step}</div>
      <div class="roadmap-info">
        <h4>${step.title}</h4>
        <p>${step.description}</p>
      </div>
      <div class="roadmap-status-badge">
        <span class="tag ${step.statusBadge === 'Completed' ? 'tag-cyan' : step.statusBadge === 'Learning' || step.statusBadge === 'In Progress' ? 'tag-violet' : ''}">
          ${step.statusBadge}
        </span>
      </div>
    </div>
  `).join('');
}

function renderProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(proj => `
    <div class="project-card tilt-card" id="project-${proj.id}">
      <div>
        <div class="project-badge-bar">
          <span class="tag tag-cyan">${proj.category}</span>
          <span class="tag tag-violet">${proj.badge}</span>
        </div>
        
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>

        <div class="project-features-list">
          ${proj.features.map(f => `<div class="project-feature-item">${f}</div>`).join('')}
        </div>
      </div>

      <div>
        <div class="project-tags">
          ${proj.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          ${proj.githubUrl ? `
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding: 0.6rem 1.25rem; font-size: 0.85rem;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              <span>View on GitHub</span>
            </a>
          ` : `
            <span class="tag" style="opacity: 0.7; font-size: 0.8rem;">Concept / In Progress</span>
          `}
        </div>
      </div>
    </div>
  `).join('');
}

function renderJourneySection() {
  const { journeyTimeline } = PORTFOLIO_DATA;
  const grid = document.getElementById('journey-grid');
  if (!grid) return;

  grid.innerHTML = journeyTimeline.map(item => `
    <div class="journey-card">
      <div class="journey-year">${item.year}</div>
      <div class="journey-period">${item.period}</div>
      <h4 class="journey-title">${item.title}</h4>
      <p class="journey-desc">${item.description}</p>
    </div>
  `).join('');
}

function renderExperienceBanner() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = `
    <div class="experience-banner">
      <div class="exp-info">
        <span class="tag tag-cyan" style="margin-bottom: 0.75rem;">Status: Active Student Developer</span>
        <h3>B.Tech AI & Data Science Student</h3>
        <p>
          Enrolled at Lok Jagruti Kendra University (LJKU), Ahmedabad (Batch 2029). 
          Focused on building real skills through coursework, self-learning, and hands-on software development.
        </p>
      </div>

      <div class="exp-badge-box">
        <h4>Semester 3</h4>
        <p>Entering Semester / Active</p>
      </div>
    </div>
  `;
}

function renderContactSection() {
  const { socials, profile } = PORTFOLIO_DATA;
  const container = document.getElementById('contact-container');
  if (!container) return;

  container.innerHTML = `
    <div class="contact-grid">
      <div class="contact-info-list">
        <div class="contact-item">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          </div>
          <div class="contact-details">
            <h4>Email Me</h4>
            <a href="mailto:${socials.email}">${socials.email}</a>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="contact-details">
            <h4>Phone / WhatsApp</h4>
            <a href="tel:${socials.phone}">${socials.phone}</a>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="contact-details">
            <h4>Location</h4>
            <p>${profile.location}</p>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div class="contact-details">
            <h4>LinkedIn Profile</h4>
            <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer">hiren-prajapati</a>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div class="contact-details">
            <h4>University</h4>
            <p>${profile.university}</p>
          </div>
        </div>
      </div>

      <form class="contact-form" id="portfolio-contact-form">
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Send a Message</h3>
        
        <div class="form-group">
          <label class="form-label" for="contact-name">Your Name</label>
          <input type="text" id="contact-name" class="form-input" placeholder="e.g. Alex Johnson" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="contact-email">Your Email Address</label>
          <input type="email" id="contact-email" class="form-input" placeholder="name@example.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="contact-subject">Subject</label>
          <input type="text" id="contact-subject" class="form-input" placeholder="Collaboration / Opportunity" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="contact-message">Message</label>
          <textarea id="contact-message" class="form-textarea" placeholder="Hello Hiren, I'd like to discuss..." required></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%;">
          <span>Send Message</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </form>
    </div>
  `;
}

function renderQRSection() {
  const container = document.getElementById('qrcode-container');
  if (!container) return;

  // Auto-detect Vercel / Web URL when hosted online, or fallback to live portfolio URL
  const isWebHosted = window.location.protocol.startsWith('http');
  const targetUrl = isWebHosted ? window.location.href : (PORTFOLIO_DATA.PORTFOLIO_URL || "https://hiren-prajapati-portfolio.vercel.app");
  
  console.log("%c[QR ENGINE] Encoded Live Portfolio Payload URL:", "color: #00f2fe; font-weight: bold; font-size: 14px;", targetUrl);

  const { profile } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="qr-card-wrapper">
      <div class="qr-card tilt-card">
        <div class="qr-code-box" id="fresh-qrcode-box"></div>

        <div class="qr-profile-info">
          <h3>${profile.name}</h3>
          <p>${profile.title}</p>
          
          <div class="status-pill" style="margin-top: 0.75rem; font-size: 0.8rem;">
            <span class="status-dot"></span>
            <span>Scan with phone camera to open my full portfolio</span>
          </div>

          <div class="qr-url-badge" id="qr-display-url-badge" style="margin-top: 0.75rem; word-break: break-all;">
            ${targetUrl}
          </div>
        </div>

        <button class="btn btn-primary btn-download-qr" id="btn-download-qr" style="width: 100%;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>Download QR Code</span>
        </button>
      </div>
    </div>
  `;

  // Render freshly generated QR Code matrix encoding targetUrl strictly
  setTimeout(() => {
    const qrContainer = document.getElementById('fresh-qrcode-box');
    if (!qrContainer) return;

    qrContainer.innerHTML = '';

    if (typeof QRCode !== 'undefined') {
      new QRCode(qrContainer, {
        text: targetUrl,
        width: 220,
        height: 220,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      const encodedUrl = encodeURIComponent(targetUrl);
      qrContainer.innerHTML = `<img id="qr-img-fallback" src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodedUrl}&color=000000&bkgd=ffffff" alt="Hiren Prajapati Portfolio QR Code" />`;
    }

    // Attach Download Event Listener
    const downloadBtn = document.getElementById('btn-download-qr');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', downloadQRCode);
    }
  }, 100);
}

function downloadQRCode() {
  const qrContainer = document.getElementById('fresh-qrcode-box');
  if (!qrContainer) return;

  const canvas = qrContainer.querySelector('canvas');
  const img = qrContainer.querySelector('img');

  let imageSrc = null;

  if (canvas) {
    imageSrc = canvas.toDataURL('image/png');
  } else if (img) {
    imageSrc = img.src;
  }

  if (imageSrc) {
    const downloadLink = document.createElement('a');
    downloadLink.href = imageSrc;
    downloadLink.download = 'hiren-prajapati-portfolio-qr.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    showToast('Downloaded hiren-prajapati-portfolio-qr.png!');
  } else {
    showToast('Preparing QR Code for download...');
  }
}

function renderFooter() {
  const { socials, profile } = PORTFOLIO_DATA;
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>${profile.name}</h3>
        <p>${profile.title} · ${profile.university} (Batch ${profile.batch})</p>
      </div>

      <div class="footer-socials">
        <a href="${socials.github}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </a>
        <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="mailto:${socials.email}" class="social-icon-btn" aria-label="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 ${profile.name}. All rights reserved. Designed & built with modern 3D web technologies.</p>
    </div>
  `;
}

/* ==========================================================================
   INTERACTION HANDLERS
   ========================================================================== */

function initLoadingScreen() {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }, 1000);
  }
}

function initCustomCursor() {
  // Desktop check
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.querySelector('.cursor-dot');
  const outline = document.querySelector('.cursor-outline');
  if (!dot || !outline) return;

  window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    outline.animate({
      left: `${x}px`,
      top: `${y}px`
    }, { duration: 300, fill: 'forwards' });
  });

  document.querySelectorAll('a, button, input, textarea, .tilt-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Section Highlight
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !drawer) return;

  const toggle = () => {
    hamburger.classList.toggle('active');
    drawer.classList.toggle('open');
  };

  hamburger.addEventListener('click', toggle);

  links.forEach(l => {
    l.addEventListener('click', () => {
      hamburger.classList.remove('active');
      drawer.classList.remove('open');
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

function init3DTiltEffect() {
  // Mobile bypass for performance
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const cards = document.querySelectorAll('.tilt-card, .portrait-card');

  cards.forEach(card => {
    const badge = card.querySelector('.portrait-badge');
    const img = card.querySelector('.portrait-img');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -((y - centerY) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      
      if (badge) {
        badge.style.transform = `translateZ(40px)`;
        badge.style.transition = 'transform 0.1s ease';
      }
      if (img) {
        img.style.transform = `scale(1.06) translateZ(15px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      if (badge) {
        badge.style.transform = 'translateZ(0px)';
      }
      if (img) {
        img.style.transform = 'scale(1) translateZ(0px)';
      }
    });
  });
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.section-header, .about-card, .metric-card, .timeline-content, .skill-card, .project-card, .roadmap-step-card, .journey-card, .experience-banner, .contact-item, .contact-form, .qr-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
    el.style.visibility = 'visible';
  });
}

function initCounterAnimations() {
  const metricsSection = document.getElementById('academics');
  if (!metricsSection) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      document.querySelectorAll('.metric-value[data-target]').forEach(el => {
        const targetStr = el.getAttribute('data-target');
        const targetNum = parseFloat(targetStr);
        if (isNaN(targetNum)) return;

        let start = 0;
        const duration = 1500;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentVal = (progress * targetNum).toFixed(targetStr.includes('.') ? 2 : 0);
          
          const suffix = el.textContent.replace(/[\d\.]/g, '');
          el.textContent = `${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
      });
    }
  }, { threshold: 0.3 });

  observer.observe(metricsSection);
}

function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Trigger Mailto Fallback
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;

    showToast('Thank you! Opening your email client to send message.');
    form.reset();
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
