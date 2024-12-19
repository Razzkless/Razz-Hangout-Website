// Handle form submission for the contact page
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple form validation
  if (!name || !email || !message) {
    displayResponse("Please fill in all fields.", "error");
    return;
  }

  // Simulate successful form submission (for now, you can integrate with a backend or an email service later)
  displayResponse("Thank you for reaching out, we will get back to you soon!", "success");

  // Clear form fields after submission
  document.getElementById('contact-form').reset();
});

// Function to display form submission response
function displayResponse(message, type) {
  const responseElement = document.getElementById('form-response');
  responseElement.textContent = message;
  responseElement.className = 'form-response ' + type;
}

// Smooth Scroll to Section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Change Navbar color on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#181820'; // Dark background after scrolling
  } else {
    navbar.style.backgroundColor = 'transparent'; // Original transparent background
  }
});

// Add Active Class to Navbar Items on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 50) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.href.includes(current)) {
      link.classList.add('active');
    }
  });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.backgroundColor = '#5865f2';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

// Show or hide back to top button based on scroll position
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll back to top
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Section animation (optional, for additional interactivity)
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.feature, .about, .news-item');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});

// Helper function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
