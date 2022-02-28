export function veganStatus(ingredients_analysis_tags) {
    // Default emoji, which means that the product may be vegan.
    let emoji = '❓'

    // Check if there are any ingredients analysis tags.
    if (ingredients_analysis_tags) {
        // If the product is vegan, change the emoji.
        if (ingredients_analysis_tags[1] == 'en:vegan') {
            emoji = '🌱'
        // If the product may be vegan, keep the default emoji.
        } else if (ingredients_analysis_tags[1] == 'en:maybe-vegan' || ingredients_analysis_tags[1] == 'en:vegan-status-unknown') {
            emoji = '❓'
        // If the product is not vegan, change the emoji.
        } else {
            emoji = '🚫'
        }
    }

    // Return the allocated emoji.
    return emoji
}