export function labels(ingredients_analysis_tags) {
    // Empty list, to which the labels will be added.
    let labels = []

    // Check if there are any ingredients analysis tags.
    if (ingredients_analysis_tags) {
        // If the product is vegetarian, add this to the list.
        if (ingredients_analysis_tags[2] == "en:vegetarian") { labels.push("vegetarian") }
        // If the product is vegan, add this to the list.
        if (ingredients_analysis_tags[1] == "en:vegan") { labels.push("vegan") }
        // If the product is palm oil free, add this to the list.
        if (ingredients_analysis_tags[0] == "en:palm-oil-free") { labels.push("palm oil free") }
    }

    // Return the corresponding emojis.
    return labels.join(" ")
}