import { $ } from "./$.js"
import { barcode } from "./barcode.js"

export function url(page) {
    let results = []

    if (barcode()) {
        results.push(`https://nl.openfoodfacts.org/cgi/search.pl?code=${$("input").value}&search_simple=1&action=process&json=1&page=${page}`)
    } else {
        results.push(`https://nl.openfoodfacts.org/cgi/search.pl?search_terms=${$("input").value}&search_simple=1&action=process&json=1&page=${page}`)
    }

    return results
}