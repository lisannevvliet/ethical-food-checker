import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"
import { detect } from "./modules/detect.js"

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

// Only show the barcode button if the BarcodeDetector is supported.
if ("BarcodeDetector" in window) {
    console.log("BarcodeDetector niet ondersteund.")
    $("#barcode").style.display = "block"
}

$("form").addEventListener("submit", function(event) {
    get(true, sort_by)

    // Close the keyboard after submit.
    document.activeElement.blur();

    // Prevent the page from reloading.
    event.preventDefault()
})


$("#barcode").addEventListener("click", function() {
    detect()
})

// EventListeners for "Sort" menu.
$("#popularity").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#749262"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#9ac383"

    get(true, "unique_scans_n")
})

$("#product_name").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#749262"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#9ac383"


    get(true, "product_name")
})

$("#add_date").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#749262"
    $("#edit_date").style.backgroundColor = "#9ac383"

    get(true, "created_t")
})

$("#edit_date").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#749262"

    get(true, "last_modified_t")
})

$("#more").addEventListener("click", function() {
    get(false, sort_by)
})