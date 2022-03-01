import { $ } from './$.js';
import { render } from './render.js';

// Counter for the page number.
let page = 1

export function get(first) {
    // Hide the text, 'More' button and loader upon searching.
    $('.instructions').style.display = 'none'
    $('.loader').style.display = 'block'

    // Trace whether the first page should be loaded.
    if (first) {
        $('.results').innerHTML = ''
        page = 1
    } else {
        page++
    }

    // URL for the search request.
    const url = `https://nl.openfoodfacts.org/cgi/search.pl?search_terms=${$('.name').value}&search_simple=1&action=process&json=1&page=${page}`
    
    // Send a search request to the API.
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            // If products exist, render them in the HTML.
            if (data.products.length != 0) {
                render(data)
            } else {
                $('.instructions').style.display = 'flex'
                // If no products exist, tell that to the user.
                if (first) {
                    $('.instructions').innerHTML = `No products were found with the name '${$('.name').value}'. Please try again.`
                // If all products are already loaded, tell that to the user.
                } else {
                    $('.instructions').innerHTML = `All products with the name '${$('.name').value}' are already shown.`
                }
            }

            // Hide the loader once the data is fetched.
            $('.loader').style.display = 'none'
        })
}