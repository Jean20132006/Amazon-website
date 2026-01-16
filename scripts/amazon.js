/**
 * @brief:This function handles the slideshow functionality 
 * including next/previous slide navigation, auto-sliding, 
 * and video play/pause controls.*/

// Select all slides
const slides = document.querySelectorAll('.slide');

// Buttons
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Current slide index
let currentIndex = 0;

// Auto slide interval (8 seconds)
let autoSlide = setInterval(nextSlide, 8000);

// Show slide by index
/*function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}*/
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');

    // If slide is a video, pause it
    if (slide.tagName === 'VIDEO') {
      slide.pause();
      /*slide.play();*/
      slide.currentTime = 0;
    }
  });

  const activeSlide = slides[index];
  activeSlide.classList.add('active');

  // If active slide is a video, play it
  if (activeSlide.tagName === 'VIDEO') {
    activeSlide.play();
  }
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
  autoSlide = setInterval(nextSlide, 8000);
}
/*function to toggle play/pause on video slides */
const video = document.getElementById("video");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");

// Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    /*playPauseBtn.textContent = "⏸";*/
    playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
  }
});

// Mute / Unmute
muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  if(video.muted){
    muteBtn.innerHTML = '<img src="images/volume-mute.png" alt="Muted">';
  } else {
    muteBtn.innerHTML = '<img src="images/volume-up.png" alt="Unmuted">';
  }
});

// Reset play icon when video ends
video.addEventListener("ended", () => {
  /*playPauseBtn.textContent = "▶";*/
  playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
});

/**
 * @brief:This function handles the carousel functionality 
 * including next/previous item navigation.
 */
const track = document.querySelector('.carousel-track');
  const leftBtn = document.querySelector('.arrow.left');
  const rightBtn = document.querySelector('.arrow.right');

  const scrollAmount = 300;

  function updateArrows() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    leftBtn.disabled = track.scrollLeft <= 0;
    rightBtn.disabled = track.scrollLeft >= maxScrollLeft - 1;
  }

  leftBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);

  // Initialize on load
  updateArrows();

  
