export function sticky(element) {
    // Add the sticky class to the navbar when its scroll position is reached. 
    if (window.pageYOffset >= element.offsetTop) {
        element.classList.add('sticky')
    // Remove 'sticky' when the scroll position is left.
    } else {
        element.classList.remove('sticky')
    }
}