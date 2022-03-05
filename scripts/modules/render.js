import { $ } from "./$.js"
import { emojis } from "./emojis.js"

export function render(data) {
    for (let i in data.products) {
        if (data.products[i].product_name != "") {
            // Empty string for the Eco-Score.
            let ecoscore = ""
            // Empty string for the image.
            let image = ""

            // Fill the ecoscore variable with the correct image.
            switch (data.products[i].ecoscore_grade) {
                case "a":
                    ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-a.svg" alt="Eco-Score: ${data.products[i].ecoscore_grade.toUpperCase()}" id="ecoscore">`
                    break;
                case "b":
                    ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-b.svg" alt="Eco-Score: ${data.products[i].ecoscore_grade.toUpperCase()}" id="ecoscore">`
                    break;
                case "c":
                    ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-c.svg" alt="Eco-Score: ${data.products[i].ecoscore_grade.toUpperCase()}" id="ecoscore">`
                    break;
                case "d":
                    ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-d.svg" alt="Eco-Score: ${data.products[i].ecoscore_grade.toUpperCase()}" id="ecoscore">`
                    break;
                case "e":
                    ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-e.svg" alt="Eco-Score: ${data.products[i].ecoscore_grade.toUpperCase()}" id="ecoscore">`
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
            <span><span id="bold">${data.products[i].product_name}</span><br>
            ${emojis(data.products[i].ingredients_analysis_tags)} ${ecoscore}<span>
            </div></li>`)
        }
    }

    // If there are more pages, show the "More" button.
    if (data.products.length == 24) {
        $("#more").style.display = "block"
    }
}