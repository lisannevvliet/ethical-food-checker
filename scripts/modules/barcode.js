import { $ } from "./$.js"

export function barcode() {
    // Boolean which shows if the search query is a barcode.
    return /^\d+$/.test($("input").value)
}