// Contact button
document.getElementById('contactButton').addEventListener('click', function() {
  window.location.href = 'mailto:abhayathapa5555@gmail.com';
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in sections on scroll
const sections = document.querySelectorAll('.content-section, .hero-content');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach(section => {
  observer.observe(section);
});
// Highlight active nav link on scroll
const navLinks = document.querySelectorAll('nav ul li a');
const sectionsAll = document.querySelectorAll('main .content-section');

window.addEventListener('scroll', () => {
  let current = '';
  sectionsAll.forEach(section => {
    const sectionTop = section.offsetTop - 100; // adjust for header height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
