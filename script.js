// Smooth navigation, tab activation, floating icons, contact mailto (email not visible in HTML)

document.addEventListener('DOMContentLoaded', () => {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scroll for all anchor links that point to IDs
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 84; // header + tabbar comfortable offset
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior:'smooth' });
        }
      }
      // Manage active state for nav/tab links
      const group = a.classList.contains('nav-btn') ? '.nav-btn' : '.tab-link';
      document.querySelectorAll(group).forEach(n => n.classList.remove('active'));
      a.classList.add('active');
    });
  });

  // Tab-list click delegates (keeps tab highlight synced)
  document.getElementById('tabList').addEventListener('click', (ev) => {
    const a = ev.target.closest('a.tab-link');
    if (!a) return;
    document.querySelectorAll('.tab-link').forEach(t => t.classList.remove('active'));
    a.classList.add('active');
  });

  // Small tidy: if nav-btn exists, clicking highlights that too
  const navList = document.getElementById('navList');
  if (navList) {
    navList.addEventListener('click', (ev) => {
      const a = ev.target.closest('a.nav-btn');
      if (!a) return;
      document.querySelectorAll('.nav-btn').forEach(n => n.classList.remove('active'));
      a.classList.add('active');
    });
  }

  // Floating icons (reduced count, subtle)
  const container = document.getElementById('floatingIcons');
  const HEART_COUNT = 6;
  const PEACE_COUNT = 3;
  function createIcon(ch, size, left, delay, duration, rotate){
    const s = document.createElement('span');
    s.textContent = ch;
    s.style.position='absolute';
    s.style.left = left + '%';
    s.style.top = '-8%';
    s.style.fontSize = size + 'px';
    s.style.opacity = '0.9';
    s.style.pointerEvents = 'none';
    s.style.transform = `translateY(-10px) rotate(${rotate}deg)`;
    s.style.animation = `fall ${duration}s linear ${delay}s forwards`;
    container.appendChild(s);
  }
  for (let i=0;i<HEART_COUNT;i++){
    createIcon('❤', 14 + Math.random()*8, 6 + Math.random()*88, Math.random()*4, 8 + Math.random()*8, Math.random()*40-20);
  }
  for (let i=0;i<PEACE_COUNT;i++){
    createIcon('☮', 20 + Math.random()*8, 6 + Math.random()*88, Math.random()*3, 10 + Math.random()*8, Math.random()*40-20);
  }
  // keyframes injected
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(-10px) rotate(0deg); opacity:0.95; }
      70% { opacity:0.95; }
      100% { transform: translateY(120vh) rotate(160deg); opacity:0.06; }
    }
  `;
  document.head.appendChild(style);

  // Contact form: assemble email in JS (not shown on page)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim() || 'No name');
    const subject = encodeURIComponent(document.getElementById('subject').value.trim() || 'Website contact');
    const message = encodeURIComponent(document.getElementById('message').value.trim() || '');

    // email assembled from pieces so it's not visible in HTML
    const user = 'abhayathapa5555';
    const domain = 'gmail' + '.com';
    const to = `${user}@${domain}`;

    const body = encodeURIComponent(`From: ${name}\n\n${message}\n\n---\nSent from the website.`);
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    // open mail client
    window.location.href = mailto;
  });

  // clear button
  const clearBtn = document.getElementById('clearBtn');
  if (clearBtn) clearBtn.addEventListener('click', () => contactForm.reset());
});