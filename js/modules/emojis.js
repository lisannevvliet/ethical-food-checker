export function emojis(ingredients_analysis_tags) {
    // Empty list, to which the emojis will be added.
    let emojis = []

    // Check if there are any ingredients analysis tags.
    if (ingredients_analysis_tags) {
        // If the product is vegetarian, add an emoji.
        if (ingredients_analysis_tags[2] == 'en:vegetarian') { emojis.push('🐄') }
        // If the product is vegan, add an emoji.
        if (ingredients_analysis_tags[1] == 'en:vegan') { emojis.push('🌱') }
        // If the product is free from palm oil, add an emoji.
        if (ingredients_analysis_tags[0] == 'en:palm-oil-free') { emojis.push('🌴') }
    }

    // Return the corresponding emojis.
    return emojis.join(' ')
}