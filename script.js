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
  {
    threshold: 0.1
  }
);

sections.forEach(section => {
  section.classList.add('hidden'); // initially hidden
  observer.observe(section);
});