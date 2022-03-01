import { get } from './modules/get.js';
import { sticky } from './modules/sticky.js';
import { $ } from './modules/$.js';

$('.form').addEventListener('submit', function(event) {
    get(true)

    // Prevent the page from reloading.
    event.preventDefault()
})

$('.more').addEventListener('click', function() {
    get(false)
})

// Make the search bar and submit button sticky.
window.onscroll = function() { sticky($('.form')) };

// Show and hide content upon clicking a button.
// $('.collapsible').addEventListener('click', function() {
//     if ($('.content').style.display == 'block') {
//         $('.content').style.display = 'none'
//     } else {
//         $('.content').style.display = 'block'
//     }
// })

// Load more products if the end of the page is reached.
// window.addEventListener('scroll', () => {
//     if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
//         get(false)
//     }
// })