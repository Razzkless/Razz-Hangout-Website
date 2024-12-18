// Smooth scrolling for the "Join Now" button
document.getElementById('join-now-btn').addEventListener('click', function (event) {
  window.scrollTo({
    top: document.querySelector('.features').offsetTop,
    behavior: 'smooth',
  });
});

// Interactive animation when scrolling
window.addEventListener('scroll', function () {
  const features = document.querySelectorAll('.feature');
  const triggerBottom = window.innerHeight / 5 * 4;

  features.forEach((feature) => {
    const featureTop = feature.getBoundingClientRect().top;
    if (featureTop < triggerBottom) {
      feature.classList.add('visible');
    } else {
      feature.classList.remove('visible');
    }
  });
});
