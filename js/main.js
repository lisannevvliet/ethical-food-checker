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

$('.more').addEventListener('click', function() {
    get(false)
})