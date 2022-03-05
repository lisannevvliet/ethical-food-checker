import { $ } from "./$.js"
import { emojis } from "./emojis.js"

export function render(data) {
    for (let i in data.products) {
        if (data.products[i].product_name != "") {
            // Empty string for the Eco-Score.
            let ecoscore = ""
            // Empty string for the image.
            let image = ""

            switch (data.products[i].ecoscore_grade) {
                case "a":
                    ecoscore = "https://static.openfoodfacts.org/images/icons/ecoscore-a.svg"
                    break;
                case "b":
                    ecoscore = "https://static.openfoodfacts.org/images/icons/ecoscore-b.svg"
                    break;
                case "c":
                    ecoscore = "https://static.openfoodfacts.org/images/icons/ecoscore-c.svg"
                    break;
                case "d":
                    ecoscore = "https://static.openfoodfacts.org/images/icons/ecoscore-d.svg"
                    break;
                case "e":
                    ecoscore = "https://static.openfoodfacts.org/images/icons/ecoscore-e.svg"
                    break;
                default:
                    ecoscore = "https://static.openfoodfacts.org/images/icons/ecoscore-unknown.svg"
            }

            // Add the image if there is any.
            if (data.products[i].image_small_url) {
                image = `<div id="frame"><img src="${data.products[i].image_small_url}" alt="${data.products[i].product_name}"></div>`
            } else {
                image = `<div id="frame"><img src="images/placeholder-image.png" alt="${data.products[i].product_name}"></div>`
            }
            
            // Add the product name, ingredients and image to the page.
            $("ul").insertAdjacentHTML("beforeend",`<li><div id="product">
            ${image}
            <span>${data.products[i].product_name}<br>
            ${emojis(data.products[i].ingredients_analysis_tags)}
            <img src="${ecoscore}" alt="Eco-Score: ${data.products[i].ecoscore_grade.toUpperCase()}" id="ecoscore"></span>
            </div></li>`)
        }
    }

    // If there are more pages, show the "More" button.
    if (data.products.length == 24) {
        $("#more").style.display = "block"
    }
}