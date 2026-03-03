//////////////////////////////////////////////////////////////////

/**
 * @brief This script handles carousel review functionality
 */
let leftButtonAddToCart = document.querySelector('.add-to-cart-arrow.left');
let rightButtonAddToCart = document.querySelector('.add-to-cart-arrow.right');
let trackAddToCart = document.querySelector('.add-to-cart-carousel-track');
let currentPageAddToCart = document.querySelector('.add-to-cart-current-page');
let totalPageAddToCart = document.querySelector('.add-to-cart-total-pages');
let pagesAddToCart = document.querySelectorAll('.add-to-cart-first-carosel-page');
totalPageAddToCart.innerHTML = pagesAddToCart.length;

let currentIndexAddToCart = 0;
let pageWidthAddToCart = document.querySelector('.add-to-cart-first-carousel').clientWidth;
function updateCarouselAddToCart(){
    trackAddToCart.style.transform = `translateX(-${currentIndexAddToCart * pageWidthAddToCart}px)`;
    currentPageAddToCart.innerHTML = currentIndexAddToCart + 1;
    if(currentIndexAddToCart === 0){
        leftButtonAddToCart.disabled = true;
    }
    else{
        leftButtonAddToCart.disabled = false;
    }
    if(currentIndexAddToCart === pagesAddToCart.length - 1){
        rightButtonAddToCart.disabled = true;
    }
    else{
        rightButtonAddToCart.disabled = false;
    }
}
leftButtonAddToCart.addEventListener('click', () => {
    if(currentIndexAddToCart > 0){
        currentIndexAddToCart--;
        updateCarouselAddToCart();
    }
});
rightButtonAddToCart.addEventListener('click', () => {
    if(currentIndexAddToCart < pagesAddToCart.length - 1){
        currentIndexAddToCart++;
        updateCarouselAddToCart();
    }
});

updateCarouselAddToCart();         // Initialize carousel state

//////////////////////////////////////////////////////////////////
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


//////////////////////////////////////////////////////////////////