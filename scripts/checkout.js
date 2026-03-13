/**
 * @brief This script generates the checkoutout page content dynamically based on the product data
 *@note  window.location.search returns everything after the ?
 -URLSearchParams is a built-in JavaScript object that parses query parameters from a URL
 -params.get("id") This retrieves the value of a specific parameter.
*/
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const matchingProduct = products.find(product => product.id === id);
if (matchingProduct) {
  let title = document.querySelector('.name-section');                              // product name
  let mainImage  = document.querySelector('.js-image-section');                     // main product image
  let imageGallery = document.querySelectorAll('.js-radio-button');                 // image gallery 
  let reviewImages = document.querySelectorAll('.js-checkout-carousel-review-img'); // review images in review carousel
  let videoElements = document.querySelectorAll('.js-checkout-carousel-vid');       // video elements in video carousel
  let sponsoredVideosImages = document.querySelectorAll('.js-sponsored-text-video');// images for sponsored videos
  let productDetails = document.querySelectorAll('.product');                       // product details section
  let productVideo1 = document.getElementById('product-video2');                    // product video element
  let productVideo2 = document.getElementById('product-video');                     // product video element
  let manifacturerFirstRow = document.querySelector('.js-manufacturer-first-row');  // manufacturer first row image
  let proteinImage = document.querySelector('.js-protein');                         // protein image in manufacturer section
  let firstImageSecondRow = document.querySelector('.js-manufacturer-second-row-container'); // first image in manufacturer second row
  let thirdRowImage = document.querySelectorAll('.js-max');                          // images in manufacturer third row
  let shortTitle = document.querySelector('.js-short-title');                        // short title element in manufacturer third row
  let fourthRowImage = document.querySelector('.js-manufacturer-fourth-row-container'); // fourth row image in manufacturer section
  let productPriceDollar = document.querySelectorAll('.dollars-amount');              // product price in dollars
  let productPriceCent = document.querySelectorAll('.cents');                         // product price in cents
  let pricePerUnit = document.querySelectorAll('.price-per-ounce');                   // price per unit
  let advertVideo = document.querySelectorAll('.js-sponsored-video');                 // advert video element
  let productDescription = document.querySelector('.js-product-description');         // product description element
  let advertImage = document.querySelectorAll('.js-advert-img');                      // advert image element
  let selectFlavorButtons = document.querySelectorAll('.js-btton-flavour');           // flavour selection buttons
  let selectSizeButtons = document.querySelectorAll('.js-size-button');               // size selection buttons
  let flavorName =document.getElementById('chocolate');                               // flavor name element in size selection section 
  let imageOrText1 = document.querySelector('.js-image-or-text1');                   // image or text element in manufacturer section
  let imageOrText2 = document.querySelector('.js-image-or-text2');                   // image or text element in manufacturer section

  title.textContent = matchingProduct.title;

  mainImage.src = matchingProduct.images.main;

  imageGallery.forEach((img, index) => {
    img.src = matchingProduct.images.gallery[index];
  });

  reviewImages.forEach((reviewImage, index) => {
    reviewImage.src = matchingProduct.images.reviews[index];
  });

  videoElements.forEach((video, index) => {
    video.src = matchingProduct.videos.galleryVideos[index];
  });

  sponsoredVideosImages.forEach((img, index) => {
    img.src = matchingProduct.videos.galleryVideosImages[index];
  });

  productDetails[0].textContent = `Product Dimensions : ${matchingProduct.productDetails.productDimensions}`;
  productDetails[1].textContent = `Item model number : ${matchingProduct.productDetails.modelNumber}`;
  productDetails[2].textContent = `Department : ${matchingProduct.productDetails.department}`;
  productDetails[3].textContent = `UPC : ${matchingProduct.productDetails.upc}`;
  productDetails[4].textContent = `Manufacturer : ${matchingProduct.productDetails.manufacturer}`;
  productDetails[5].textContent = `ASIN : ${matchingProduct.productDetails.asin}`;
  productDetails[6].textContent = `Units : ${matchingProduct.productDetails.units}`;

  productVideo1.src = matchingProduct.videos.galleryVideos[0];
  productVideo2.src = matchingProduct.videos.galleryVideos[1];
  
  manifacturerFirstRow.src = matchingProduct.manifacturer.image1;
  proteinImage.src = matchingProduct.manifacturer.image2;
  firstImageSecondRow.src = matchingProduct.manifacturer.image3;
  thirdRowImage.forEach((img, index) => {
    img.src= matchingProduct.manifacturer.thirdRowImages[index];
  });

  shortTitle.textContent = matchingProduct.shortTitle;

  fourthRowImage.src = matchingProduct.manifacturer.fourthRowImage;

  productPriceDollar.forEach((element) => {
    element.textContent = matchingProduct.price.priceDollar;
  });
  productPriceCent.forEach((element) => {
    element.textContent = matchingProduct.price.priceCents;
  });

  pricePerUnit.forEach((element) => {
    element.textContent = `($${matchingProduct.price.pricePerUnit} / fluid ounce)`;
  });

  advertVideo.forEach((video) => {
    video.src = matchingProduct.videos.advertisement;
  });

  productDescription.textContent = matchingProduct.description;

  advertImage.forEach((img, index) => {
    img.src= matchingProduct.images.advertisementImages[index];
  });

    selectFlavorButtons.forEach((button, index) => {
    button.textContent = matchingProduct.variants[index].flavor;
  });

  selectSizeButtons.forEach((button, index) => {
    button.textContent = `${matchingProduct.variants[index].size} (${matchingProduct.variants[index].pack})`;
  });

  flavorName.textContent = matchingProduct.variants[0].flavor;
     
    if(matchingProduct.id === "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"){

        imageOrText1.innerHTML = `<span class="title-shake">Power Core High Protein Shake</span>
                <span class="champion">Champion Your Recovery</span>
                <span class="text-second-row">
                    Core Power High Protein Shakes are a delicious post-workout 
                    protein shake. Made with 100% real, lactose free, ultra-filtered 
                    milk and without any added protein powders, Core Power is a delicious 
                    source of nutrition to help you build muscle and recover after 
                    exercise, so you're prepared for your next workout. 
                </span>
                <div class="list">
                    <ul>
                        <li>High Quality Protein</li>
                        <li>Protein to Build Muscles and Electrolytes to Help Hydrate</li>
                        <li>Ready to Drink Protein Shake</li>
                        <li>Made from Ultra-filtered Milk</li>
                        <li>Lactose Free</li>
                    </ul>
                </div>
            `;
        imageOrText2.innerHTML = `<img src="images/fairlife.jpg" alt="fairlife">
                <div class="fairlife-text">
                    <span>We believe in better</span><br> care for the people we nourish, animals that provides 
                    us with milk, and the planet we live on. At fairlife we're on a mission to 
                    nourish the modern world with great tasting, better-for-you products, but 
                    our purpose extends beyond what's in our bottles. We go the extra mile to
                    provide better care for the people we nourish, animals that provides us with milk, 
                    and the planet we live on.
                </div>
            `;

    }else{
        imageOrText1.innerHTML = `<img src="${matchingProduct.manifacturer.image2}" alt="manufacturer">`;
        imageOrText2.innerHTML = `<img class="image-or-text" src="${matchingProduct.manifacturer.image3}" alt="manufacturer">`;
    }

} else {
  document.body.innerHTML = "Product not found";
}
 ///////////////////////////////////////////////////////////////////////////////////////////////////
 /** 
  * @brief Script to handle drop down functionality for Ingredients section in checkout page
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

//////////////////////////////////////////////////////////////////

/**
 * @brief This script handles carousel to choose color functionality in checkout page
 */
let leftButtonColor = document.querySelector('.checkout-arrow-color.left');
let rightButtonColor = document.querySelector('.checkout-arrow-color.right');
let trackColor = document.querySelector('.checkout-carousel-color-track');
let currentPageColor = document.querySelector('.current-page-color');
let totalPageColor = document.querySelector('.total-pages-color');
let pagesColor = document.querySelectorAll('.checkout-carosel-color-page');
totalPageColor.innerHTML = pagesColor.length;

let currentIndexColor = 0;
let pageWidthColor = document.querySelector('.checkout-carousel-color').clientWidth;
function updateCarouselColor(){
    trackColor.style.transform = `translateX(-${currentIndexColor * pageWidthColor}px)`;
    currentPageColor.innerHTML = currentIndexColor + 1;
    if(currentIndexColor === 0){
        leftButtonColor.disabled = true;
    }
    else{
        leftButtonColor.disabled = false;
    }
    if(currentIndexColor === pagesColor.length - 1){
        rightButtonColor.disabled = true;
    }
    else{
        rightButtonColor.disabled = false;
    }
}
leftButtonColor.addEventListener('click', () => {
    if(currentIndexColor > 0){
        currentIndexColor--;
        updateCarouselColor();
    }
});
rightButtonColor.addEventListener('click', () => {
    if(currentIndexColor < pagesColor.length - 1){
        currentIndexColor++;
        updateCarouselColor();
    }
});

updateCarouselColor();         // Initialize carousel state

//////////////////////////////////////////////////////////////////

/**
 * @brief This script handles carousel to choose color functionality in checkout page
 */
let leftButtonBigCarousel = document.querySelector('.checkout-arrow-clothes-computers.left');
let rightButtonBigCarousel = document.querySelector('.checkout-arrow-clothes-computers.right');
let trackBigCarousel = document.querySelector('.checkout-carousel-clothes-computers-track');
let currentPageBigCarousel = document.querySelector('.current-page-clothes-computers');
let totalPageBigCarousel = document.querySelector('.total-pages-clothes-computers');
let pagesBigCarousel = document.querySelectorAll('.checkout-carosel-clothes-computers-page');
totalPageBigCarousel.innerHTML = pagesBigCarousel.length;

let currentIndexBigCarousel = 0;
let pageWidthBigCarousel = document.querySelector('.checkout-carousel-clothes-computers').clientWidth;
function updateCarouselBigCarousel(){
    trackBigCarousel.style.transform = `translateX(-${currentIndexBigCarousel * pageWidthBigCarousel}px)`;
    currentPageBigCarousel.innerHTML = currentIndexBigCarousel + 1;
    if(currentIndexBigCarousel === 0){
        leftButtonBigCarousel.disabled = true;
    }
    else{
        leftButtonBigCarousel.disabled = false;
    }
    if(currentIndexBigCarousel === pagesBigCarousel.length - 1){
        rightButtonBigCarousel.disabled = true;
    }
    else{
        rightButtonBigCarousel.disabled = false;
    }
}
leftButtonBigCarousel.addEventListener('click', () => {
    if(currentIndexBigCarousel > 0){
        currentIndexBigCarousel--;
        updateCarouselBigCarousel();
    }
});
rightButtonBigCarousel.addEventListener('click', () => {
    if(currentIndexBigCarousel < pagesBigCarousel.length - 1){
        currentIndexBigCarousel++;
        updateCarouselBigCarousel();
    }
});

updateCarouselBigCarousel();         // Initialize carousel state

//////////////////////////////////////////////////////////////////
/**
 * @brief This script handles the functionality of changing the main image 
 * when clicking on the color options in checkout page
 * @param {NodeList} buttonSelectItem - The color option buttons
 * @param {HTMLElement} mainImage2 - The main image element to update
 */
const buttonSelectItem = document.querySelectorAll('.item-color');
const mainImage2 = document.querySelector('.js-image-section');
        buttonSelectItem.forEach((button) => {
            button.addEventListener('click', () => {
                let buttonId = button.dataset.id;
                if(buttonId === "1") {
                    mainImage2.src = "images/electronic-images/ipad-1.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                    });

                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "2") {
                    mainImage2.src = "images/electronic-images/ipad-2.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "3") {
                    mainImage2.src = "images/electronic-images/ipad-3.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "4") {
                    mainImage2.src = "images/electronic-images/ipad-4.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "5") {
                    mainImage2.src = "images/electronic-images/ipad-5.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "6") {
                    mainImage2.src = "images/electronic-images/ipad-6.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "7") {
                    mainImage2.src = "images/electronic-images/ipad-7.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                 else if(buttonId === "8") {
                    mainImage2.src = "images/electronic-images/ipad-8.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "9") {
                    mainImage2.src = "images/electronic-images/ipad-9.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "10") {
                    mainImage2.src = "images/electronic-images/ipad-10.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "11") {
                    mainImage2.src = "images/electronic-images/ipad-11.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "12") {
                    mainImage2.src = "images/electronic-images/ipad-12.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "13") {
                    mainImage2.src = "images/electronic-images/ipad-13.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                 else if(buttonId === "14") {
                    mainImage2.src = "images/electronic-images/ipad-14.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "15") {
                    mainImage2.src = "images/electronic-images/ipad-15.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "16") {
                    mainImage2.src = "images/electronic-images/ipad-16.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "17") {
                    mainImage2.src = "images/electronic-images/ipad-17.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "18") {
                    mainImage2.src = "images/electronic-images/ipad-18.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
                else if(buttonId === "19") {
                    mainImage2.src = "images/electronic-images/ipad-19.jpg";
                    buttonSelectItem.forEach((btn) => {
                        btn.style.border = "1px solid grey";
                        btn.style.borderRadius = "5px";
                    });
                    button.style.border = "2px solid blue";
                }
            });
        });

//////////////////////////////////////////////////////////////////
/**
 * @brief This script handles the functionality of changing the main image 
 * when hovering over the color options in checkout page
 * @param {NodeList} buttonMouseover - The color option buttons
 * @param {HTMLElement} mainImage3 - The main image element to update
 */

const buttonMouseover = document.querySelectorAll('.item-color');
const mainImage3 = document.querySelector('.js-image-section');
buttonMouseover.forEach((button) => {
    button.addEventListener('mouseover', () => {
        if(button.dataset.id === "1") {
            mainImage3.src = "images/electronic-images/ipad-1.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "2") {
            mainImage3.src = "images/electronic-images/ipad-2.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "3") {
            mainImage3.src = "images/electronic-images/ipad-3.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "4") {
            mainImage3.src = "images/electronic-images/ipad-4.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "5") {
            mainImage3.src = "images/electronic-images/ipad-5.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "6") {
            mainImage3.src = "images/electronic-images/ipad-6.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "7") {
            mainImage3.src = "images/electronic-images/ipad-7.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "8") {
            mainImage3.src = "images/electronic-images/ipad-8.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "9") {
            mainImage3.src = "images/electronic-images/ipad-9.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "10") {
            mainImage3.src = "images/electronic-images/ipad-10.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "11") {
            mainImage3.src = "images/electronic-images/ipad-11.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "12") {
            mainImage3.src = "images/electronic-images/ipad-12.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "13") {
            mainImage3.src = "images/electronic-images/ipad-13.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "14") {
            mainImage3.src = "images/electronic-images/ipad-14.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "15") {
            mainImage3.src = "images/electronic-images/ipad-15.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "16") {
            mainImage3.src = "images/electronic-images/ipad-16.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "17") {
            mainImage3.src = "images/electronic-images/ipad-17.jpg";
            button.style.border = "1px solid blue";
        }
        else if(button.dataset.id === "18") {
            mainImage3.src = "images/electronic-images/ipad-18.jpg";
            button.style.border = "1px solid blue";
        }
    });
    button.addEventListener('mouseout', () => {
        button.style.border = "1px solid grey";
        button.style.borderRadius = "5px";
    });
});