// Select all slides
const slides = document.querySelectorAll('.slide');

// Buttons
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Current slide index
let currentIndex = 0;

// Auto slide interval (3 seconds)
let autoSlide = setInterval(nextSlide, 3000);

// Show slide by index
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Move to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Move to previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Button event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Reset auto slideshow after manual click
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 3000);
}
