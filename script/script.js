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
                        let color = 'black'
                        let ingredients = ''
                        let ingredients_analysis_tags = ''
                        if (data.products[i].ingredients_analysis_tags) {
                            if (data.products[i].ingredients_analysis_tags[1] == 'en:vegan') {
                                color = 'green'
                            } else if (data.products[i].ingredients_analysis_tags[1] == 'en:vegan-status-unknown') {
                                color = 'orange'
                            } else {
                                color = 'red'
                            }
                        }
                        if (data.products[i].ingredients_text) { ingredients = `${data.products[i].ingredients_text}<br>` }
                        if (data.products[i].ingredients_analysis_tags) { ingredients_analysis_tags = `${data.products[i].ingredients_analysis_tags}<br>` }
                        $('ul').insertAdjacentHTML('beforeend', `<li><button class='product'><span style='color:${color}'>${data.products[i].product_name}</span><br>
                        ${ingredients}
                        ${ingredients_analysis_tags}
                        <img src='${data.products[i].image_small_url}' alt='${data.products[i].product_name}'></button><br><br>
                        </li>`)
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