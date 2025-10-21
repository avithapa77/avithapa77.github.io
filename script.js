// Responsive interactions + floating icons + contact form behavior

document.addEventListener('DOMContentLoaded', function () {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Build floating icons (hearts and peace signs)
  const container = document.getElementById('floatingIcons');

  // configuration: reduce number of hearts (user asked to cut hearts in half)
  const HEART_COUNT = 8;      // smaller number for a cleaner look
  const PEACE_COUNT = 3;      // a few peace signs, larger
  const total = HEART_COUNT + PEACE_COUNT;

  const makeIcon = (ch, size, left, delay, duration) => {
    const s = document.createElement('span');
    s.className = 'float-icon';
    s.textContent = ch;
    s.style.position = 'absolute';
    s.style.left = left + '%';
    s.style.top = '-6%';
    s.style.fontSize = size + 'px';
    s.style.opacity = 0.9;
    s.style.transform = `translateY(-10px)`;
    s.style.willChange = 'transform, opacity';
    s.style.pointerEvents = 'none';
    s.style.animation = `fall ${duration}s linear ${delay}s forwards`;
    container.appendChild(s);
  };

  // create hearts
  for (let i = 0; i < HEART_COUNT; i++) {
    const left = 6 + Math.random() * 88;
    const size = 14 + Math.random() * 14; // small hearts
    const delay = Math.random() * 4;
    const duration = 8 + Math.random() * 8;
    makeIcon('❤', size, left, delay, duration);
  }

  // create peace signs - slightly larger as requested
  for (let i = 0; i < PEACE_COUNT; i++) {
    const left = 6 + Math.random() * 88;
    const size = 22 + Math.random() * 12; // larger than hearts
    const delay = Math.random() * 3;
    const duration = 10 + Math.random() * 8;
    makeIcon('☮', size, left, delay, duration);
  }

  // CSS animation injected once to keep the CSS file focused
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      0% { transform: translateY(-10px) rotate(0deg); opacity:0.95; }
      70% { opacity:0.95; }
      100% { transform: translateY(120vh) rotate(180deg); opacity:0.06; }
    }
    .float-icon { user-select:none; }
  `;
  document.head.appendChild(style);

  // Contact form: build mailto without showing email address visibly in HTML
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const subject = encodeURIComponent(document.getElementById('subject').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    // Obfuscate the email address pieces (so it's not plain text in HTML)
    const user = 'abhayathapa5555';
    const domain = 'gmail' + '.com';
    const email = user + '@' + domain;

    // Compose body with some context
    const body = encodeURIComponent(`From: ${name}\n\n${message}\n\n---\nSent from the website.`);
    const mailto = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open user's default mail client
    window.location.href = mailto;
  });

  // Clear button
  document.getElementById('clearBtn').addEventListener('click', function () {
    contactForm.reset();
  });

  // Mobile: smooth scrolling to anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // If header nav hidden on mobile, we can make the brand clickable to go home (already is)
});