document.getElementById('contactButton').addEventListener('click', function() {
  window.location.href = 'mailto:abhayathapa5555@gmail.com';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});