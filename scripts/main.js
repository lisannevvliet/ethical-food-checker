import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"

// If a hash already exists, show the explanation.
if (window.location.hash) {
    $("section").style.display = "block"
}

// If a hash is added, show the explanation.
window.onhashchange = function() {
    $("section").style.display = "block"
}

// If the explanation is closed, remove the hash.
// https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
$("section button").addEventListener("click", function() {
    $("section").style.display = "none"
    history.pushState("", document.title, window.location.pathname + window.location.search);
})

$("form").addEventListener("submit", function(event) {
    get(true, sort_by)

    // Close the keyboard after submit.
    document.activeElement.blur();

    // Prevent the page from reloading.
    event.preventDefault()
})

// Empty string for the text in the "Sort" button.
let sort_by = ""

// EventListeners for "Sort" menu.
$("#popularity").addEventListener("click", function() {
    sort_by = "unique_scans_n"

    $("#popularity").style.backgroundColor = "#8cb177"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#9ac383"

    get(true, sort_by)
})

$("#product_name").addEventListener("click", function() {
    sort_by = "product_name"
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#8cb177"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#9ac383"


    get(true, sort_by)
})

$("#add_date").addEventListener("click", function() {
    sort_by = "created_t"

    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#8cb177"
    $("#edit_date").style.backgroundColor = "#9ac383"

    get(true, sort_by)
})

$("#edit_date").addEventListener("click", function() {
    sort_by = "last_modified_t"

    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#8cb177"

    get(true, sort_by)
})

$("#more").addEventListener("click", function() {
    get(false, sort_by)
})