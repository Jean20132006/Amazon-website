/**
 * @brief :This function handles the slideshow functionality 
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
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');

    // If slide is a video, pause it
    if (slide.tagName === 'VIDEO') {
      slide.pause();
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
  playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
});

/**
 * @brief :This function handles the carousel functionality 
 * including next/previous item navigation.
 */

/*const track = document.querySelector('.carousel-track');
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
  /*updateArrows();*/


/////////////////////////////////////////////////////////////////
/**
 * @brief :This function handles the carousel functionality 
 * including next/previous item navigation.
 * @note Handles carousel functionality per carousel instance
 */

document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const leftBtn = carousel.querySelector('.arrow.left');
  const rightBtn = carousel.querySelector('.arrow.right');
  const scrollAmount = 300;
  const tolerance = 2;

  function updateArrows() {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    leftBtn.disabled = track.scrollLeft <= tolerance;
    rightBtn.disabled = track.scrollLeft >= maxScrollLeft - tolerance;
  }

  leftBtn.addEventListener('click', e => {
    e.preventDefault(); // Prevent the link from opening the href or url
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', e => {
    e.preventDefault(); // Prevent the link from opening the href or url
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('load', updateArrows);
  window.addEventListener('resize', updateArrows);
});

//////////////////////////////////////////////////////////////////
/**
 * @brief Handles multiple checkout carousels independently
 */

document.querySelectorAll('.checkout-carousel-container').forEach(container => {

    const leftButton  = container.querySelector('.checkout-arrow.left');
    const rightButton = container.querySelector('.checkout-arrow.right');
    const track       = container.querySelector('.checkout-carousel-track');
    const pages       = container.querySelectorAll('.checkout-carosel-page');
    const carousel    = container.querySelector('.checkout-carousel');

    const currentPage = container.querySelector('.current-page');
    const totalPage   = container.querySelector('.total-pages');

    let currentIndex = 0;

    totalPage.innerHTML = pages.length;

    function getPageWidth() {
        return carousel.clientWidth;
    }

    function updateCarousel() {
        const pageWidth = getPageWidth();
        track.style.transform = `translateX(-${currentIndex * pageWidth}px)`;

        if (currentPage) {
            currentPage.innerHTML = currentIndex + 1;
        }

        leftButton.disabled  = currentIndex === 0;
        rightButton.disabled = currentIndex === pages.length - 1;
    }

    leftButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    rightButton.addEventListener('click', () => {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Recalculate width on resize
    window.addEventListener('resize', updateCarousel);

    // Initialize
    updateCarousel();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////// Cart Quantity Display in Header /////////////////////////////////////////////
function displayCartNumberItems(){
  let cartNumber = Number(localStorage.getItem("cartQuantity")) || 0; //Get current cart quantity from localStorage or initialize to 0 
  const cartNumberElement = document.querySelector('.js-cart-num-items');
  cartNumberElement.innerText = cartNumber;
}

displayCartNumberItems();
//////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", async () => {

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/login.html";
        return;
    }

    const response = await fetch("http://localhost:4000/api/v1/users/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        // token invalid or expired
        localStorage.removeItem("token");
        window.location.href = "/login.html";
        return;
    }

    const data = await response.json();

    //console.log(data);
});



