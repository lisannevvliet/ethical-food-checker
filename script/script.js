let counter = 1

$('.form').addEventListener('submit', function() {
    search(event, 'search')
})
$('.more').addEventListener('click', function() {
    search(event, '')
})

function search(event, type) {
    $('.instructions').style.display = 'none'
    $('.more').style.display = 'none'
    $('.loader').style.display = 'block'
    if (type == 'search') {
        $('.results').innerHTML = ''
        counter = 1
    } else {
        counter++
    }
    get($('.name').value, counter)
    event.preventDefault()
}

function get(name, page){
    const url = `https://nl.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1&page=${page}`
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            if (data.products.length != 0) {
                for (i in data.products) {
                    if (data.products[i].product_name != '') {
                        $('ul').insertAdjacentHTML('beforeend', `<li>${data.products[i].product_name}</li>`)
                    }
                }
                if (data.products.length == 24) {
                    $('.more').style.display = 'block'
                }
            } else {
                $('.instructions').style.display = 'block'
                $('.instructions').innerHTML = `Geen producten gevonden met de naam \'${name}\'. Probeer het opnieuw.`
            }
            $('.loader').style.display = 'none'
        })
}

function $(element) {
    return document.querySelector(element)
}