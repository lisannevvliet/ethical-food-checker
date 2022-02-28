export function veganStatus(ingredients_analysis_tags) {
    // Default color, which means that the product may be vegan.
    let color = 'orange'

    // Check if there are any ingredients analysis tags.
    if (ingredients_analysis_tags) {
        // If the product is vegan, make the color green.
        if (ingredients_analysis_tags[1] == 'en:vegan') {
            color = 'green'
        // If the product may be vegan, make the color orange.
        } else if (ingredients_analysis_tags[1] == 'en:maybe-vegan' || ingredients_analysis_tags[1] == 'en:vegan-status-unknown') {
            color = 'orange'
        // If the product is not vegan, make the color red.
        } else {
            color = 'red'
        }
    }

    // Return the allocated color.
    return color
}