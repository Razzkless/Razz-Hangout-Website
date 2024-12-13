document.querySelectorAll('nav ul li a').forEach((link) => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const fadeInElements = document.querySelectorAll('section');

const handleFadeIn = () => {
  fadeInElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleFadeIn);
document.addEventListener('DOMContentLoaded', handleFadeIn);

document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.clientX - this.offsetLeft}px`;
    ripple.style.top = `${e.clientY - this.offsetTop}px`;
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

document.querySelectorAll('.collapsible-header').forEach((header) => {
  header.addEventListener('click', () => {
    const collapsible = header.parentElement;

    collapsible.classList.toggle('open');

    document.querySelectorAll('.collapsible').forEach((item) => {
      if (item !== collapsible) {
        item.classList.remove('open');
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-text, .animate-btn, .animate-feature");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach(element => observer.observe(element));
});

