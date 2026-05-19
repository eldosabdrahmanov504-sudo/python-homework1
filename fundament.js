// ── Header scroll shadow ──
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Active nav link via IntersectionObserver ──
const navLinks    = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('section[id]');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.25, rootMargin: '-64px 0px -40% 0px' });
pageSections.forEach(s => navObserver.observe(s));

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(el => revealObserver.observe(el));

// ── Tab switcher ──
function switchTab(el, tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const first   = document.getElementById('tab-first');
  const legends = document.getElementById('tab-legends');
  if (first)   first.style.display   = tab === 'first'   ? '' : 'none';
  if (legends) legends.style.display = tab === 'legends' ? '' : 'none';
}

// ── Back-to-top button ──
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Image error fallback ──
document.querySelectorAll('.player-photo').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none';
    const fallback = this.parentElement.querySelector('.player-photo-fallback');
    if (fallback) fallback.style.display = 'flex';
  });
});
document.querySelectorAll('.leg-avatar img').forEach(img => {
  img.addEventListener('error', function () {
    this.style.display = 'none';
  });
});

// ── Animated counters ──
function animateValue(el, target, suffix, duration) {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('[data-count]').forEach(el => {
      const raw    = el.getAttribute('data-count');
      const num    = parseFloat(raw.replace(/[^0-9.]/g, ''));
      const suffix = raw.replace(/[0-9.,]/g, '');
      animateValue(el, num, suffix, 1400);
    });
    counterObserver.unobserve(e.target);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.history-nums, .espai-stats').forEach(el => counterObserver.observe(el));