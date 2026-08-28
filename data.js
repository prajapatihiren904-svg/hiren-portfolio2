/**
 * Portfolio Data Configuration for Hiren Prajapati
 * Single source of truth. Easy to update, extend, and maintain.
 */

const PORTFOLIO_DATA = {
  // Live Portfolio URL for QR Code Generator (Replace with your custom URL if needed)
  PORTFOLIO_URL: "https://prajapatihiren904-svg.github.io/hiren-portfolio/",

  profile: {
    name: "Hiren Prajapati",
    initials: "HP",
    title: "B.Tech AI & Data Science Student",
    university: "Lok Jagruti Kendra University (LJKU)",
    location: "Ahmedabad, Gujarat, India",
    batch: "2029",
    currentSemester: "Semester 3",
    statusBadge: "Entering Semester 3",
    learningBadge: "Learning Python Full-Stack",
    tagline: "Building my skills in Python, Full-Stack Development, AI & Data Science.",
    bioShort: "B.Tech Artificial Intelligence & Data Science student at Lok Jagruti Kendra University, Ahmedabad. Passionate about software engineering, data analytics, and building intelligent web applications.",
    avatarImage: "file:///C:/Users/DELL/.gemini/antigravity/brain/fbc42046-ed1c-4363-a2d8-58a3591a018e/.user_uploaded/media__1787805140090.jpg",
    avatarFallback: "assets/profile.jpg",
    wording: {
      learning: "Currently learning Python Full-Stack Development",
      building: "Building my skills through projects",
      exploring: "Exploring AI, Data Science and Software Development"
    }
  },

  socials: {
    email: "prajapatihiren904@gmail.com",
    phone: "+91 8238015451",
    linkedin: "https://www.linkedin.com/in/hiren-prajapati-03bb7b394?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/prajapatihiren904-svg"
  },

  academics: {
    metrics: [
      { label: "Semester 1 SPI", value: "7.13", suffix: "", detail: "First Class with Distinction" },
      { label: "Credits Earned", value: "24", suffix: " / 24", detail: "100% Credits Completed" },
      { label: "JEE Main", value: "80.56", suffix: "%ile", detail: "National Level Entrance" },
      { label: "Class 12th", value: "68.61", suffix: "%", detail: "Higher Secondary" },
      { label: "Class 10th", value: "76.33", suffix: "%", detail: "Secondary School" }
    ],
    timeline: [
      {
        semester: "Semester 1",
        status: "Completed",
        badgeClass: "badge-completed",
        period: "Completed Feb 2026",
        spi: "7.13 SPI",
        credits: "24 Credits Earned",
        result: "First Class with Distinction",
        description: "Built strong fundamentals in programming, mathematics, computer concepts, object-oriented principles with Java, and IoT hardware basics.",
        highlights: ["Java Basics & OOP", "IoT Fundamentals", "Engineering Math", "First Class Distinction"]
      },
      {
        semester: "Semester 2",
        status: "Completed",
        badgeClass: "badge-completed",
        period: "Completed 2026",
        spi: "Completed",
        credits: "Credits Earned",
        result: "Successfully Completed",
        description: "Expanded core software engineering knowledge, database systems, object-oriented design patterns, and worked on collaborative semester projects.",
        highlights: ["Object-Oriented Programming", "Data Structures Basics", "Database Fundamentals", "Semester Project"]
      },
      {
        semester: "Semester 3",
        status: "Current / Upcoming",
        badgeClass: "badge-current",
        period: "2026 - Present",
        spi: "In Progress",
        credits: "Ongoing",
        result: "Active Semester",
        description: "Focusing heavily on Python Full-Stack Development, backend system design, database integration, RESTful APIs, and algorithmic problem solving.",
        highlights: ["Python Full-Stack", "Backend Architecture", "Web Application Design", "AI & Data Science Track"]
      }
    ]
  },

  skills: [
    {
      category: "Programming & Core",
      icon: "code-2",
      items: [
        { name: "Java", level: "Foundation", status: "Core" },
        { name: "Python", level: "Active Focus", status: "Core" },
        { name: "Object-Oriented Programming (OOP)", level: "Practical", status: "Core" }
      ]
    },
    {
      category: "Web & Full Stack",
      icon: "layers",
      items: [
        { name: "Python Full-Stack Development", level: "Currently Learning", status: "Learning", highlight: true },
        { name: "Backend Development", level: "Exploring", status: "Exploring" },
        { name: "RESTful APIs", level: "Exploring", status: "Exploring" },
        { name: "Database Integration", level: "Exploring", status: "Exploring" },
        { name: "Frontend Fundamentals (HTML/CSS/JS)", level: "Building", status: "Active" }
      ]
    },
    {
      category: "Data Analytics & AI",
      icon: "brain-circuit",
      items: [
        { name: "Data Analytics", level: "Academic & Practical", status: "Focus" },
        { name: "Artificial Intelligence", level: "Interest & Learning", status: "Focus" }
      ]
    },
    {
      category: "IoT & Embedded Systems",
      icon: "cpu",
      items: [
        { name: "IoT Fundamentals", level: "Academic Project", status: "Completed" },
        { name: "Smart Automation Concepts", level: "Prototype", status: "Completed" }
      ]
    },
    {
      category: "Developer Tools",
      icon: "terminal",
      items: [
        { name: "GitHub / Git", level: "Version Control", status: "Daily" },
        { name: "VS Code", level: "Primary IDE", status: "Daily" },
        { name: "Google Colab", level: "Data Science Notebooks", status: "Active" }
      ]
    },
    {
      category: "Professional Soft Skills",
      icon: "sparkles",
      items: [
        { name: "Problem Solving", level: "Key Strength", status: "Core" },
        { name: "Teamwork & Collaboration", level: "Key Strength", status: "Core" },
        { name: "Communication", level: "Key Strength", status: "Core" },
        { name: "Leadership", level: "Key Strength", status: "Core" },
        { name: "Continuous Learning", level: "Mindset", status: "Core" }
      ]
    }
  ],

  // Easily add Project 4, Project 5, Project 6 here in the future
  projects: [
    {
      id: "car-rental",
      title: "Car Rental Management System",
      category: "Java / OOP",
      badge: "Completed Project",
      description: "A structured application designed to manage vehicle bookings, customer records, rental tracking and vehicle availability using object-oriented programming principles.",
      technologies: ["Java", "OOP", "Data Structures", "System Design"],
      features: [
        "Vehicle booking",
        "Availability management",
        "Customer records",
        "Rental tracking",
        "Classes and objects",
        "OOP-based program structure"
      ],
      githubUrl: "https://github.com/prajapatihiren904-svg/Car-Rental-Management-System",
      liveUrl: null,
      icon: "car"
    },
    {
      id: "smart-museum",
      title: "Smart Museum",
      category: "IoT / Smart Automation",
      badge: "IoT Concept",
      description: "A smart automation concept designed to improve visitor engagement and museum experience through IoT-based interactive systems.",
      technologies: ["IoT", "Smart Automation", "Sensors", "User Experience"],
      features: [
        "Automated visitor guidance",
        "IoT-based interaction",
        "Smart infrastructure concept",
        "Improved visitor experience"
      ],
      githubUrl: null,
      liveUrl: null,
      icon: "bot"
    },
    {
      id: "sem2-project",
      title: "Semester 2 Project",
      category: "Software Development",
      badge: "Semester 2 Showcase",
      description: "Dedicated project developed during Semester 2 showcasing practical software development, database integration, and object-oriented logic.",
      technologies: ["Python", "Web Development", "Database"],
      features: [
        "Structured application architecture",
        "Database integration and data management",
        "Modular function and class design",
        "Practical implementation of CS principles"
      ],
      // PLACEHOLDERS FOR USER CUSTOMIZATION (Replace values as needed):
      SEM2_PROJECT_NAME: "Semester 2 Project",
      SEM2_PROJECT_DESCRIPTION: "Semester 2 software application showcase.",
      SEM2_PROJECT_TECHNOLOGIES: ["Python", "Web Development", "Database"],
      SEM2_PROJECT_GITHUB_URL: "SEM2_PROJECT_GITHUB_URL",
      githubUrl: "SEM2_PROJECT_GITHUB_URL",
      liveUrl: null,
      icon: "code"
    }
  ],

  learningRoadmap: [
    {
      step: "01",
      title: "Python Fundamentals",
      status: "Completed",
      statusBadge: "Completed",
      description: "Data types, control structures, functions, modules, file handling, and clean code conventions."
    },
    {
      step: "02",
      title: "Programming & OOP",
      status: "Completed",
      statusBadge: "Completed",
      description: "Classes, objects, inheritance, polymorphism, encapsulation, and object-oriented architecture."
    },
    {
      step: "03",
      title: "Backend Development",
      status: "Active Focus",
      statusBadge: "Learning",
      description: "Learning server-side Python frameworks, HTTP request flows, routing, and business logic."
    },
    {
      step: "04",
      title: "Databases",
      status: "In Progress",
      statusBadge: "In Progress",
      description: "Relational database modeling, SQL query optimization, data persistence, and Python ORMs."
    },
    {
      step: "05",
      title: "APIs",
      status: "Upcoming",
      statusBadge: "Next",
      description: "Building RESTful API endpoints, JSON data exchange, request validation, and API testing."
    },
    {
      step: "06",
      title: "Frontend Integration",
      status: "Upcoming",
      statusBadge: "Next",
      description: "Connecting backend API services with modern dynamic HTML, CSS, and JavaScript frontends."
    },
    {
      step: "07",
      title: "Full-Stack Projects",
      status: "Future Goal",
      statusBadge: "Future",
      description: "Deploying end-to-end Python web applications with cloud databases, AI modules, and analytics."
    }
  ],

  journeyTimeline: [
    {
      year: "2026",
      period: "Semester 1",
      title: "Foundations & Academic Distinction",
      description: "Built programming foundation and completed Java/OOP and IoT-related academic work. Achieved an SPI of 7.13 (First Class with Distinction) earning all 24 credits."
    },
    {
      year: "2026",
      period: "Semester 2",
      title: "Expanded Programming & Projects",
      description: "Expanded programming/database knowledge and completed semester projects, strengthening software development logic."
    },
    {
      year: "2026",
      period: "Semester 3 (Current)",
      title: "Python Full-Stack Specialization",
      description: "Currently entering Semester 3 and learning Python Full-Stack Development to build full-stack web applications."
    },
    {
      year: "Future",
      period: "Career Goal",
      title: "AI, Data Science & Full-Stack Development",
      description: "Build larger full-stack, AI and data-driven projects to grow as a professional software engineer."
    }
  ]
};
