document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  burgerMenu.addEventListener('click', function() {
    // Toggle burger menu animation
    this.classList.toggle('active');
    
    // Toggle nav menu visibility
    navLinks.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking on a link (for mobile)
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close menu when resizing to larger screens
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});