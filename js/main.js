import { getData } from './modules/getData.js';

document.querySelector('.form').addEventListener('submit', function(event) {
    getData(true)

    // Prevent the page from reloading.
    event.preventDefault()
})

document.querySelector('.more').addEventListener('click', function(event) {
    getData(false)

    // Prevent the page from reloading.
    event.preventDefault()
})