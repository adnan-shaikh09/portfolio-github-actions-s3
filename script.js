/* ═══════════════════════════════════════
   ARYAN SHAH PORTFOLIO — script.js
   ═══════════════════════════════════════ */

'use strict';

/* ── DATA ── */
const projects = [
  {
    id: 1,
    title: 'ShopFlow — E-Commerce Platform',
    desc: 'A full-stack e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: ['web', 'fullstack'],
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'TaskMind — Project Manager',
    desc: 'A Kanban-style project management tool with drag-and-drop, real-time collaboration, and notifications.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    category: ['web', 'fullstack'],
    emoji: '📋',
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    title: 'FinTrack — Budget App UI',
    desc: 'A clean, intuitive personal finance tracker designed in Figma with 40+ custom components and 3 themes.',
    tags: ['Figma', 'UI/UX', 'Design System'],
    category: ['design'],
    emoji: '💰',
    bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    title: 'Pulse — Health & Fitness App',
    desc: 'iOS-style fitness tracker UI with workout logging, progress charts, and a nutrition dashboard.',
    tags: ['Figma', 'Prototyping', 'UI/UX'],
    category: ['design'],
    emoji: '🏃',
    bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    title: 'DevBlog — CMS & Blog Engine',
    desc: 'A headless CMS-powered blog with markdown support, syntax highlighting, and SEO optimization.',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    category: ['web'],
    emoji: '✍️',
    bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    title: 'NeuralChat — AI Chatbot',
    desc: 'A GPT-powered customer support chatbot with context retention, sentiment analysis, and live handoff.',
    tags: ['Python', 'FastAPI', 'React'],
    category: ['web', 'fullstack'],
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    liveUrl: '#',
    codeUrl: '#',
  },
];

const testimonials = [
  {
    quote: "Aryan delivered a pixel-perfect, blazing-fast web app in record time. His attention to detail and communication throughout the project were exceptional. Highly recommended!",
    name: 'Priya Mehta',
    role: 'CEO, StartupVault',
    initials: 'PM',
    stars: 5,
  },
  {
    quote: "Working with Aryan was a delight. He took a vague brief and turned it into a beautiful, intuitive product. He proactively suggested improvements we hadn't even thought of.",
    name: 'Rohan Desai',
    role: 'CTO, TechNova Solutions',
    initials: 'RD',
    stars: 5,
  },
  {
    quote: "Aryan completely redesigned our SaaS dashboard. The new UI increased our user activation rate by 34%. He's a rare mix of developer and designer — a true full-stack talent.",
    name: 'Sara Joshi',
    role: 'Product Manager, CloudBase',
    initials: 'SJ',
    stars: 5,
  },
  {
    quote: "Fast, reliable, and creative. Aryan rebuilt our e-commerce site from scratch and our conversion rate jumped by 28%. He was responsive, professional, and great at problem-solving.",
    name: 'Amit Patel',
    role: 'Founder, GreenCart India',
    initials: 'AP',
    stars: 5,
  },
  {
    quote: "We hired Aryan for a critical deadline project. He not only delivered on time but went beyond the brief with features that genuinely impressed our stakeholders. Will hire again!",
    name: 'Nisha Kapoor',
    role: 'Director of Engineering, FinEdge',
    initials: 'NK',
    stars: 5,
  },
  {
    quote: "Aryan is a gem. He designed and built our entire website + admin panel in 3 weeks. The code is clean, well-documented, and easy for our team to maintain. Outstanding work.",
    name: 'Vikram Shah',
    role: 'COO, Retailify',
    initials: 'VS',
    stars: 5,
  },
];

/* ═══════════════════════════
   PAGE LOADER
═══════════════════════════ */
function initLoader() {
  const loader = document.getElementById('loader');
  const fill = document.getElementById('loader-fill');
  const text = document.getElementById('loader-text');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 12 + 3;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        initReveal();
        animateCounters();
      }, 300);
    }
    fill.style.width = progress + '%';
    text.textContent = String(Math.floor(progress)).padStart(2, '0');
  }, 60);

  document.body.style.overflow = 'hidden';
}

/* ═══════════════════════════
   CUSTOM CURSOR
═══════════════════════════ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let fx = 0, fy = 0;
  let tx = 0, ty = 0;

  document.addEventListener('mousemove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.style.left = tx + 'px';
    cursor.style.top = ty + 'px';
  });

  function animateCursor() {
    fx += (tx - fx) * 0.12;
    fy += (ty - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  const hoverEls = document.querySelectorAll('a, button, .project-card, .tool-chip, .filter-tab');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
  });
}

/* ═══════════════════════════
   NAVBAR
═══════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  // Hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mob-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // Close on scroll
  window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

/* ═══════════════════════════
   THEME TOGGLE
═══════════════════════════ */
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    showToast(next === 'dark' ? '🌙 Dark mode on' : '☀️ Light mode on');
  });
}

/* ═══════════════════════════
   SCROLL REVEAL
═══════════════════════════ */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(item => observer.observe(item));
}

/* ═══════════════════════════
   SKILL BARS
═══════════════════════════ */
function initSkillBars() {
  const bars = document.querySelectorAll('.sb-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.w + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  bars.forEach(bar => observer.observe(bar));
}

/* ═══════════════════════════
   COUNTER ANIMATION
═══════════════════════════ */
function animateCounters() {
  document.querySelectorAll('.hstat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current;
    }, 40);
  });
}

/* ═══════════════════════════
   PROJECTS GRID
═══════════════════════════ */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  grid.innerHTML = filtered.map(p => `
    <div class="project-card" data-category="${p.category.join(' ')}">
      <div class="proj-img" style="background: ${p.bg};">
        <div class="proj-img-inner">${p.emoji}</div>
        <div class="proj-overlay">
          <a href="${p.liveUrl}" class="proj-link" target="_blank">Live ↗</a>
          <a href="${p.codeUrl}" class="proj-link" target="_blank">Code ↗</a>
        </div>
      </div>
      <div class="proj-body">
        <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
      </div>
    </div>
  `).join('');
}

function initProjects() {
  renderProjects();

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      renderProjects(this.dataset.filter);
    });
  });
}

/* ═══════════════════════════
   TESTIMONIALS SLIDER
═══════════════════════════ */
function initTestimonials() {
  const track = document.getElementById('test-track');
  const dotsContainer = document.getElementById('slider-dots');
  if (!track) return;

  // Group into slides of 3
  const perSlide = window.innerWidth < 768 ? 1 : 3;
  const slides = [];
  for (let i = 0; i < testimonials.length; i += perSlide) {
    slides.push(testimonials.slice(i, i + perSlide));
  }

  // Render
  track.innerHTML = slides.map(slide => `
    <div class="testimonial-slide">
      ${slide.map(t => `
        <div class="test-card">
          <div class="test-stars">${'★'.repeat(t.stars)}</div>
          <p class="test-quote">"${t.quote}"</p>
          <div class="test-author">
            <div class="test-av">${t.initials}</div>
            <div>
              <div class="test-name">${t.name}</div>
              <div class="test-role">${t.role}</div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Dots
  dotsContainer.innerHTML = slides.map((_, i) =>
    `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
  ).join('');

  let current = 0;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  document.getElementById('prev-btn').addEventListener('click', () => goTo(current - 1));
  document.getElementById('next-btn').addEventListener('click', () => goTo(current + 1));
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index)));
  });

  // Auto-advance
  let autoTimer = setInterval(() => goTo(current + 1), 5000);
  track.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.addEventListener('mouseleave', () => { autoTimer = setInterval(() => goTo(current + 1), 5000); });
}

/* ═══════════════════════════
   CONTACT FORM
═══════════════════════════ */
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  function validate() {
    let valid = true;

    const fname = document.getElementById('fname');
    const fnameErr = document.getElementById('fname-err');
    if (!fname.value.trim()) {
      fnameErr.textContent = 'First name is required.';
      fname.classList.add('error');
      valid = false;
    } else {
      fnameErr.textContent = '';
      fname.classList.remove('error');
    }

    const email = document.getElementById('email');
    const emailErr = document.getElementById('email-err');
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email.value)) {
      emailErr.textContent = 'Please enter a valid email address.';
      email.classList.add('error');
      valid = false;
    } else {
      emailErr.textContent = '';
      email.classList.remove('error');
    }

    const msg = document.getElementById('message');
    const msgErr = document.getElementById('msg-err');
    if (msg.value.trim().length < 20) {
      msgErr.textContent = 'Message must be at least 20 characters.';
      msg.classList.add('error');
      valid = false;
    } else {
      msgErr.textContent = '';
      msg.classList.remove('error');
    }

    return valid;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;

    const btn = document.getElementById('form-btn');
    btn.textContent = 'Sending…';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#22c55e';
      document.getElementById('form-success').classList.add('show');
      showToast('✓ Message sent! I\'ll reply within 24 hours.');
      form.reset();

      setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.style.opacity = '';
        btn.disabled = false;
        document.getElementById('form-success').classList.remove('show');
      }, 4000);
    }, 1800);
  });

  // Live validation on blur
  ['fname', 'email', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('blur', validate);
  });
}

/* ═══════════════════════════
   SMOOTH SCROLL (anchor links)
═══════════════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ═══════════════════════════
   TOAST NOTIFICATION
═══════════════════════════ */
function showToast(msg, duration = 3000) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ═══════════════════════════
   FOOTER YEAR
═══════════════════════════ */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ═══════════════════════════
   KEYBOARD NAVIGATION
═══════════════════════════ */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      const hamburger = document.getElementById('hamburger');
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
      }
    }
  });
}

/* ═══════════════════════════
   PARALLAX (subtle hero)
═══════════════════════════ */
function initParallax() {
  const heroCard = document.querySelector('.hero-card');
  if (!heroCard) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroCard.style.transform = `translateY(${-y * 0.06}px)`;
  });
}

/* ═══════════════════════════
   INIT — run everything
═══════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavbar();
  initTheme();
  initSkillBars();
  initProjects();
  initTestimonials();
  initForm();
  initSmoothScroll();
  initKeyboard();
  initParallax();
  setYear();
});
