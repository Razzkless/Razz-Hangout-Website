// Smooth scrolling for the "Join Now" button
document.getElementById('join-now-btn').addEventListener('click', function (event) {
    event.preventDefault();
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
        feature.style.transform = 'scale(1.05)';
        feature.style.opacity = '1';
      } else {
        feature.style.transform = 'scale(1)';
        feature.style.opacity = '0.8';
      }
    });
  });
  