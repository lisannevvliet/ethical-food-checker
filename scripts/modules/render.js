import { $ } from "./$.js"
import { emojis } from "./emojis.js"
import { ecoscore } from "./ecoscore.js"
import { barcode } from "./barcode.js"

export function render(data, first) {
    // If products exist, render them in the HTML.
    if (data.products.length != 0) {
        data.products.forEach(product => {
            if (product.product_name != "") {
                // Empty string for the image.
                let image = ""

                // Add the image if there is any.
                if (product.image_small_url) {
                    image = `<div id="frame">
                    <img src="${product.image_small_url}" alt="${product.product_name}">
                    </div>`
                // If not, use the placeholder.
                } else {
                    image = `<div id="frame">
                    <img src="images/placeholder-image.png" alt="${product.product_name}">
                    </div>`
                }
                
                // Add the product name, ingredients and image to the page.
                $("ul").insertAdjacentHTML("beforeend",`<li>
                <div id="product">
                ${image}
                <span><span id="name">${product.product_name}</span><br>
                ${emojis(product.ingredients_analysis_tags)} ${ecoscore(product.ecoscore_grade, )}<span>
                </div>
                </li>`)
            }
        })

        // Show the sort options.
        $("#sort").style.display = "flex"

        // If there are more pages, show the "More" button.
        if (data.page <= (data.count / data.page_size)) {
            $("#more").style.display = "block"
        }
    } else {
        // Show the instructions.
        $("#instructions").style.display = "flex"
        // Hide the sort options.
        $("#sort").style.display = "none"

        // Assign a name to the search query type.
        let type = barcode() ? "barcode" : "name"

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