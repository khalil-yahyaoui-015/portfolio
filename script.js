/* ============================================
   script.js — Khalil Yahyaoui Portfolio
   ============================================ */

// ─── LANG TOGGLE ───
function setLang(lang) {
  document.body.className = 'lang-' + lang;
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
  localStorage.setItem('ky-lang', lang);
}

// Restore saved language preference
const saved = localStorage.getItem('ky-lang');
if (saved) setLang(saved);

// ─── FADE-IN ON SCROLL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
