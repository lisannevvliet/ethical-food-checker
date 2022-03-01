export function emojis(ingredients_analysis_tags) {
    // Empty list, to which the emojis will be added.
    let emojis = []

    // Check if there are any ingredients analysis tags.
    if (ingredients_analysis_tags) {
        // If the product is vegetarian, add an emoji.
        if (ingredients_analysis_tags[2] == 'en:vegetarian') { emojis.push('<div class=\'tooltip\'>🐄<span class=\'tooltiptext\'>Vegetarian</span></div>') }
        // If the product is vegan, add an emoji.
        if (ingredients_analysis_tags[1] == 'en:vegan') { emojis.push('<div class=\'tooltip\'>🌱<span class=\'tooltiptext\'>Vegan</span></div>') }
        // If the product is free from palm oil, add an emoji.
        if (ingredients_analysis_tags[0] == 'en:palm-oil-free') { emojis.push('<div class=\'tooltip\'>🌴<span class=\'tooltiptext\'>Palm oil free</span></div>') }
    }

    // Return the corresponding emojis.
    return emojis.join(' ')
}