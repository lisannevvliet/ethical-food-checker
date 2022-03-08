import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"
import { detect } from "./modules/detect.js"
import "./modules/vendor/routie.min.js"

// Get the products from the API when the hash changes.
routie ({
    ":hash": hash => {
        get(true, "", hash)
    }
})

// If the explanation is clicked, show the section.
$("#explanation").addEventListener("click", function() {
    $("section").style.display = "block"
})

// If the explanation is closed, hide the section.
$("section button").addEventListener("click", function() {
    $("section").style.display = "none"
})

// Only show the barcode button if the BarcodeDetector is supported.
if ("BarcodeDetector" in window) {
    $("#barcode").style.display = "block"
}

$("form").addEventListener("submit", function(event) {
    window.location.hash = $("input").value

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

    get(true, "unique_scans_n", hash)
})

$("#product_name").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#749262"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#9ac383"

    get(true, "product_name", hash)
})

$("#add_date").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#749262"
    $("#edit_date").style.backgroundColor = "#9ac383"

    get(true, "created_t", hash)
})

$("#edit_date").addEventListener("click", function() {
    $("#popularity").style.backgroundColor = "#9ac383"
    $("#product_name").style.backgroundColor = "#9ac383"
    $("#add_date").style.backgroundColor = "#9ac383"
    $("#edit_date").style.backgroundColor = "#749262"

    get(true, "last_modified_t", hash)
})

$("#more").addEventListener("click", function() {
    get(false, "", hash)
})