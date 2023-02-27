const slides = document.querySelectorAll('.slide');

function getRandomInt(min = 0, max = slides.length) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function slidesPlugin(slides = [], activeSlide = 0) {
  slides[activeSlide].classList.add('active');

  function removeActiveClass() {
    slides.forEach((slide) => slide.classList.remove('active'));
  }

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      removeActiveClass();
      slide.classList.add('active');
    });
  });
}

slidesPlugin(slides, getRandomInt());
