export function ecoscore(ecoscore_grade) {
    // Empty string for the Eco-Score.
    let ecoscore = ""

    // Fill the ecoscore variable with the correct image.
    switch (ecoscore_grade) {
        case "a":
            ecoscore = `<div id="tooltip"><img src="https://static.openfoodfacts.org/images/attributes/dist/ecoscore-a.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore"><span>Eco-Score</span></div>`
            break;
        case "b":
            ecoscore = `<div id="tooltip"><img src="https://static.openfoodfacts.org/images/attributes/dist/ecoscore-b.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore"><span>Eco-Score</span></div>`
            break;
        case "c":
            ecoscore = `<div id="tooltip"><img src="https://static.openfoodfacts.org/images/attributes/dist/ecoscore-c.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore"><span>Eco-Score</span></div>`
            break;
        case "d":
            ecoscore = `<div id="tooltip"><img src="https://static.openfoodfacts.org/images/attributes/dist/ecoscore-d.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore"><span>Eco-Score</span></div>`
            break;
        case "e":
            ecoscore = `<div id="tooltip"><img src="https://static.openfoodfacts.org/images/attributes/dist/ecoscore-e.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore"><span>Eco-Score</span></div>`
    }

    return ecoscore
}