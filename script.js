document.getElementById('form').addEventListener('submit', function() {
    search(event, 'search')
})
document.getElementById('more').addEventListener('click', function() {
    search(event, 'more')
})

function search(event, type) {
    let counter = 1
    document.getElementById('instructions').style.display = 'none'
    document.getElementById('loader').style.display = 'block'
    if (type === 'search') {
        document.getElementById('results').innerHTML = ''
        counter = 1
    } else {
        counter++
    }
    get(document.forms['form']['name'].value, counter)
    event.preventDefault()
}

function get(name, page){
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&json=1&page=${page}`
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            if (data.products.length != 0) {
                for (i in data.products) {
                    if (data.products[i].product_name != '') {
                        document.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${data.products[i].product_name}</li>`)
                    }
                }
                document.getElementById('more').style.display = 'block'
            } else {
                document.getElementById('instructions').style.display = 'block'
                if (page != 1) {
                    document.getElementById('instructions').innerHTML = `Dit waren alle producten met de naam \'${name}\'.`
                    document.getElementById('more').style.display = 'none'
                } else {
                    document.getElementById('instructions').innerHTML = `Geen producten gevonden met de naam \'${name}\'. Probeer het opnieuw.`
                }
            }
            document.getElementById('loader').style.display = 'none'
        })
}