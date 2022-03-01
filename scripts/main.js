import { get } from './modules/get.js';
import { $ } from './modules/$.js';

$('.collapsible').addEventListener('click', function() {
    if ($('.content').style.display == 'block') {
        $('.content').style.display = 'none'
    } else {
        $('.content').style.display = 'block'
    }
})


$('.form').addEventListener('submit', function(event) {
    get(true)

    // Prevent the page from reloading.
    event.preventDefault()
})

window.addEventListener('scroll', () => {
    // Load more products if the end of the page is reached.
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        get(false)
    }
})