import { $ } from "./modules/$.js"
import { get } from "./modules/get.js"

if (window.location.hash) {
    $("section").style.display = "block"
}

$("form").addEventListener("submit", function(event) {
    get(true)

    document.activeElement.blur();

    // Prevent the page from reloading.
    event.preventDefault()
})

$("#more").addEventListener("click", function() {
    get(false)
})

window.onhashchange = function() {
    if (location.hash == "#explanation") {
        $("section").style.display = "block"
    }
}

$("section button").addEventListener("click", function() {
    // https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r
    history.pushState("", document.title, window.location.pathname + window.location.search);
    $("section").style.display = "none"
})

// Show and hide content upon clicking a button.
// $(".collapsible").addEventListener("click", function() {
//     if ($(".content").style.display == "block") {
//         $(".content").style.display = "none"
//     } else {
//         $(".content").style.display = "block"
//     }
// })

// Load more products if the end of the page is reached.
// window.addEventListener("scroll", () => {
//     if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
//         get(false)
//     }
// })