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

 
    

