export function emojis(labels) {
    // Empty list, to which the emojis will be added.
    let emojis = []

    // If the product is vegetarian, add an emoji.
    if (labels.includes("vegetarian")) { emojis.push("<div id=\"emoji\">🐄<span class=\"tooltiptext\">Vegetarian</span></div>") }
    // If the product is vegan, add an emoji.
    if (labels.includes("vegan")) { emojis.push("<div id=\"emoji\">🌱<span class=\"tooltiptext\">Vegan</span></div>") }
    // If the product is free from palm oil, add an emoji.
    if (labels.includes("palm oil free")) { emojis.push("<div id=\"emoji\">🌴<span class=\"tooltiptext\">Palm oil free</span></div>") }

    // Return the corresponding emojis.
    return emojis.join(" ")
}