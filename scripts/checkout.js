/**
 * @brief Script to handle drop down functionality for 
 * Ingredients section in checkout page
 * @param {HTMLElement} downButton - The dropdown button element
 * @param {HTMLElement} ingredientsSection - The section to show/hide content
 */
let downButton = document.querySelector('.down-button');
let ingredientsSection = document.querySelector('.empty-div');

downButton.addEventListener('click', () => {
    if(downButton.classList.contains('down-button')){
        ingredientsSection.innerHTML= `Filtered Lowfat Grade A Milk,
        Alkalized Cocoa, Contains Less Than 1% of: Honey, Natural Flavors, 
        Maltodextrin, Sodium Polyphosphate, Lactase Enzyme, Acesulfame Potassium, 
        Sucralose, Carrageenan, Vitamin A Palmitate, 
        Vitamin D3.`;
        downButton.innerHTML= `<i class="bi bi-chevron-up"></i>`;
        downButton.classList.replace('down-button', 'up-button');
    }
    else{
        ingredientsSection.innerHTML= ``;
        downButton.innerHTML= `<i class="bi bi-chevron-down"></i>`;
        downButton.classList.replace('up-button', 'down-button');
    }
});

/** 
 * @brief This Script handle the About this item drop down
 * @param {HTMLElement} downButton2 - The dropdown button element
 * @param {HTMLElement} aboutSection - The section to show/hide content
 */
let downButton2 = document.querySelector('.down-button2');
let aboutSection= document.querySelector('.empty-div2');
downButton2.addEventListener('click', () =>{
    if(downButton2.classList.contains('down-button2')){
        aboutSection.innerHTML= `Core Power Elite High Protein Shake, Chocolate, 42g Bottle, 14oz, 12 Pack`;
        downButton2.innerHTML= `<i class="bi bi-chevron-up"></i>`;
        downButton2.classList.replace('down-button2', 'up-button2');
    }
    else{
        aboutSection.innerHTML= ``;
        downButton2.innerHTML= `<i class="bi bi-chevron-down"></i>`;
        downButton2.classList.replace('up-button2', 'down-button2');
    }
});
//////////////////////////////////////////////////////////////////

/**
 * @brief This script handles carousel review functionality
 */
let leftButtonReview = document.querySelector('.checkout-arrow-review.left-review');
let rightButtonReview = document.querySelector('.checkout-arrow-review.right-review');
let trackReview = document.querySelector('.checkout-carousel-review-track');
let currentPageReview = document.querySelector('.current-page-review');
let totalPageReview = document.querySelector('.total-pages-review');
let pagesReview = document.querySelectorAll('.checkout-carosel-review-page');
totalPageReview.innerHTML = pagesReview.length;

let currentIndexReview = 0;
let pageWidthReview = document.querySelector('.checkout-carousel-review').clientWidth;
function updateCarouselReview(){
    trackReview.style.transform = `translateX(-${currentIndexReview * pageWidthReview}px)`;
    currentPageReview.innerHTML = currentIndexReview + 1;
    if(currentIndexReview === 0){
        leftButtonReview.disabled = true;
    }
    else{
        leftButtonReview.disabled = false;
    }
    if(currentIndexReview === pagesReview.length - 1){
        rightButtonReview.disabled = true;
    }
    else{
        rightButtonReview.disabled = false;
    }
}
leftButtonReview.addEventListener('click', () => {
    if(currentIndexReview > 0){
        currentIndexReview--;
        updateCarouselReview();
    }
});
rightButtonReview.addEventListener('click', () => {
    if(currentIndexReview < pagesReview.length - 1){
        currentIndexReview++;
        updateCarouselReview();
    }
});

updateCarouselReview();         // Initialize carousel state

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
/**
 * @brief This script handles carousel video functionality
 */
let leftButtonVideo = document.querySelector('.checkout-arrow-video.left-video');
let rightButtonVideo = document.querySelector('.checkout-arrow-video.right-video');
let trackVideo = document.querySelector('.checkout-carousel-video-track');
let currentPageVideo = document.querySelector('.current-video-page');
let totalPageVideo = document.querySelector('.total-video-pages');
let pagesVideo = document.querySelectorAll('.checkout-carosel-video-page');
totalPageVideo.innerHTML = pagesVideo.length;
let currentIndexVideo = 0;
let pageWidthVideo = document.querySelector('.checkout-carousel-video').clientWidth;
function updateCarouselVideo(){
    trackVideo.style.transform = `translateX(-${currentIndexVideo * pageWidthVideo}px)`;
    currentPageVideo.innerHTML = currentIndexVideo + 1;
    if(currentIndexVideo === 0){
        leftButtonVideo.disabled = true;
    }
    else{
        leftButtonVideo.disabled = false;
    }
    if(currentIndexVideo === pagesVideo.length - 1){
        rightButtonVideo.disabled = true;
    }
    else{
        rightButtonVideo.disabled = false;
    }
}
leftButtonVideo.addEventListener('click', () => {
    if(currentIndexVideo > 0){
        currentIndexVideo--;
        updateCarouselVideo();
    }
});
rightButtonVideo.addEventListener('click', () => {
    if(currentIndexVideo < pagesVideo.length - 1){
        currentIndexVideo++;
        updateCarouselVideo();
    }
});
// Initialize carousel state
updateCarouselVideo();

//////////////////////////////////////////////////////////////////
/**
 * @brief This script handles progress bar functionality
 */

window.addEventListener('DOMContentLoaded', () => {
    const progressBar1 = document.querySelector('.progress-bar-fill-1');
    const progressBar2 = document.querySelector('.progress-bar-fill-2');
    const progressBar3 = document.querySelector('.progress-bar-fill-3');
    const progressBar4 = document.querySelector('.progress-bar-fill-4');
    const progressBar5 = document.querySelector('.progress-bar-fill-5');

    progressBar1.style.width = 83 + '%';
    progressBar2.style.width = 19 + '%';
    progressBar3.style.width = 13 + '%';
    progressBar4.style.width = 1 + '%';
    progressBar5.style.width = 4 + '%';
});

/**
 * @brief This script handles the customer reviews and ratings drop down
 * @param {HTMLElement} customerReviewsButton - The dropdown button element
 * @param {HTMLElement} customerReviewSection - The section to show/hide content
 */
const customerReviewsButton = document.querySelector('.How-customer-reviews-and-ratings-work');
const customerReviewSection = document.querySelector('.How-customer-reviews-and-ratings-work-text-expand');
customerReviewsButton.addEventListener('click', () => {
    if(customerReviewsButton.classList.contains('How-customer-reviews-and-ratings-work')){
        customerReviewSection.innerHTML= `Customer Reviews, including Product Star Ratings 
            help customers to learn more about the product and decide whether it is the right product for them.
            To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. 
            Instead, our system considers things like how recent a review is and if the reviewer bought the item 
            on Amazon. It also analyzed reviews to verify trustworthiness.
        `;
        customerReviewsButton.innerHTML= `<i class="bi bi-chevron-up"></i>`;
        customerReviewsButton.classList.replace('How-customer-reviews-and-ratings-work', 'How-customer-reviews-and-ratings-work-up');
    }
    else if(customerReviewsButton.classList.contains('How-customer-reviews-and-ratings-work-up')){
        customerReviewSection.innerHTML = '';
        customerReviewsButton.innerHTML = `<i class="bi bi-chevron-down"></i>`;
        customerReviewsButton.classList.replace('How-customer-reviews-and-ratings-work-up', 'How-customer-reviews-and-ratings-work');
    }
});