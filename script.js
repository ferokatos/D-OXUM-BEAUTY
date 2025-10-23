// This script can be used for future interactivity on the site,
// such as handling form submissions, animations, or interactive UI elements.

// Example: Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if(targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for sticky header
        behavior: 'smooth'
      });
    }
  });
});
