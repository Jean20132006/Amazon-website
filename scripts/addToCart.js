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

let cart1 = JSON.parse(localStorage.getItem("cart")) || [];                 // Get cart from localStorage or initialize as empty array
/*console.log(cart1);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief This section generates the HTML for the cart.
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
let cartSummaryHTML = "";                                                   // Initialize cart summary HTML
cart1.forEach(cartItem => {
    const matchProduct = products.find(p => p.id === cartItem.id);          // Find product details for each cart item
    if (matchProduct) {
        cartSummaryHTML += `<div class="add-to-cart-corbeille-image-button  add-to-cart-corbeille-image-button-${cartItem.id}">
                    <div class="add-to-cart-corbeille-image">
                    <img src="${matchProduct.images.cartImageConfiramation}" alt="${matchProduct.name}">
                    <span class="add-to-cart-corbeille-item-price">$${(matchProduct.price.currentPriceInCents / 100).toFixed(2)}</span>
                    </div>
                    <div class="add-to-cart-item-button">
                        <div class="add-to-cart-delete-add">
                            <button class="add-to-cart-delete-button" data-id="${cartItem.id}"><i class="bi bi-trash"></i></button>
                            <span class="add-to-cart-num-items">${cartItem.quantity}</span>
                            <button class="add-to-cart-plus-sign" data-id="${cartItem.id}"><i class="bi bi-plus-lg"></i></button>
                        </div>
                    </div>
                </div>`; 
    }
});
document.querySelector('.js-add-to-cart-corbeille-cart').innerHTML = cartSummaryHTML; // Update cart summary in confirmation message

//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief This section adds event listeners for the delete and plus buttons in the cart summary.
 * @note The delete button removes the item from the cart and updates localStorage, while the plus button increments the quantity of the item in the cart and updates both localStorage and the displayed quantity in the cart summary.
 * @param button - The button element that was clicked, either delete or plus.
 * @param cartItemId - The id of the cart item associated with the button, used to identify which item to update or remove.
 * @param itemIndex - The index of the cart item in the cart array, used to update the quantity when the plus button is clicked.
 */
// Add event listeners for delete button to remove item from cart summary and localStorage
document.querySelectorAll('.add-to-cart-delete-button').forEach(button => {
    button.addEventListener('click', () => {
        let cartItemId = button.dataset.id;
        // Handle delete functionality
        cart1 = cart1.filter(item => item.id !== cartItemId);
        localStorage.setItem("cart1", JSON.stringify(cart1));   // Update localStorage after deleting item
        let container = document.querySelector(`.add-to-cart-corbeille-image-button-${cartItemId}`);
        if(container){
            container.remove();
        }
        updateCartSummary(); // Update cart summary after deleting item

    });
});

// Add event listeners for plus button to increment quantity in cart summary
document.querySelectorAll('.add-to-cart-plus-sign').forEach(button => {
    button.addEventListener('click', () => {
        const cartItemId2 = button.dataset.id;
        // Handle plus functionality
        let itemIndex = cart1.findIndex(item => item.id === cartItemId2);
        if (itemIndex !== -1) {
            cart1[itemIndex].quantity += 1; // Increment quantity
            localStorage.setItem("cart1", JSON.stringify(cart1)); // Update localStorage
            let quantitySpan = button.parentElement.querySelector('.add-to-cart-num-items');
            if (quantitySpan) {
                quantitySpan.innerHTML = cart1[itemIndex].quantity; // Update quantity display
                 updateCartSummary(); // Update cart summary after incrementing quantity
            }
        }
    });
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

}

updateCartSummary(); // Call function to update cart summary on page load

///////////////////////// Cart Quantity Display in Header /////////////////////////////////////////////

let cartNumberItems = Number(localStorage.getItem("cartQuantity")) || 0; //Get current cart quantity from localStorage or initialize to 0 
const cartNumberElement = document.querySelector('.js-cart-num-items');
cartNumberElement.innerText = cartNumberItems;
/////////////////////////////////////////////////////////////////////////////////////////////////////////

