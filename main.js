// ===== DARK / LIGHT MODE =====
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ===== NAVBAR: scrolled =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== NAVBAR: active link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: `-${getComputedStyle(html).getPropertyValue('--nav-h')} 0px -60% 0px` });
sections.forEach(s => sectionObserver.observe(s));

// ===== MOBILE MENU =====
const toggle  = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-links');
toggle.addEventListener('click', () => navList.classList.toggle('open'));
navLinks.forEach(link => link.addEventListener('click', () => navList.classList.remove('open')));

// ===== PANEL TABS =====
const tabs = document.querySelectorAll('.panel-tab');
const codePanel = document.querySelector('.panel-code');
const designPanel = document.getElementById('designPanel');

if (tabs.length && codePanel && designPanel) {
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active-code', 'active-design'); t.style.color = 'var(--text-dim)'; });
      if (i === 0) {
        tab.classList.add('active-code');
        codePanel.style.display = 'block';
        designPanel.style.display = 'none';
      } else {
        tab.classList.add('active-design');
        codePanel.style.display = 'none';
        designPanel.style.display = 'block';
      }
    });
  });
}

// ===== TYPED EFFECT =====
const roles = [
  'Full Stack Dev',
  'PHP Developer',
  'UX/UI Designer',
  'REST API Builder',
  'UX Researcher',
  'MySQL & Backend',
];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-role');

function typeEffect() {
  if (!typedEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }
  let delay = isDeleting ? 45 : 85;
  if (!isDeleting && charIndex === current.length) { delay = 2200; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 350; }
  setTimeout(typeEffect, delay);
}
typeEffect();

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
revealEls.forEach(el => revealObserver.observe(el));
