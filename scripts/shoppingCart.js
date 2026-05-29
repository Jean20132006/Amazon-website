
////////////////// HANDLES DELIVERY DATE CALCULATIONS AND RENDERING //////////////////////////
/**
 * @brief This function calculates the delivery date based on the number of days 
 * @param {number} days - The number of days until delivery
 * @return {string} - The formatted delivery date string
*/

function getShoppingCartDeliveryDate(days){

  const date = new Date();                            // Get the current date

  date.setDate(date.getDate() + days);                // Add the specified number of days to the current date

  return date.toLocaleDateString("en-US",{            // Format the date as a string in the format "Weekday, Month Day"
    weekday:"long",
    month:"long",
    day:"numeric"
  });

}
console.log(`Delivery Date: ${getShoppingCartDeliveryDate(2)}`);   //Get delivery date 2 days from now and log it to the console

/**
 *  @brief This function calculates tomorrow's date and formats it as a string in the format "Weekday, Month Day"
 *  @note The getTomorrow function calculates tomorrow's date by creating a new Date object for 
 *       the current date, adding one day to it using setDate, and then formatting the result as 
 *       a string in the format "Weekday, Month Day" using toLocaleDateString. This function is 
 *       used to display the estimated delivery date for Prime eligible products and the fastest 
 *       delivery option on the checkout page.
 *  @return {string} - The formatted date string for tomorrow's date
 *  
 */

function getShoppingCartTomorrow(){

  const date = new Date();                             // Get the current date
  date.setDate(date.getDate() + 1);                    // Add 1 day to the current date to get tomorrow's date
  // Format the date as a string in the format "Weekday, Month Day" and return it
  return date.toLocaleDateString("en-US",{
    weekday:"long",
    month:"long",
    day:"numeric"
  });

}

/**
 * 
 * @brief This function renders the shipping information on the checkout page based on the product's shipping details 
 */

function renderShoppingCartShipping(product){

  const deliveryDate = getShoppingCartDeliveryDate(product.shipping.estimatedDelivery);
  //const deliveryDate = getShoppingCartDeliveryDate(2);
  const tomorrow = getShoppingCartTomorrow();

  let message1 = "";
  //let message2 = "";

  if(product.shipping.primeEligible){
    return message1 = `<span class="shopping-cart-free-delivery-container">FREE Prime Delivery</span> 
          <span class="shopping-cart-free-delivery">${tomorrow}</span>`;
  }
  else if(product.shipping.freeShipping){
    return message1 = `<span class="shopping-cart-free-delivery-container">FREE delivery</span> 
          <span class="shopping-cart-free-delivery">${deliveryDate}</span>`; 
  }
  else{
    return message1 = `<span class="shopping-cart-free-delivery-container">FREE delivery</span> 
          <span class="shopping-cart-free-delivery">${getShoppingCartDeliveryDate(7)}</span>`;
  }

  /*document.querySelector(".js-delivery-day").innerHTML = message1;*/
  //document.querySelector('.js-prime-delivery-date').innerHTML = message2;

  /*document.querySelector(".js-fastest-delivery").innerHTML =
  `<span class="fastest">Or fastest delivery ${tomorrow}</span>`;*/

}
//////////////////////////////////////////////////////////////////////////////////////////////

////////////////////// UPDATE THE TIMER FOR SHIPPING CUTOFF //////////////////////////////////
/**
 * @brief Updates the timer display based on the remaining time until the shipping cutoff
 *  
 */
function updateTimerShoppingCart(){

  const now = new Date();                         // Get the current date and time

  const cutoff = new Date();
  cutoff.setHours(18,0,0,0);                      //Set hours, setHours(hour, minutes, seconds, milliseconds) 5PM shipping cutoff

  let diff = cutoff - now;                        // Calculate the difference in milliseconds between the cutoff time and the current time 

  if(diff < 0){                                   // If the difference is negative, it means the cutoff time has passed for today
    return "Order tomorrow for next shipment";;
  }

  const hours = Math.floor(diff / (1000*60*60)); // Convert milliseconds to hours
  const mins = Math.floor((diff % (1000*60*60))/(1000*60)); // Calculate remaining minutes after accounting for hours

  return ` ${hours} hrs ${mins} mins`;

}

setInterval(updateTimerShoppingCart,60000);              // Update the timer every minutes
updateTimerShoppingCart();

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////// GENERATE SHOPPING CART DYNAMICALLY //////////////////////////////

let cart1 = JSON.parse(localStorage.getItem('cart1')) || [];

function renderShoppingCart(){
    const shoppingCartHTML = document.querySelector('.shopping-cart-checkbox-img-itemName-price-container');
    let shoppingCartSummaryHTML = '';

    cart1.forEach(item => {
        let matchProduct = products.find(p => p.id === item.id);

        const iconTrashOrMinus = item.quantity > 1 ? 'bi-dash-lg' : 'bi-trash';

        shoppingCartSummaryHTML += `
            <div class="Shopping-cart-first-item-section">
                                    <div class="Shopping-cart-first-item-container">
                                        <input type="checkbox" class="shopping-cart-checkbox" data-id="${item.id}" ${item.selected ? "checked" : ""}>
                                        <img src="${matchProduct.images.cartImageConfiramation}" alt="${matchProduct.brand}">
                                        <div class="shopping-cart-item-name-delivery-option-button-container">
                                            <span class="shopping-cart-item-name">
                                                ${matchProduct.shortTitle} ...
                                            </span>
                                            <div class="shopping-cart-free-delivery-order-within">
                                                ${renderShoppingCartShipping(matchProduct)}
                                                <span class="shopping-cart-order-within-container">Order within</span>
                                                <span class="shopping-cart-order-within">${updateTimerShoppingCart()}</span>
                                            </div>
                                            <a href="#">FREE Returns</a>
                                            <div class="shopping-cart-input-this-gift-container">
                                                <input type="checkbox" class="gift-checkbox">
                                                <span class="this-is-a-gift">This is a gift</span>
                                                <a href="#">Learn more</a>
                                            </div>
                                            <div class="add-to-cart-item-button">
                                                <div class="add-to-cart-delete-add js-add-to-cart-delete-add" data-id="${item.id}">
                                                    <button class="cart-action-btn" data-id="${item.id}">
                                                        <i class="bi ${iconTrashOrMinus}"></i>
                                                    </button>

                                                    <span class="add-to-cart-num-items">${item.quantity}</span>

                                                    <button class="add-to-cart-plus-sign" data-id="${item.id}">
                                                        <i class="bi bi-plus-lg"></i>
                                                    </button>
                                                </div>
                                                <span>|</span>
                                                <button class="shopping-cart-delete-button" data-id="${item.id}">Delete</button>
                                                <span>|</span>
                                                <a href="#" data-id="${item.id}">Save for later</a>
                                                <span>|</span>
                                                <a href="#" data-id="${item.id}">Share</a>
                                            </div>    
                                        </div>
                                    </div>
                                    <div class="shopping-cart-price-indollar">
                                        <span class="shopping-cart-dollar-sign"><i class="bi bi-currency-dollar"></i></span>
                                        <span class="shopping-cart-dollars-amount">${matchProduct.price.priceDollar}</span>
                                        <span class="shopping-cart-cents">${matchProduct.price.priceCents}</span>
                                    </div>
                                </div>
                                <div class="shopping-cart-horizontal-line"></div>
                                `;
    });

    shoppingCartHTML.innerHTML = shoppingCartSummaryHTML;
    attachCheckboxListeners();
    updateShoppingCartSummary();
}
renderShoppingCart();
//attachCheckboxListeners();

/////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////// DECREASE NUMBER OF THE SAME ITEM OR DELETE IT //////////////////////////////
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
function decreaseOrDeleteShoppingCartItem(){
    document.querySelector('.shopping-cart-checkbox-img-itemName-price-container')
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
        renderShoppingCart();
        updateShoppingCartSummary();
    });
}

decreaseOrDeleteShoppingCartItem();
               
/////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////// INCREASE THE NUMBER FOR A GIVEN ITEM //////////////////////////////////
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
function increaseItemNumberShoppingCart(){
    document.querySelector('.shopping-cart-checkbox-img-itemName-price-container')
    .addEventListener('click', (e) => {

        const plusBtn = e.target.closest('.add-to-cart-plus-sign');
        if (!plusBtn) return;

        const id = plusBtn.dataset.id;

        const item = cart1.find(p => p.id === id);
        if (!item) return;

        item.quantity += 1;

        localStorage.setItem("cart1", JSON.stringify(cart1));

        // Re-render everything
        renderShoppingCart();
        updateShoppingCartSummary();
    });
}

increaseItemNumberShoppingCart();
////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////// HANDLES SHOPPING CART BY CONSIDERING CHECK BOX ITEMS /////////////////////
/*function attachCheckboxListeners() {
    
    let quantityItemSelected = 0;
    const checkboxes =
        document.querySelectorAll(
            ".shopping-cart-checkbox"
        );

    checkboxes.forEach((checkbox) => {

        checkbox.addEventListener("change", () => {

            const productId =
                Number(checkbox.dataset.id);

            const cartItem =
                cart1.find(
                    item => item.id === productId
                );

            if(cartItem){

                cartItem.selected =
                    checkbox.checked;

                localStorage.setItem(
                    "cart1",
                    JSON.stringify(cart1)
                );

                // UPDATE PRICE HERE
                updateShoppingCartSummary();

                //console.log(cart1);
            }

        });

    });

}*/

function attachCheckboxListeners(){

    document.querySelector('.shopping-cart-checkbox-img-itemName-price-container')
    .addEventListener('change', (e) => {

        const checkbox = e.target.closest('.shopping-cart-checkbox');
        let cartItemId = checkbox.dataset.id;

        let matchProduct = cart1.find(p => p.id === cartItemId);

        if(matchProduct){
            matchProduct.selected = checkbox.checked;

            localStorage.setItem("cart1", JSON.stringify(cart1));

            // UPDATE PRICE HERE
            updateShoppingCartSummary();
        }
    });

}

////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////// UPDATE SUBTOTAL AND TOTAL //////////////////////////////////////////

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

function updateShoppingCartSummary() {
    let cartQuantity = 0;   // reset every time
    let subtotal = 0;
    let quantityItemSelected = 0;

    cart1.forEach(item => {
        cartQuantity += item.quantity;

        const product = products.find(p => p.id === item.id);                                // find matching product to get price

        if (product && item.selected) {
            quantityItemSelected += item.quantity;
            subtotal += item.quantity * (product.price.currentPriceInCents / 100);
        }
    });
    
    // store values
    localStorage.setItem("cartQuantity", cartQuantity);
    localStorage.setItem("subtotal", subtotal);
    localStorage.setItem("quantityItemSelected", quantityItemSelected);

    const formattedSubtotal = subtotal.toFixed(2);                                           // format subtotal to 2 decimal places
    const subtotalContainer = document.querySelectorAll('.shopping-cart-price');
    subtotalContainer.forEach(container => {
        container.innerHTML = `$${formattedSubtotal}`;
    });
    /*const proceedToCheckoutButton = document.querySelector('.shopping-cart-number-item');
    const itemText = cartQuantity === 1 ? "item" : "items";                                  // Handle singular vs plural for item(s)
    proceedToCheckoutButton.innerHTML = `(${cartQuantity} ${itemText})`;*/ // Update proceed to checkout button with current cart quantity

    const proceedToCheckoutButton = document.querySelector('.shopping-cart-number-item');
    const itemText = quantityItemSelected === 1 ? "item" : "items";                                  // Handle singular vs plural for item(s)
    proceedToCheckoutButton.innerHTML = `(${quantityItemSelected} ${itemText})`; // Update proceed to checkout button with current cart quantity


    ///////////////////////// Cart Quantity Display in Header /////////////////////////////////////////////

    let cartNumberItems = Number(localStorage.getItem("cartQuantity")) || 0;                //Get current cart quantity from localStorage or initialize to 0 
    const cartNumberElement = document.querySelector('.js-cart-num-items');
    cartNumberElement.innerText = cartNumberItems;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

}

updateShoppingCartSummary(); // Call function to update cart summary on page load



///////////////////////// CART QUANTITY DISPLAY IN THE HEADER ///////////////////////////////////
/*function displayCartNumberItems(){
  let cartNumber = Number(localStorage.getItem("cartQuantity")) || 0; //Get current cart quantity from localStorage or initialize to 0 
  const cartNumberElement = document.querySelector('.js-cart-num-items');
  cartNumberElement.innerText = cartNumber;
}

displayCartNumberItems();*/
//////////////////////////////////////////////////////////////////////////////////////////////

///////////////////// HANDLES TOGETHER THE LAST TWO CAROUSELS IN THE BOTTOM PAGE ////////////////
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