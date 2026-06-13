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


////////////////////////////////////////////////////////////////////////////////////////////

let cart1 = JSON.parse(localStorage.getItem('cart1')) || [];

///////////////////////// Cart Quantity Display in Header /////////////////////////////////////////////

    let cartNumberItems = Number(localStorage.getItem("cartQuantity")) || 0;                //Get current cart quantity from localStorage or initialize to 0 
    const cartNumberElement = document.querySelector('.js-cart-num-items');
    cartNumberElement.innerText = cartNumberItems;
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////

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
    weekday:"short",
    month:"short",
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
    weekday:"short",
    month:"short",
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

}
//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////// GENERATE DYNAMICALLY RELATED PRODUCTS SECTION //////////////////////

// Array of related products
let filteredRelatedProducts = [];
cart1.forEach(item => {
    const matchProduct = products.find(p => p.id === item.id);
    const matchItem = products.find(p => p.categories[1] === matchProduct.categories[1]);

    if(filteredRelatedProducts.length === 0){
        filteredRelatedProducts.push(matchItem);
    }else if(matchProduct.brand === matchItem.brand){
        filteredRelatedProducts.push(matchItem);
    }
    
});

function renderProductsRelated(productsList){

    const relatedProductsList = document.querySelector('.related-products-with-fast-delivery-section');
    let = relatedProductsHTML = '';

    productsList.forEach(item => {

        const isCentZero = item.price.priceCents === 0 ? '0' : '';

        relatedProductsHTML += `
                            <div class="image-item-name-star-price-delivery-container">
                                <a href="${item.productPage}.html?id=${item.id}">
                                    <img src="${item.images.cartImageConfiramation}" alt="image-alium">
                                </a>
                                <div class="item-name-star-price-delivery-container">
                                    <a href="#">${item.title.slice(0, 27)}...</a>
                                    <img src="images/star-2.png" alt="star">
                                    <div class="shopping-cart-price-in-dollar">
                                        <span class="shopping-cart-dollar-sign-related-products"><i class="bi bi-currency-dollar"></i></span>
                                        <span class="shopping-cart-dollars-amount-related-products">${item.price.priceDollar}</span>
                                        <span class="shopping-cart-cents-related-products">${item.price.priceCents}${isCentZero}</span>
                                    </div>
                                    
                                    <div class="prime-delivery-add-to-cart-button">
                                        <span class="shopping-cart-check-icon-prime"><i class="bi bi-check-lg"></i>prime</span>
                                        <div class="free-delivery-container">
                                            
                                            
                                            <span class="delivery-date-related-product">
                                                ${renderShoppingCartShipping(item)}
                                            </span>
                                        </div>
                                        <div class="shopping-cart-add-to-cart-button-container">
                                            <button class="shopping-cart-add-to-cart-button">add to cart</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            `;

    });

    relatedProductsList.innerHTML = relatedProductsHTML;
}

renderProductsRelated(filteredRelatedProducts);
//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * @brief This function return the due date
 */
/*function getDate(){

  const date = new Date();                            // Get the current date
 //date.setDate(date.getDate() + days);                // Add the specified number of days to the current date

  return date.toLocaleDateString("en-US",{            // Format the date as a string in the format "Weekday, Month Day"
    weekday:"short",
    month:"short",
    day:"numeric"
  });

}*/

function getReturnDueDate(){

  const date = new Date();                            // Get the current date
 date.setMonth(date.getMonth() + 1);                  // Add the specified number of months to the current month

  return date.toLocaleDateString("en-US",{            // Format the date as a string in the format "Weekday, Month Day"
    weekday:"short",
    month:"short",
    day:"numeric"
  });

}

//////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief This code fetch orders from backend
 */
let orderRoaster;
document.addEventListener('DOMContentLoaded', async () => {

    const userId = localStorage.getItem("userId");                   // Get user ID

    const period = document.getElementById('order-period').value;

    let from;
    let to = new Date();

    if (period === "1month") {

        from = new Date();
        from.setMonth(from.getMonth() - 1);

    } 
    else if (period === "3months") {

        from = new Date();
        from.setMonth(
            from.getMonth() - 3);

    } 
    else if (period === "2026") {

        from = new Date("2026-01-01");

        to = new Date("2026-12-31");
    }

    const response = await fetch(
            `http://localhost:4000/api/v1/orders/${userId}?from=${from.toISOString()}&to=${to.toISOString()}`
        );

    const data = await response.json();

    orderRoaster = data.orders;

    /*console.log("List of orders:");
    console.log(orderRoaster);
    console.log(orderRoaster[0].createdAt);*/


    document.querySelector('.js-number-of-orders').innerHTML = orderRoaster.length;

    const userName = (localStorage.getItem('username')).toUpperCase();  // Get user username

    const orderRoasterElement = document.querySelector('.order-roaster-container');

    let orderSummaryHTML = '';
    let orderContainer;

    orderRoaster.forEach(order => {

        // Get create date and format it
        const createdAt = order.createdAt;

        const formattedDate = new Date(createdAt)
            .toLocaleDateString(
                "en-US",
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                }
            );

        orderContainer = document.createElement('div');
        orderContainer.classList.add('order-return-first-sample');
        orderSummaryHTML += `
                       
                     <div class="oder-return-header">
                                    <div class="the-three-first-one">
                                        <div class="order-return-placed">
                                            <span class="order-placed">ORDER PLACED</span>
                                            <span class="order-return-placed-date">${formattedDate}</span>
                                        </div>
                                        <div class="order-return-placed">
                                            <span class="order-placed">TOTAL</span>
                                            <span class="order-return-placed-date">$${order.totalAmount}</span>
                                        </div>
                                        <div class="order-return-placed">
                                            <span class="order-placed">Ship to</span>
                                            <span class="order-return-name">${userName}</span>
                                        </div>
                                    </div>
                                    <div class="order-return-placed">
                                        <div class="order-return-placed-order-number">
                                            <span class="order-placed">Order #:</span>
                                            <span class="order-placed">${order._id}</span>
                                        </div>
                                        <div class="view-order-invoice">
                                            <a href="yourOrderDetails.html">View order details</a>
                                            <span class="separator-line">|</span>
                                            <a href="#view-invoice">View in voice</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="alexa-button">
                                    <button class="alexa-button-container">
                                        <img src="images/alexa.png" alt="alexa logo" class="alexa-logo">
                                        <span class="alexa-button-text">Ask Alexa about this order</span>
                                    </button>
                                </div>
                                <div class="after-alexa-separator-line"></div>`; 

        order.items.forEach(item => {
            matchingProduct = products.find(p => p.id === item.id);

            orderSummaryHTML += `
                   
                         <div class="deliverydate-item-image-buttons-section">
                                    <div class="delivery-item-image-section">
                                        <div class="order-return-delivery-date-message">
                                            <div class="order-return-delivery-container">
                                                <span class="order-return-delivery">Delivered</span>
                                                <span class="order-return-delivery">May 2026</span>
                                            </div>
                                            <span class="order-return-message">
                                                Your package was left in front of your door or porch 
                                            </span>
                                        </div>
                                        <div class="image-item-name-buy-again-button">
                                            <a href="${matchingProduct.productPage}.html?id=${matchingProduct.id}">
                                                <img src="${matchingProduct.images.cartImageConfiramation}" alt="image">
                                            </a>
                                            <div class="item-name-buy-again-button">
                                                <a href="${matchingProduct.productPage}.html?id=${matchingProduct.id}" class="order-return-item-name">
                                                    ${matchingProduct.title}...
                                                </a>
                                                <div>
                                                    <span class="return-or-replace">Return or replace item eligible through</span>
                                                    <span class="return-or-replace">${getReturnDueDate()}</span>
                                                </div>
                                                <button class="order-return-buy-again-button" data-id="${matchingProduct.id}">
                                                    <div class="sub-save-cart">
                                                        <i class="bi bi-arrow-repeat"></i>
                                                        <i class="bi bi-cart4"></i>
                                                    </div>
                                                    <span>Buy it again</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons-section">
                                        <button class="order-return-track-package color" data-id="${matchingProduct.id}">
                                            Track package
                                        </button>
                                        <button class="order-return-track-package" data-id="${matchingProduct.id}">
                                            Return or Replace items
                                        </button>
                                        <button class="order-return-track-package" data-id="${matchingProduct.id}">
                                            Share gift receipts
                                        </button>

                                    </div>
                                </div>`;


        });
        orderContainer.innerHTML = orderSummaryHTML;
        
    });
    orderRoasterElement.appendChild(orderContainer);
    //orderContainer = "";
    

});



///////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @brief This function generates dynamically the order roaster
 * 
 */




