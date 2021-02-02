
function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector(".searchCity").value;


    restaurantURL = "https://developers.zomato.com/api/v2.1/cities?q=" + searchInputVal
    console.log(restaurantURL)
    fetch(restaurantURL, {
        // credentials: 'include',
        headers: { "user-key": "6c1c69e843bf3372eb5e6a5fae766fcf" }
    })

        .then(function (resp) {
            // Convert data to json
            return resp.json();

        })
        .then(function (data) {
            console.log(data);
        })
}


document.querySelector(".submit").addEventListener('click', handleSearchFormSubmit);

//"https://developers.zomato.com/api/v2.1/search?apikey=6c1c69e843bf3372eb5e6a5fae766fcf?entity_type=city?q="+ searchInputVal