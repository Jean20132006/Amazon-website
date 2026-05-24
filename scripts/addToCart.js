//////////////////////////////////////////////////////////////////

/**
 * @brief This script handles carousel the first carousel in addToCart page
 * 
 */

let leftButtonAddToCart = document.querySelector('.add-to-cart-arrow.left');
let rightButtonAddToCart = document.querySelector('.add-to-cart-arrow.right');
let trackAddToCart = document.querySelector('.add-to-cart-carousel-track1');
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

/////////////////////// HANDLES SECOND CAROUSEL IN THE ADDTOCART PAGE ///////////////////////////

/**
 * @brief This script handles carousel the second carousel in addToCart page
 * 
 */

let leftButtonAddToCart2 = document.querySelector('.add-to-cart-arrow2.left2');
let rightButtonAddToCart2 = document.querySelector('.add-to-cart-arrow2.right2');
let trackAddToCart2 = document.querySelector('.add-to-cart-carousel-track2');
let currentPageAddToCart2 = document.querySelector('.current-page2');
let totalPageAddToCart2 = document.querySelector('.total-pages2');
let pagesAddToCart2 = document.querySelectorAll('.add-to-cart-carosel-page2');
totalPageAddToCart2.innerHTML = pagesAddToCart2.length;

let currentIndexAddToCart2 = 0;
let pageWidthAddToCart2 = document.querySelector('.add-to-cart-carousel2').clientWidth;

function updateSecondCarouselAddToCart(){

    trackAddToCart2.style.transform = `translateX(-${currentIndexAddToCart2 * pageWidthAddToCart2}px)`;
    currentPageAddToCart2.innerHTML = currentIndexAddToCart2 + 1;
    if(currentIndexAddToCart2 === 0){
        leftButtonAddToCart2.disabled = true;
    }
    else{
        leftButtonAddToCart2.disabled = false;
    }
    if(currentIndexAddToCart2 === pagesAddToCart2.length - 1){
        rightButtonAddToCart2.disabled = true;
    }
    else{
        rightButtonAddToCart2.disabled = false;
    }
}
leftButtonAddToCart2.addEventListener('click', () => {
    if(currentIndexAddToCart2 > 0){
        currentIndexAddToCart2--;
        updateSecondCarouselAddToCart();
    }
});
rightButtonAddToCart2.addEventListener('click', () => {
    if(currentIndexAddToCart2 < pagesAddToCart2.length - 1){
        currentIndexAddToCart2++;
        updateSecondCarouselAddToCart();
    }
});

updateSecondCarouselAddToCart();         // Initialize carousel state
/////////////////////////////////////////////////////////////////////////////////////////////////
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

///////////////////ADD TO CART CODE////////////////////////

/**
 * @brief This script handles the add to cart functionality, including 
 *        updating the cart count and displaying a confirmation message when an 
 *        item is added to the cart.
 * @note  The script listens for click events on the "Add to Cart" button,
 *        updates the cart count in localStorage, and retrieves the last added. 
 */

// Get last added product id from localStorage and set product image in confirmation message
let id2 = localStorage.getItem("lastAddedProduct");                         // Get last added product id 
let product = products.find(p => p.id == id2);                              // Get product from your product list
document.querySelector('.js-image-add-to-cart').src = product.images.cartImageConfiramation; // Set product image in confirmation message
if(product.categories[0] === "drink"){
    const flavorElement = document.querySelector('.add-to-cart-product-flavor');
    flavorElement.innerHTML = `<span class="addtocart-product-flavor">Flavor Name: 
                                <span class="js-add-to-cart-flavor">${product.variants[0].flavor}</span>
                            </span>
                            <span class="addtocart-product-flavor">Size: 
                                <span class="js-add-to-cart-size">${product.variants[0].size} ($${product.variants[0].pack})</span>
                            </span>`;
}
else{
    const flavorElement = document.querySelector('.add-to-cart-product-flavor');
    flavorElement.innerHTML = `<span class="addtocart-product-flavor">Color: 
                                <span class="js-add-to-cart-flavor">${product.variants[0].color}</span>
                            </span>`;
}

let cart1 = JSON.parse(localStorage.getItem("cart1")) || [];                 // Get cart from localStorage or initialize as empty array


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief This function generates the HTML for the cart.
 * @returns HTML string representing the cart summary, including product image, price, quantity,
 *          and buttons for deleting or adding more items.
 * @note The script iterates through the cart items, finds the corresponding product details, 
 *       and constructs the HTML for each item in the cart summary. It also adds event listeners for 
 *       the delete and plus buttons to handle cart updates.
 * @param cartItem - An item in the cart, containing product id and quantity.
 * @param matchProduct - The product details corresponding to the cart item, including images and price.
 * @param cartSummaryHTML - A string that accumulates the HTML for the cart summary, 
 *                          which is then injected into the DOM.
 */


function renderCart() {
    let cartSummaryHTML = "";

    cart1.forEach(cartItem => {
        const matchProduct = products.find(p => p.id === cartItem.id);

        if (!matchProduct) return;

        const iconClass = cartItem.quantity > 1 ? 'bi-dash-lg' : 'bi-trash';

        cartSummaryHTML += `
        <div class="add-to-cart-corbeille-image-button add-to-cart-corbeille-image-button-${cartItem.id}">
            <div class="add-to-cart-corbeille-image">
                <img src="${matchProduct.images.cartImageConfiramation}">
                <span class="add-to-cart-corbeille-item-price">$${(matchProduct.price.currentPriceInCents / 100).toFixed(2)}</span>
            </div>
            
            <div class="add-to-cart-item-button">
                <div class="add-to-cart-delete-add">
                    <button class="cart-action-btn" data-id="${cartItem.id}">
                        <i class="bi ${iconClass}"></i>
                    </button>

                    <span class="add-to-cart-num-items">${cartItem.quantity}</span>

                    <button class="add-to-cart-plus-sign" data-id="${cartItem.id}">
                        <i class="bi bi-plus-lg"></i>
                    </button>
                </div>
            </div>    
        </div>
        `;
    });

    document.querySelector('.js-add-to-cart-corbeille-cart').innerHTML = cartSummaryHTML;
}

renderCart(); // Initial render of cart summary

//////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief This section uses event delegation to handle click events for both delete and minus buttons in the 
 *        cart summary.
 * @note Instead of adding individual event listeners to each button, this approach adds a single event listener 
 *       to the parent container of the cart items. When a click event occurs, it checks if the clicked element is 
 *       a delete or minus button and performs the corresponding action (deleting the item or decrementing the quantity)
 *       while updating localStorage and re-rendering the cart summary.
 * @param document.querySelector('.js-add-to-cart-corbeille-cart')
 *        -parent container element that holds all buttons for the cart items.
 * @param e - is the event object, It contains information about the click (where it happened, which element was clicked, etc.) 
 *       for identifying the cart item.
 * 
 * @code {JavaScript} 
 *       .addEventListener('click', (e) => { ... }); //Listen for ANY click inside it
 * @code {JavaScript} 
 *      const button = e.target.closest('.cart-action-btn'); // Find the actual button that was clicked
 *                                                              (even if user clicked icon inside it)
 */

//Select parent container and add event listener for both delete and minus buttons using event delegation
document.querySelector('.js-add-to-cart-corbeille-cart')
.addEventListener('click', (e) => {

    const button = e.target.closest('.cart-action-btn');
    if (!button) return;

    const id = button.dataset.id;
    const itemIndex = cart1.findIndex(item => item.id === id);

    if (itemIndex === -1) return;

    const item = cart1[itemIndex];

    if (item.quantity > 1) {
        // MINUS behavior
        item.quantity -= 1;
    } else {
        // DELETE behavior
        cart1 = cart1.filter(i => i.id !== id);
    }

    localStorage.setItem("cart1", JSON.stringify(cart1));

    // Re-render everything
    renderCart();
    updateCartSummary();
});
               
////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief This section uses event delegation to handle click events for the plus button in the cart summary.
 * @note Similar to the previous section, this approach adds a single event listener to the parent container of the cart items. When a click event occurs, it checks if the clicked element is a plus button and increments the quantity of the corresponding cart item, updates localStorage, and re-renders the cart summary.
 * @param document.querySelector('.js-add-to-cart-corbeille-cart')
 *       -parent container element that holds all buttons for the cart items.
 * @param e - is the event object, It contains information about the click (where it happened, which element was clicked, etc.) 
 *       for identifying the cart item.
 * @code {JavaScript} 
 *       .addEventListener('click', (e) => { ... }); //Listen for ANY click inside it
 * @code {JavaScript} 
 *      const plusBtn = e.target.closest('.add-to-cart-plus-sign'); // Find the actual plus button that was clicked
 *                                                              (even if user clicked icon inside it)
 */
document.querySelector('.js-add-to-cart-corbeille-cart')
.addEventListener('click', (e) => {

    const plusBtn = e.target.closest('.add-to-cart-plus-sign');
    if (!plusBtn) return;

    const id = plusBtn.dataset.id;

    const item = cart1.find(p => p.id === id);
    if (!item) return;

    item.quantity += 1;

    localStorage.setItem("cart1", JSON.stringify(cart1));

    // Re-render everything
    renderCart();
    updateCartSummary();
});
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief This section calculates the total quantity of items in the cart and the subtotal price, then
 *        updates localStorage and the displayed subtotal in the confirmation message.
 * @note The script iterates through the cart items, sums up the total quantity and calculates the subtotal
 *       by multiplying the quantity of each item by its price. It then updates localStorage with the new cart 
 *       quantity and subtotal, and updates the displayed subtotal in the confirmation message.
 * @param cartQuantity - The total quantity of items in the cart, retrieved from localStorage or initialized to 0.
 * @param subtotal - The total price of items in the cart, retrieved from localStorage or initialized to 0.
 * @param item - An item in the cart, containing product id and quantity, used to calculate the subtotal.
 * @param product - The product details corresponding to the cart item, including price, used to calculate the subtotal.
 */

function updateCartSummary() {
    let cartQuantity = 0;   // reset every time
    let subtotal = 0;

    cart1.forEach(item => {
        cartQuantity += item.quantity;

        const product = products.find(p => p.id === item.id);                                // find matching product to get price

        if (product) {
            subtotal += item.quantity * (product.price.currentPriceInCents / 100);
        }
    });
    
    // store values
    localStorage.setItem("cartQuantity", cartQuantity);
    localStorage.setItem("subtotal", subtotal);

    const formattedSubtotal = subtotal.toFixed(2);                                           // format subtotal to 2 decimal places
    const subtotalContainer = document.querySelectorAll('.js-add-to-cart-subtotal');
    subtotalContainer.forEach(container => {
        container.innerHTML = `$${formattedSubtotal}`;
    });
    const proceedToCheckoutButton = document.querySelector('.js-proceed-to-checkout-button');
    const itemText = cartQuantity === 1 ? "item" : "items";                                  // Handle singular vs plural for item(s)
    proceedToCheckoutButton.innerHTML = `Proceed to checkout (${cartQuantity} ${itemText})`; // Update proceed to checkout button with current cart quantity

    ///////////////////////// Cart Quantity Display in Header /////////////////////////////////////////////

    let cartNumberItems = Number(localStorage.getItem("cartQuantity")) || 0;                //Get current cart quantity from localStorage or initialize to 0 
    const cartNumberElement = document.querySelector('.js-cart-num-items');
    cartNumberElement.innerText = cartNumberItems;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

}

updateCartSummary(); // Call function to update cart summary on page load



