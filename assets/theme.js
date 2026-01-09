/*
  Type-Lean Theme JS
  Minimal JavaScript to enhance UX
  - Handles mobile navigation toggle
  - Smooth scroll for anchor links
  - Optional thumbnail image switching on product pages
*/

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Product gallery thumbnail switching
  const thumbs = document.querySelectorAll('.thumbnail-row img');
  const mainImage = document.querySelector('.main-image img');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      if (mainImage && thumb.src) {
        mainImage.src = thumb.src;
      }
    });
  });
});
