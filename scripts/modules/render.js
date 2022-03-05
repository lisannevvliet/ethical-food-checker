import { $ } from "./$.js"
import { barcode } from "./barcode.js"
import { emojis } from "./emojis.js"
import { ecoscore } from "./ecoscore.js"

export function render(data, first) {
    // If products exist, render them in the HTML.
    if (data.products.length != 0) {
        for (let i in data.products) {
            if (data.products[i].product_name != "") {
                // Empty string for the image.
                let image = ""

                // Add the image if there is any.
                if (data.products[i].image_small_url) {
                    image = `<div id="frame"><img src="${data.products[i].image_small_url}" alt="${data.products[i].product_name}"></div>`
                } else {
                    image = `<div id="frame"><img src="images/placeholder-image.png" alt="${data.products[i].product_name}"></div>`
                }
                
                // Add the product name, ingredients and image to the page.
                $("ul").insertAdjacentHTML("beforeend",`<li><div id="product">
                ${image}
                <span><span id="bold">${data.products[i].product_name}</span><br>
                ${emojis(data.products[i].ingredients_analysis_tags)} ${ecoscore(data.products[i].ecoscore_grade, )}<span>
                </div></li>`)
            }
        }

        // If there are more pages, show the "More" button.
        if (data.page <= (data.count / data.page_size)) {
            $("#more").style.display = "block"
        }
    } else {
        $("#instructions").style.display = "flex"
                let type = ""
                
                // Assign a name to the search query type.
                if (barcode()) {
                    type = "barcode"
                } else {
                    type = "name"
                }

                // If no products exist, tell that to the user.
                if (first) {
                    $("#instructions").innerHTML = `No products were found with the ${type} "${$("input").value}".<br>
                    Please try again.`
                // If all products are already loaded, tell that to the user.
                } else {
                    $("#instructions").innerHTML = `All products with the ${type} "${$("input").value}" are already shown.`
                }
    }

    // Hide the loader once the data is fetched.
    $("#loader").style.display = "none"
}