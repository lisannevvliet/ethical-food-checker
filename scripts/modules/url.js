import { barcode } from "./barcode.js"

export function url(page, sort_by, hash) {
    // Save the correct URL based on if the search query is a barcode or not.
    let url =  barcode(hash)
    ? `https://nl.openfoodfacts.org/cgi/search.pl?code=${hash}&search_simple=1&action=process&json=1&page=${page}`
    : `https://nl.openfoodfacts.org/cgi/search.pl?search_terms=${hash}&search_simple=1&action=process&json=1&page=${page}`

    // If there is a sort method, add this to the url.
    if (sort_by != "") { url += `&sort_by=${sort_by}`; console.log(url) }
    
    return url
}