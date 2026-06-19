/**
 * @brief :This function checks for user authentication on page load. 
 * If the user is not authenticated, it redirects them to the sign-in page. 
 * If authenticated, it fetches the user's profile data from the server.
 * @note This function runs once the DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", async () => {

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/sign_in.html";
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
        window.location.href = "/sign_in.html";
        return;
    }

    const data = await response.json();

    //console.log(data);
});

///////////////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////////// GENERATE DYNAMICALLY SCROLL CAROUSELS ////////////////////////////

/**
 * @brief This code render scrollable carousel on the home page
 */


let matchItem
let itemClickedID = localStorage.getItem("id");


if(itemClickedID){
  matchItem = products.find(p => p.id === itemClickedID);
}
else{
  matchItem = products.find(p => p.id === products[0].id);
}

let matchClickedItemArray = products.filter(p => p.categories[1] === matchItem.categories[1]);

//Best Sellers in Beauty & Personal Care

const carousels = [
    {
        title: "Selected for you",
        //products: products.slice(0, 20)
        products: matchClickedItemArray
    },
    {
        title: "Best Sellers in Electronics",
        products: products.slice(15, 30)
    },
    {
        title: "Recommended For You",
        products: products.slice(30, 45)
    },
    {
        title: "Clothes & Deals",
        products: products.slice(45, 60)
    },
    {
        title: "Home Essentials",
        products: products.slice(60, 72)
    },
    {
        title: "Recommended For You",
        products: products.slice(30, 45)
    },
    {
        title: "Top Fashion Deals",
        products: products.slice(50, 70)
    }
];

let carouselHTML = '';
document.querySelectorAll('.carousel-section').forEach((carousel, index) => {

    carouselHTML += `
              
                    <div class="leftpage-section"></div>
                    <div class="carousel">
                        <div class="carousel-title">
                            <span>${carousels[index].title}</span>
                        </div>
                        <div class="carousel-track">

                            <button class="arrow left">&#10094;</button>
                            `;
                            
    carousels[index].products.forEach(item => {

      carouselHTML += `
            
                   <a class="a-link-normal" href="${item.productPage}.html?id=${item.id}">
                      <img src="${item.images.cartImageConfiramation}" alt="${item.brand}">
                   </a>
                `;

    });

    carouselHTML += `
           
                  <button class="arrow right">&#10095;</button>
                  </div>   
              </div>
              <div class="rightpage-section"></div>`;


    carousel.innerHTML = carouselHTML;
    carouselHTML = "";


});


///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// GENERATE DYNAMICALLY MULTIPLE CAROUSELS ///////////////////////////////

function generateMultipleCarousel(){
    const carousels = [
    { title: "Selected for you", filteredItems : products.filter(p => p.categories[1] === matchItem.categories[1]) },
    { title: "Smart Watches", filteredItems : products.filter(p => p.categories[1] === "watches") },
    { title: "Top Rated", filteredItems : products.filter(p => p.rating.average >= 4.5) },
    { title: "laptos & Accesories", filteredItems : products.filter(p => p.categories[1] === "laptops") },
    { title: "tablets", filteredItems : products.filter(p => p.categories[1] === "tablets") }
    ];

    const CarouselTrack = document.querySelectorAll('.checkout-carousel-track');
    let HTMLSummary = "";

    CarouselTrack.forEach((carousel, index) => {

        // Create pages with 7 items each
        const itemsPerPage = 7;

        for (let i = 0; i < carousels[index].filteredItems.length; i += itemsPerPage) {
            const page = document.createElement("div");
            page.classList.add("checkout-carosel-page");

           carousels[index].filteredItems.slice(i, i + itemsPerPage).forEach(product => {

                HTMLSummary += `
                        <div class="checkout-carousel-img">
                            <a href="${product.productPage}.html?id=${product.id}">
                            <img src="${product.images.cartImageConfiramation}" alt="${product.brand}">
                            </a>
                            <span class="checkout-carousel-img-text">
                                <a href="${product.productPage}.html?id=${product.id}">
                                ${product.shortTitle}...
                                </a>
                            </span>
                            <span class="checkout-carousel-img-rating">   
                                <img src="images/bottom-carousel-images/star.png" alt="Star Rating">${product.rating.average}
                            </span>
                            <span class="checkout-amazon-choice">Amazon's choice</span>
                            <span class="checkout-carousel-img-price">$${product.price.currentPrice} ($0.23/fluid ounce)</span>
                            <span class="checkout-carousel-prime"><i class="bi bi-check-lg"></i>prime</span>
                        </div>`;
            
            });

            page.innerHTML = HTMLSummary;
            
            carousel.appendChild(page);
            HTMLSummary = "";                                     // Reset HTML summary for the next page
        }
    });
}

generateMultipleCarousel();
///////////////////////////////////////////////////////////////////////////////////////////
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

/////////////////////////// GENERATE DYNAMICALLY ROW OF SQUARES///////////////////////////////
/**
 * @brief This code generates dynamically The row of square
 * @code: {JavaScript}
 *        {products.filter(p => p.categories.includes("jewelry")).slice(0, 4)}
 *         includes() is a JavaScript method that checks whether an array contains a specific value.
 *         It returns true if the specific value is included in the array and the product is store
 */

const sections = [
    {
        title: "Shop Leggings & Dresses",
        linkText: "Shop Shirts & Dress",
        //products: products.filter(p => p.categories.includes("watches") || p.categories.includes("computers")).slice(0, 4)
        products: [
          ...products.filter(p => p.categories.includes("shirts")).slice(0, 2),

          ...products.filter(p => p.categories.includes("dresses")).slice(0, 2)
        ]
    },

    {
        title: "Shop Watches & Tablets Picks",
        linkText: "Shop Saks on Amazon",
        products: [
          ...products.filter(p => p.categories.includes("watches")).slice(0, 2),

          ...products.filter(p => p.categories.includes("tablets")).slice(0, 2)
        ]
    },

    {
        title: "Deals on Tech",
        linkText: "Shop all tech deals",
        products: [
          ...products.filter(p => p.categories.includes("computers")).slice(0, 1),
          ...products.filter(p => p.categories.includes("tablets")).slice(0, 1),
          ...products.filter(p => p.categories.includes("watches")).slice(0, 1),
          ...products.filter(p => p.categories.includes("watches")).slice(0, 1)
        ]
    },

    {
        title: "Trending Watches",
        linkText: "See all watches",
        products: products.filter(p => p.categories.includes("watches")).slice(0, 4)
    }
];

const rowElement = document.querySelectorAll('.row-container');
const squareElement = document.querySelector('.title-four-picture-container');

let squareHTML = '';

rowElement.forEach(square => {
    for(let i = 0; i < 4; ++i){
        
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('title-four-picture-container');

        squareHTML += `<span>${sections[i].title}</span>
                    <div class="first-square-container">
                            <div class="first-square-first-column">
                                <a class="a-link-dolce-gabana" href="${sections[i].products[0].productPage}.html?id=${sections[i].products[0].id}">
                                    <img class="container1-img" src="${sections[i].products[0].images.cartImageConfiramation}" alt="${sections[i].products[0].brand}">
                                </a>
                                <div class="chanel">${sections[i].products[0].brand}</div>
                                <a class="a-link-dolce-gabana" href="${sections[i].products[1].productPage}.html?id=${sections[i].products[1].id}">
                                    <img class="container1-img" src="${sections[i].products[1].images.cartImageConfiramation}" alt="${sections[i].products[1].brand}">
                                </a>
                                <div class="chanel">${sections[i].products[1].brand}</div>   
                            </div>
                        
                            <div class="first-square-first-column">
                                <a class="a-link-dolce-gabana" href="${sections[i].products[2].productPage}.html?id=${sections[i].products[2].id}">
                                    <img class="container1-img" src="${sections[i].products[2].images.cartImageConfiramation}" alt="${sections[i].products[2].brand}">
                                </a>
                                <div class="chanel">${sections[i].products[2].brand}</div>
                                <a class="a-link-dolce-gabana" href="${sections[i].products[3].productPage}.html?id=${sections[i].products[3].id}">
                                    <img class="container1-img" src="${sections[i].products[3].images.cartImageConfiramation}" alt="${sections[i].products[3].brand}">
                                </a>
                                <div class="chanel">${sections[i].products[3].brand}</div>   
                            </div>
                    </div>
                    <a href="#jewerly">Shop ${sections[i].title}</a> 
                `;


          squareDiv.innerHTML = squareHTML;
          square.appendChild(squareDiv);
          squareHTML = '';    
    }

});

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * This code display the user username on the navbar
 */

const userName = (localStorage.getItem('username'));  // Get user username

if(userName){
    document.querySelectorAll('.js-jean-get')
        .forEach(element => {
            element.innerHTML = userName;
        });       
}

///////////////////////////////////////////////////////////////////////////////////////////////////


