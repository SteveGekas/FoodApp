//var googleMap = document.querySelector("#map");
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

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB5txYIT-JDscslwZuBHw0NbgQIf7Qear0&callback=initMap';
script.defer = true;

window.initMap = function() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
    // JS API is loaded and available
  
  
  // Append the 'script' element to 'head'
  document.head.appendChild(script);




document.querySelector(".submit").addEventListener('click', handleSearchFormSubmit);

//"https://developers.zomato.com/api/v2.1/search?apikey=6c1c69e843bf3372eb5e6a5fae766fcf?entity_type=city?q="+ searchInputVal