import { $ } from "./$.js"
import { barcode } from "./barcode.js"

export function url(page) {
    // Return the correct URL based on if the search query is a barcode or noy.
    return barcode() ? `https://nl.openfoodfacts.org/cgi/search.pl?code=${$("input").value}&search_simple=1&action=process&json=1&page=${page}` : `https://nl.openfoodfacts.org/cgi/search.pl?search_terms=${$("input").value}&search_simple=1&action=process&json=1&page=${page}`
}