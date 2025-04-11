// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Stats counter animation
        if (entry.target.classList.contains('stat-number')) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          const duration = 2000; // Animation duration in milliseconds
          const start = 0;
          const increment = target / (duration / 16); // Update every 16ms (60fps)
          
          let current = start;
          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.textContent = target + (entry.target.getAttribute('data-suffix') || '');
              clearInterval(counter);
            } else {
              entry.target.textContent = Math.floor(current) + (entry.target.getAttribute('data-suffix') || '');
            }
          }, 16);
        }
      }
    });
  }, { threshold: 0.1 });

  // Observe all animated elements including section titles
  document.querySelectorAll('.slide-in-left, .slide-in-right, .fade-up, .feature-card, .stat-card, .form-field, .stat-number, .section-title').forEach((element) => {
    observer.observe(element);
  });

  // Partners slider animation
  const partnersTrack = document.querySelector('.partners-track');
  if (partnersTrack) {
    partnersTrack.addEventListener('mouseover', (e) => {
      const logo = e.target.closest('.partner-logo');
      if (logo) {
        logo.classList.add('partner-logo-hover');
      }
    });

    partnersTrack.addEventListener('mouseout', (e) => {
      const logo = e.target.closest('.partner-logo');
      if (logo) {
        logo.classList.remove('partner-logo-hover');
      }
    });
  }
});