/**
 * Engineering Consulting Website - Main Script (v1.0)
 * Lightweight, zero-dependency, accessible interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      mobileToggle.textContent = isOpen ? 'CLOSE' : 'MENU';
    });

    // Close menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.textContent = 'MENU';
        }
      });
    });
  }

  // Active Navigation Highlighting on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navItems.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  // Contact Form Handling (Client-side validation & Mailto fallback)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim();
      const company = document.getElementById('contact-company')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const projectType = document.getElementById('contact-project-type')?.value;
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !message) {
        alert('Please complete all required fields.');
        return;
      }

      // Display clean success state
      formStatus.className = 'form-status success';
      formStatus.innerHTML = `
        <strong>Inquiry Prepared</strong><br>
        Thank you, ${name}. Your project summary has been recorded. To ensure direct delivery, you may also dispatch this inquiry directly to 
        <a href="mailto:engineering@[DOMAIN]?subject=${encodeURIComponent(`[Consulting Inquiry] ${projectType} - ${company}`)}&body=${encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject Scope:\n${message}`)}" style="color: #38bdf8; text-decoration: underline;">engineering@[DOMAIN]</a>.
      `;
      formStatus.style.display = 'block';

      // Reset form
      contactForm.reset();
    });
  }
});
