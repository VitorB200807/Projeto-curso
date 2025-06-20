let currentSlide = 0;
const carouselInner = document.getElementById('carouselInner');
const totalSlides = document.querySelectorAll('.carousel-item').length;

function updateCarousel() {
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}
