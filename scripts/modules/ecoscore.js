export function ecoscore(ecoscore_grade) {
    // Empty string for the Eco-Score.
    let ecoscore = ""

    // Fill the ecoscore variable with the correct image.
    switch (ecoscore_grade) {
        case "a":
            ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-a.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore">`
            break;
        case "b":
            ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-b.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore">`
            break;
        case "c":
            ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-c.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore">`
            break;
        case "d":
            ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-d.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore">`
            break;
        case "e":
            ecoscore = `<img src="https://static.openfoodfacts.org/images/icons/ecoscore-e.svg" alt="Eco-Score: ${ecoscore_grade.toUpperCase()}" id="ecoscore">`
    }

    return ecoscore
}