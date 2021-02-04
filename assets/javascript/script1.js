
var cuisine = ["Afghan",
    "African",
    "American",
    "Amish",
    "Argentine",
    "Asian",
    "BBQ",
    "Bagels",
    "Bakery",
    "Bar Food",
    "Belgian",
    "Beverages",
    "Brazilian",
    "Breakfast",
    "British",
    "Bubble Tea",
    "Burger",
    "Burmese",
    "Cafe",
    "Cajun",
    "California",
    "Cambodian",
    "Cantonese",
    "Caribbean",
    "Chili",
    "Chinese",
    "Coffee and Tea",
    "Colombian",
    "Crepes",
    "Cuban",
    "Deli",
    "Desserts",
    "Dim Sum",
    "Diner",
    "Dominican",
    "Donuts",
    "Drinks Only",
    "Eastern European",
    "Ethiopian",
    "European",
    "Fast Food",
    "Filipino",
    "French",
    "Frozen Yogurt",
    "Fusion",
    "German",
    "Greek",
    "Hawaiian",
    "Healthy Food",
    "Ice Cream",
    "Indian",
    "Indonesian",
    "International",
    "Irish",
    "Israeli",
    "Italian",
    "Jamaican",
    "Japanese",
    "Juices",
    "Kebab",
    "Korean",
    "Laotian",
    "Latin American",
    "Malaysian",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Moroccan",
    "New American",
    "New Mexican",
    "Pakistani",
    "Patisserie",
    "Peruvian",
    "Pizza",
    "Po'Boys",
    "Polish",
    "Portuguese",
    "Pub Food",
    "Puerto Rican",
    "Ramen",
    "Russian",
    "Salad",
    "Salvadorean",
    "Sandwich",
    "Seafood",
    "Soul Food",
    "Southern",
    "Southwestern",
    "Spanish",
    "Steak",
    "Sushi",
    "Swedish",
    "Taco",
    "Taiwanese",
    "Tapas",
    "Tea",
    "Tex-Mex",
    "Thai",
    "Turkish",
    "Vegetarian",
    "Venezuelan",
    "Vietnamese"
]

var cuisineListEl = document.querySelector(".select")
for (i = 0; i < cuisine.length; i++) {
    var opt = document.createElement('option');
    opt.className = "formVal";

// create text node to add to option element (opt)
opt.appendChild( document.createTextNode(cuisine[i]) );

// set value property of opt
opt.value = cuisine[i]; 

// add opt to end of select box (sel)
cuisineListEl.appendChild(opt); }




//var googleMap = document.querySelector("#map");
function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector(".searchCity").value;
   
   restaurantURL = "https://developers.zomato.com/api/v2.1/cities?q=" + searchInputVal 


   // 
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
            var cityid= data.location_suggestions[0].id;
            console.log(cityid);
            cuisineSearch(cityid);
        })


   
}

function cuisineSearch(cityid){
    var dropInputVal = document.querySelector(".formVal").value;
    console.log(dropInputVal);
    restaurantTwoURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityid + "&entity_type=city&cuisines=" + dropInputVal.toLowerCase()
    console.log(restaurantTwoURL)
    fetch(restaurantTwoURL, {
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

window.initMap = function () {
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