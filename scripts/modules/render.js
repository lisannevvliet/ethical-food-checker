import { $ } from "./$.js"
import { labels } from "./labels.js"
import { emojis } from "./emojis.js"

export function render(data) {
    for (let i in data.products) {
        if (data.products[i].product_name != "") {
            // String which contains the labels (vegetarian, vegan and/or palm oil free).
            let labels_local = labels(data.products[i].ingredients_analysis_tags)
            // Empty string for the image.
            let image = ""

            // Add the image if there is any.
            if (data.products[i].image_small_url) {
                image = `<div class="image"><img src="${data.products[i].image_small_url}" alt="${data.products[i].product_name}"></div>`
            } else {
                image = `<div class="image"><img src="images/placeholder-image.png" alt="${data.products[i].product_name}"></div>`
            }
            
            // Add the product name, ingredients and image to the page.
            $("ul").insertAdjacentHTML("beforeend",`<li><div class="product">
            ${image}
            <span class="span">${data.products[i].product_name}<br>
            ${emojis(labels_local)}</span><br>
            </div><br><br></li>`)
        }
    }

    // If there are more pages, show the "More" button.
    if (data.products.length == 24) {
        $(".more").style.display = "block"
    }
}