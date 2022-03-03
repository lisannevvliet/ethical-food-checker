import { $ } from "./$.js";
import { render } from "./render.js";

// Counter for the page number.
let page = 1

export function get(first) {
    if ($(".query").value != "") {
        // Hide the text, "More" button and show the loader upon searching.
        $(".instructions").style.display = "none"
        $(".more").style.display = "none"
        $(".loader").style.display = "block"

        // Trace whether the first page should be loaded.
        if (first) {
            $(".results").innerHTML = ""
            page = 1
        } else {
            page++
        }

        // URL for the search request.
        let url = ""
        // Boolean which shows if the search query is a barcode.
        const barcode = /^\d+$/.test($(".query").value)

        if (barcode) {
            url = `https://nl.openfoodfacts.org/cgi/search.pl?code=${$(".query").value}&search_simple=1&action=process&json=1&page=${page}`
        } else {
            url = `https://nl.openfoodfacts.org/cgi/search.pl?search_terms=${$(".query").value}&search_simple=1&action=process&json=1&page=${page}`
        }
    
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
                $(".instructions").style.display = "flex"
                let type = ""
                
                // Assign a name to the search query type.
                if (barcode) {
                    type = "barcode"
                } else {
                    type = "name"
                }

                // If no products exist, tell that to the user.
                if (first) {
                    $(".instructions").innerHTML = `No products were found with the ${type} "${$(".query").value}".<br>
                    Please try again.`
                // If all products are already loaded, tell that to the user.
                } else {
                    $(".instructions").innerHTML = `All products with the ${type} "${$(".query").value}" are already shown.`
                }
            }

            // Hide the loader once the data is fetched.
            $(".loader").style.display = "none"
        })
    }
}