/*Script to handle "See All" (on the amburger tooltip) button functionality in the navigation bar */

let button = document.querySelector('.button-see-all');
let remainingItems = document.querySelector('.remaining-links');
button.addEventListener('click', () => {
       remainingItems.innerHTML= `<a href="#alexa-skills"><li>Alexa Skills</li></a>
                                <a href="#amazon-devices"><li>Amazon Devices</li></a>
                                <a href="#amazon-fresh"><li>Amazon Fresh</li></a>`;
});
