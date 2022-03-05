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
    get(true)

    // Close the keyboard after submit.
    document.activeElement.blur();

    // Prevent the page from reloading.
    event.preventDefault()
})

$("#more").addEventListener("click", function() {
    get(false)
})