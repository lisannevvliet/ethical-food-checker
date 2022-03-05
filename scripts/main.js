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
    $("#sort button").innerText = "Popularity"
    sort_by = "unique_scans_n"
    get(true, sort_by)
})

$("#product_name").addEventListener("click", function() {
    $("#sort button").innerText = "Product name"
    sort_by = "product_name"
    get(true, sort_by)
})

$("#add_date").addEventListener("click", function() {
    $("#sort button").innerText = "Add date"
    sort_by = "created_t"
    get(true, sort_by)
})

$("#edit_date").addEventListener("click", function() {
    $("#sort button").innerText = "Edit date"
    sort_by = "last_modified_t"
    get(true, sort_by)
})

$("#more").addEventListener("click", function() {
    get(false, sort_by)
})