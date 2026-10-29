/**
 * Priya's Portfolio - Interactive Logic
 * Modern, responsive portfolio for first-year BTech CSE student
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initTerminalRunner();
  initProjectFilters();
  initProjectModal();
  initPhotographyLightbox();
  initContactForm();
  initMobileMenu();
  initScrollSpy();
  initBackToTop();
});

/* -------------------------------------------------------------
 * 1. Typewriter Animation for Hero Section
 * ------------------------------------------------------------- */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const phrases = [
    'First-Year B.Tech CSE Student',
    'C & Python Programmer',
    'Open to Tech Internships & Hackathons',
    'Nature & Street Photographer',
    'Curious Learner from Rishikesh'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      el.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at end of phrase
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* -------------------------------------------------------------
 * 2. Hero Interactive Terminal Simulator
 * ------------------------------------------------------------- */
function initTerminalRunner() {
  const runBtn = document.getElementById('run-code-btn');
  const outputBox = document.getElementById('terminal-output');
  if (!runBtn || !outputBox) return;

  runBtn.addEventListener('click', () => {
    runBtn.disabled = true;
    runBtn.innerHTML = `<span class="material-symbols-outlined text-[14px] animate-spin">progress_activity</span> Compiling...`;
    outputBox.classList.remove('hidden');
    outputBox.innerHTML = `
      <div class="text-text-muted">$ gcc -Wall -O2 priya_bio.c -o priya_bio</div>
      <div class="text-amber-400">$ ./priya_bio</div>
      <div class="text-primary-purple mt-1 flex items-center gap-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
        Executing program...
      </div>
    `;

    setTimeout(() => {
      outputBox.innerHTML = `
        <div class="text-text-muted">$ gcc -Wall -O2 priya_bio.c -o priya_bio</div>
        <div class="text-amber-400">$ ./priya_bio</div>
        <div class="text-emerald-400 mt-1 font-semibold">[Compilation Succeeded: 0 errors, 0 warnings]</div>
        <div class="text-white mt-1 pl-2 border-l-2 border-primary-purple">
          &gt; Hello, World! I am Priya.<br/>
          &gt; Location: Rishikesh, Uttarakhand, India 🏔️<br/>
          &gt; Department: Computer Science & Engineering (Year 1)<br/>
          &gt; Core Languages: C (99/11), Python 3, HTML5 & CSS3<br/>
          &gt; Status: Excited to build software and learn algorithms!
        </div>
        <div class="text-text-muted mt-1 text-[11px]">Process returned 0 (0x0) execution time : 0.012 s</div>
      `;
      runBtn.disabled = false;
      runBtn.innerHTML = `<span class="material-symbols-outlined text-[14px]">replay</span> Re-run Code`;
    }, 700);
  });
}

/* -------------------------------------------------------------
 * 3. Project Filter Logic
 * ------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterCategory === 'all' || category === filterCategory) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.3s ease';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 4. Project Modal Data & Controller
 * ------------------------------------------------------------- */
const projectDataStore = {
  'student-records': {
    title: 'Student Record Management System',
    category: 'College Lab Coursework (Sem 1)',
    badgeColor: 'bg-purple-900/60 text-purple-300 border-purple-500/30',
    overview: 'A console-based database management software built in C99 as part of the CS101 Fundamentals of Computing laboratory curriculum. Emphasizes structured memory handling, dynamic file operations, and binary search algorithms.',
    problem: 'Educational institutions need efficient, self-contained record systems that maintain persistent student academic data without requiring bulky third-party database servers.',
    features: [
      'Binary Stream Persistence: Stores and reads structured data efficiently using binary files (fread, fwrite) to ensure zero corruption.',
      'Binary Search Implementation: Fast O(log n) lookup for student profiles using Roll Number / University ID.',
      'GPA Calculation Engine: Computes semester grade point averages based on credit weighting and grading matrices.',
      'Input Sanitization: Validates user input buffers against buffer overflows and handles invalid character entries smoothly.'
    ],
    techStack: ['C99 Standard', 'Binary File I/O', 'Data Structures (Structs)', 'Search Algorithms', 'GCC / Make'],
    learnings: 'Mastered low-level pointer arithmetic, memory layout of struct alignments, and safe error-checking routines for file streams in POSIX environments.',
    github: 'https://github.com/priya-cse/student-record-system'
  },
  'campus-companion': {
    title: 'Campus Companion Utility',
    category: 'Freshman Hackathon 2024 (Top 15 Finalist)',
    badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-500/30',
    overview: 'A mobile-optimized campus utility portal designed and prototyped in a 24-hour sprint during the freshman orientation hackathon. Developed in a 3-member team to help new first-year students transition seamlessly to campus life.',
    problem: 'Freshmen frequently struggle with finding updated campus shuttle timetables, daily cafeteria mess menus, lecture venue adjustments, and key department contact directories.',
    features: [
      '24-Hour Rapid Delivery: Designed responsive dark-mode UI and delivered full working prototype within 24 hours.',
      'Python Automation Script: Scraped and formatted daily announcement feeds into structured JSON for client consumption.',
      'Offline-Friendly Caching: Leveraged localStorage to keep transport timetables accessible even during poor campus Wi-Fi connectivity.',
      'Emergency Directory: One-tap contacts for campus medical centre, security desk, and student council helplines.'
    ],
    techStack: ['Python 3', 'HTML5 & CSS3', 'JavaScript', 'Responsive Flexbox', 'Git Branching'],
    learnings: 'Learned rapid collaborative development, Git merge conflict resolution, sprint planning under strict deadlines, and pitching technical solutions to faculty judges.',
    github: 'https://github.com/priya-cse/campus-companion-utility'
  },
  'portfolio-template': {
    title: 'Personal Developer Portfolio & Web Space',
    category: 'Independent Web Project',
    badgeColor: 'bg-indigo-900/60 text-indigo-300 border-indigo-500/30',
    overview: 'A hand-crafted, high-performance personal portfolio website built with modern semantic HTML5, modern CSS3 styling, and modular JavaScript without heavy framework bloat.',
    problem: 'Beginning engineering students need an authentic, high-speed, accessible showcase to present early projects, coursework milestones, and contact information to recruiters and peers.',
    features: [
      'Accessible & Semantic HTML5: Strict structural hierarchy with landmark elements, ARIA attributes, and SEO metadata.',
      'Modern Dark Navy & Purple Aesthetic: Custom design system featuring cyber-glassmorphism, hairline glowing borders, and responsive grid layouts.',
      'Interactive Features: Typewriter animation, live project filter, code compilation simulator, and resume preview modal.',
      '100% Mobile Responsive: Carefully tested on mobile phone viewports, tablets, and wide desktop screens.'
    ],
    techStack: ['HTML5 Semantic Markup', 'Modern CSS3', 'Vanilla JavaScript (ES6+)', 'Tailwind CSS CDN', 'ReportLab PDF'],
    learnings: 'Deepened practical knowledge of CSS Grid, Flexbox alignment, CSS custom properties, and client-side form validation.',
    github: 'https://github.com/priya-cse/priya-portfolio'
  },
  'python-math-utility': {
    title: 'CLI Mathematical & Logic Utility in Python',
    category: 'Python Mini-Project',
    badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-500/30',
    overview: 'An interactive command-line application written in Python 3 featuring number theory tools (prime factorization, GCD/LCM, Fibonacci matrices), an interactive logic quiz, and automated report generation.',
    problem: 'Strengthening problem-solving speed and algorithm implementations outside of structured classroom hours.',
    features: [
      'Modular Code Structure: Divided cleanly into math utilities, interactive quiz engine, and file logging modules.',
      'Error & Exception Handling: Defensive coding with try-except blocks preventing crashes on unexpected input values.',
      'Session History Logger: Automatically logs user quiz scores and timestamped calculations into a clean local text report.'
    ],
    techStack: ['Python 3.x', 'CLI Interfaces', 'Algorithms & Logic', 'File Handling', 'Unit Testing'],
    learnings: 'Understood Python standard libraries, modular packaging, test-driven debugging, and clean readable documentation with docstrings.',
    github: 'https://github.com/priya-cse/python-math-logic-utility'
  }
};

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  window.openProjectModal = function(key) {
    const data = projectDataStore[key];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-learnings').textContent = data.learnings;
    document.getElementById('modal-github-link').href = data.github;

    // Populate features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2 text-text-muted text-sm';
      li.innerHTML = `<span class="material-symbols-outlined text-primary-purple text-[16px] flex-shrink-0 mt-0.5">check_circle</span><span>${feat}</span>`;
      featuresList.appendChild(li);
    });

    // Populate tech stack
    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = '';
    data.techStack.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      stackContainer.appendChild(span);
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  // Close when clicking outside modal content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });
}

/* -------------------------------------------------------------
 * 5. Photography Lightbox
 * ------------------------------------------------------------- */
const photoGalleryData = {
  'ghats': {
    title: 'Evening Sunset over Triveni Ghat, Rishikesh',
    category: 'Landscape & Reflection',
    location: 'Triveni Ghat, Rishikesh, Uttarakhand',
    caption: 'The holy Ganga reflecting the soft amber and violet glow of dusk. Capturing the river in different lights taught me how subtle lighting changes evoke emotional depth—a philosophy I bring to digital UI design.'
  },
  'mountains': {
    title: 'Morning Mist over Shivalik Himalayan Foothills',
    category: 'Atmospheric Photography',
    location: 'Tapovan / Neelkanth Trail, Rishikesh',
    caption: 'Crisp mountain air and layered hill silhouettes at sunrise. The gradient of the morning sky inspired the atmospheric radial gradients in this portfolio theme.'
  },
  'bridge': {
    title: 'Symmetry of Ram Jhula Suspension Bridge',
    category: 'Architectural & Geometry',
    location: 'Ram Jhula, Rishikesh',
    caption: 'Suspension cables creating rhythmic geometric lines against the flowing river. Geometry in structural bridges mirrors clean architecture in software engineering.'
  },
  'workspace': {
    title: 'Late Night Code & Study Setup',
    category: 'Developer Lifestyle',
    location: 'Home Study Desk, Rishikesh',
    caption: 'My sanctuary for coding in C, exploring Python tutorials, reading technical documentation, and sipping warm tea while listening to the distant mountain breeze.'
  }
};

function initPhotographyLightbox() {
  const lightbox = document.getElementById('photo-lightbox');
  if (!lightbox) return;

  window.openPhotoLightbox = function(key, imgSrc) {
    const data = photoGalleryData[key];
    if (!data) return;

    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox-title').textContent = data.title;
    document.getElementById('lightbox-location').textContent = data.location;
    document.getElementById('lightbox-caption').textContent = data.caption;

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  };

  window.closePhotoLightbox = function() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
  };

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closePhotoLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closePhotoLightbox();
    }
  });
}

/* -------------------------------------------------------------
 * 6. Contact Form Validation & Submission
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-count');
  const formStatus = document.getElementById('form-status');

  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const count = messageInput.value.length;
      charCounter.textContent = `${count} / 500 characters`;
      if (count > 450) {
        charCounter.classList.add('text-amber-400');
      } else {
        charCounter.classList.remove('text-amber-400');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'warning');
        return;
      }

      // Basic email regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showToast('Please enter a valid email address.', 'warning');
        return;
      }

      // Submit feedback simulation
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="material-symbols-outlined text-[16px] animate-spin">progress_activity</span> Sending message...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        if (charCounter) charCounter.textContent = '0 / 500 characters';

        if (formStatus) {
          formStatus.innerHTML = `
            <div class="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-200 flex flex-col gap-2">
              <div class="flex items-center gap-2 font-semibold">
                <span class="material-symbols-outlined text-emerald-400">check_circle</span>
                Thank you for reaching out, ${name}!
              </div>
              <p class="text-xs text-text-muted">
                Your message has been captured. As this is a portfolio demonstration, you can also launch your local email client directly:
              </p>
              <a href="mailto:priya.cse.rishikesh@example.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}"
                 class="inline-flex items-center gap-1.5 text-xs text-accent-lavender hover:underline font-semibold mt-1">
                <span class="material-symbols-outlined text-[14px]">outgoing_mail</span>
                Open in Email App (mailto)
              </a>
            </div>
          `;
          formStatus.classList.remove('hidden');
        }

        showToast('Message prepared! Click the mailto link or copy email directly.', 'success');
      }, 800);
    });
  }
}

/* -------------------------------------------------------------
 * 7. One-Click Copy to Clipboard & Toast System
 * ------------------------------------------------------------- */
window.copyToClipboard = function(text, label = 'Email') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`, 'success');
  }).catch(() => {
    // Fallback for older browsers
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(`${label} copied to clipboard!`, 'success');
  });
};

function showToast(message, type = 'info') {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  const iconName = type === 'success' ? 'check_circle' : (type === 'warning' ? 'warning' : 'info');
  const iconColor = type === 'success' ? 'text-emerald-400' : (type === 'warning' ? 'text-amber-400' : 'text-primary-purple');

  toast.innerHTML = `
    <span class="material-symbols-outlined ${iconColor} text-[20px]">${iconName}</span>
    <span class="text-sm font-medium">${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* -------------------------------------------------------------
 * 8. Mobile Navigation Menu Toggle
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const isExpanded = !menu.classList.contains('hidden');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
    toggleBtn.innerHTML = isExpanded 
      ? '<span class="material-symbols-outlined text-[24px]">close</span>' 
      : '<span class="material-symbols-outlined text-[24px]">menu</span>';
  });

  // Close menu when clicking a navigation link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      toggleBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">menu</span>';
    });
  });
}

/* -------------------------------------------------------------
 * 9. Scroll Spy Navigation Highlight
 * ------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const bottomBarLinks = document.querySelectorAll('.bottom-bar-link');

  function onScroll() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-accent-lavender', 'border-b-2', 'border-primary-purple');
            link.classList.remove('text-text-muted');
          } else {
            link.classList.remove('text-accent-lavender', 'border-b-2', 'border-primary-purple');
            link.classList.add('text-text-muted');
          }
        });

        bottomBarLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-primary-purple', 'bg-purple-950/40');
            link.classList.remove('text-text-muted');
          } else {
            link.classList.remove('text-primary-purple', 'bg-purple-950/40');
            link.classList.add('text-text-muted');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* -------------------------------------------------------------
 * 10. Back To Top Button
 * ------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.add('opacity-100');
    } else {
      backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      backToTopBtn.classList.remove('opacity-100');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------------------------------------------------
 * 11. Resume Modal
 * ------------------------------------------------------------- */
window.openResumeModal = function() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
};

window.closeResumeModal = function() {
  const modal = document.getElementById('resume-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
};

