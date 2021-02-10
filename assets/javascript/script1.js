
let cuisine = [
    { cuisine_name: "Afghan", cuisine_id: "1035" },
    { cuisine_name: "African", cuisine_id: "152" },
    { cuisine_name: "American", cuisine_id: "1" },
    { cuisine_name: "Amish", cuisine_id: "954" },
    { cuisine_name: "Argentine", cuisine_id: "151" },
    { cuisine_name: "Asian", cuisine_id: "3" },
    { cuisine_name: "BBQ", cuisine_id: "193" },
    { cuisine_name: "Bagels", cuisine_id: "955" },
    { cuisine_name: "Bakery", cuisine_id: "5" },
    { cuisine_name: "Bar Food", cuisine_id: "227" },
    { cuisine_name: "Belgian", cuisine_id: "132" },
    { cuisine_name: "Beverages", cuisine_id: "270" },
    { cuisine_name: "Brazilian", cuisine_id: "159" },
    { cuisine_name: "Breakfast", cuisine_id: "182" },
    { cuisine_name: "British", cuisine_id: "133" },
    { cuisine_name: "Bubble Tea", cuisine_id: "247" },
    { cuisine_name: "Burger", cuisine_id: "168" },
    { cuisine_name: "Burmese", cuisine_id: "22" },
    { cuisine_name: "Cafe", cuisine_id: "30" },
    { cuisine_name: "Cajun", cuisine_id: "491" },
    { cuisine_name: "California", cuisine_id: "956" },
    { cuisine_name: "Cambodian", cuisine_id: "111" },
    { cuisine_name: "Cantonese", cuisine_id: "121" },
    { cuisine_name: "Caribbean", cuisine_id: "158" },
    { cuisine_name: "Chili", cuisine_id: "971" },
    { cuisine_name: "Chinese", cuisine_id: "25" },
    { cuisine_name: "Coffee and Tea", cuisine_id: "161" },
    { cuisine_name: "Colombian", cuisine_id: "287" },
    { cuisine_name: "Crepes", cuisine_id: "881" },
    { cuisine_name: "Cuban", cuisine_id: "153" },
    { cuisine_name: "Deli", cuisine_id: "192" },
    { cuisine_name: "Desserts", cuisine_id: "100" },
    { cuisine_name: "Dim Sum", cuisine_id: "411" },
    { cuisine_name: "Diner", cuisine_id: "541" },
    { cuisine_name: "Dominican", cuisine_id: "958" },
    { cuisine_name: "Donuts", cuisine_id: "959" },
    { cuisine_name: "Drinks Only", cuisine_id: "268" },
    { cuisine_name: "Eastern European", cuisine_id: "651" },
    { cuisine_name: "Ethiopian", cuisine_id: "149" },
    { cuisine_name: "European", cuisine_id: "38" },
    { cuisine_name: "Fast Food", cuisine_id: "40" },
    { cuisine_name: "Filipino", cuisine_id: "112" },
    { cuisine_name: "French", cuisine_id: "45" },
    { cuisine_name: "Frozen Yogurt", cuisine_id: "501" },
    { cuisine_name: "Fusion", cuisine_id: "274" },
    { cuisine_name: "German", cuisine_id: "134" },
    { cuisine_name: "Greek", cuisine_id: "156" },
    { cuisine_name: "Hawaiian", cuisine_id: "521" },
    { cuisine_name: "Healthy Food", cuisine_id: "143" },
    { cuisine_name: "Ice Cream", cuisine_id: "233" },
    { cuisine_name: "Indian", cuisine_id: "148" },
    { cuisine_name: "Indonesian", cuisine_id: "114" },
    { cuisine_name: "International", cuisine_id: "154" },
    { cuisine_name: "Irish", cuisine_id: "135" },
    { cuisine_name: "Israeli", cuisine_id: "218" },
    { cuisine_name: "Italian", cuisine_id: "55" },
    { cuisine_name: "Jamaican", cuisine_id: "207" },
    { cuisine_name: "Japanese", cuisine_id: "60" },
    { cuisine_name: "Juices", cuisine_id: "164" },
    { cuisine_name: "Kebab", cuisine_id: "178" },
    { cuisine_name: "Korean", cuisine_id: "67" },
    { cuisine_name: "Laotian", cuisine_id: "901" },
    { cuisine_name: "Latin American", cuisine_id: "136" },
    { cuisine_name: "Malaysian", cuisine_id: "69" },
    { cuisine_name: "Mediterranean", cuisine_id: "70" },
    { cuisine_name: "Mexican", cuisine_id: "73" },
    { cuisine_name: "Middle Eastern", cuisine_id: "137" },
    { cuisine_name: "Moroccan", cuisine_id: "147" },
    { cuisine_name: "New American", cuisine_id: "996" },
    { cuisine_name: "New Mexican", cuisine_id: "995" },
    { cuisine_name: "Pakistani", cuisine_id: "139" },
    { cuisine_name: "Patisserie", cuisine_id: "183" },
    { cuisine_name: "Peruvian", cuisine_id: "162" },
    { cuisine_name: "Pizza", cuisine_id: "82" },
    { cuisine_name: "Po'Boys", cuisine_id: "970" },
    { cuisine_name: "Polish", cuisine_id: "219" },
    { cuisine_name: "Portuguese", cuisine_id: "87" },
    { cuisine_name: "Pub Food", cuisine_id: "983" },
    { cuisine_name: "Puerto Rican", cuisine_id: "361" },
    { cuisine_name: "Ramen", cuisine_id: "320" },
    { cuisine_name: "Russian", cuisine_id: "84" },
    { cuisine_name: "Salad", cuisine_id: "998" },
    { cuisine_name: "Salvadorean", cuisine_id: "601" },
    { cuisine_name: "Sandwich", cuisine_id: "304" },
    { cuisine_name: "Seafood", cuisine_id: "83" },
    { cuisine_name: "Soul Food", cuisine_id: "461" },
    { cuisine_name: "Southern", cuisine_id: "471" },
    { cuisine_name: "Southwestern", cuisine_id: "966" },
    { cuisine_name: "Spanish", cuisine_id: "89" },
    { cuisine_name: "Steak", cuisine_id: "141" },
    { cuisine_name: "Sushi", cuisine_id: "177" },
    { cuisine_name: "Swedish", cuisine_id: "211" },
    { cuisine_name: "Taco", cuisine_id: "997" },
    { cuisine_name: "Taiwanese", cuisine_id: "190" },
    { cuisine_name: "Tapas", cuisine_id: "179" },
    { cuisine_name: "Tea", cuisine_id: "163" },
    { cuisine_name: "Tex-Mex", cuisine_id: "150" },
    { cuisine_name: "Thai", cuisine_id: "95" },
    { cuisine_name: "Turkish", cuisine_id: "142" },
    { cuisine_name: "Vegetarian", cuisine_id: "308" },
    { cuisine_name: "Venezuelan", cuisine_id: "641" },
    { cuisine_name: "Vietnamese", cuisine_id: "99" }
];


//create arrays to store restaurant information and user searches
let userRestSearch = [];
let cuisineDropDownID = [];
let cuisineDropDownName = [];
let restaurantList = [];
let searches = [];
let lists = [];

//hide results of search before searching
let resultsEl = document.querySelector(".searchResults");
resultsEl.hidden = "true";


//get element to populate the food category list
let cuisineListEl = document.querySelector(".foodSelect")


//populate the food category list
for (i = 0; i < cuisine.length; i++) {
    let opt = document.createElement('option');
    opt.className = "formVal";

    // create text node to add to option element (opt)
    opt.appendChild(document.createTextNode(cuisine[i].cuisine_name));

    // set value property of opt
    opt.value = cuisine[i].cuisine_id;

    // add opt to end of select box (sel)
    cuisineListEl.appendChild(opt);
}




function handleSearchFormSubmit(event) {
    event.preventDefault();


    let searchInputVal = document.querySelector(".searchCity").value;
    let dropInputVal = document.querySelector(".foodSelect").value;
    userRestSearch.push(searchInputVal);
    cuisineDropDownID.push(dropInputVal);


    restaurantURL = "https://developers.zomato.com/api/v2.1/cities?q=" + searchInputVal


    fetch(restaurantURL, {
        headers: { "user-key": "6c1c69e843bf3372eb5e6a5fae766fcf" }
    })

        .then(function (resp) {
            // Convert data to json
            return resp.json();
        })
        .then(function (data) {
            let cityid = data.location_suggestions[0].id;
            cuisineSearch(dropInputVal, cityid);
        })
        .catch(function () {

            swal("Oops!", "Something went wrong with your search! Try again", "error");
            return;
        })

}

function cuisineSearch(dropInputVal, cityid) {
    restaurantTwoURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityid + "&entity_type=city&cuisines=" + dropInputVal;

    fetch(restaurantTwoURL, {
        headers: { "user-key": "6c1c69e843bf3372eb5e6a5fae766fcf" }
    })

        .then(function (resp) {
            return resp.json();
        })

        .then(function (data) {
            console.log(data);

            let restaurantSearch = [];
            for (i = 0; i < data.restaurants.length; i++) {

                let restNames = data.restaurants[i].restaurant.name;
                let restLong = data.restaurants[i].restaurant.location.longitude;
                let restLat = data.restaurants[i].restaurant.location.latitude;
                let restImg = data.restaurants[i].restaurant.thumb;
                let restUrl = data.restaurants[i].restaurant.url;
                let restMenu = data.restaurants[i].restaurant.menu_url;
                let restCuisine = data.restaurants[i].restaurant.cuisines;
                let restAddress = data.restaurants[i].restaurant.location.address;
                restaurantSearch.push({
                    restNames,
                    restLong,
                    restLat,
                    restImg,
                    restUrl,
                    restMenu,
                    restCuisine,
                    restAddress
                })

            }

            searches.push(restaurantSearch);
            window.localStorage.setItem("restaurant_search", JSON.stringify(searches));
            restList();

        })
        .catch(function () {
            swal("Oops!", "Something went wrong with your search! Try again", "error");
            return;
        });


}

function restList() {
    resultsEl.hidden = false;
    let localData = JSON.parse(localStorage.getItem("restaurant_search"))
    console.log("d8a", localData)
    document.querySelector(".results").innerHTML = ""

    for (i = 0; i < (localData[localData.length - 1].length); i++) {

        let restNameEl = document.createElement("div");

        restNameEl.className = ("card restResults");

        let cardContent = ("<header class='card-header restResultsHeader'><p class='card-header-title restResultsTitle'>" +
            localData[(localData.length - 1)][i].restNames + 
            "</p><button class='button listButton'>Add to List</button></header>" +
            "<div class='card-content'> <div class='media'><div class='media-left'><figure class='image is-48x48'><img src=" + 
            localData[(localData.length - 1)][i].restImg +
            "></figure></div><div class='content'>" +
            "<p>" + localData[(localData.length - 1)][i].restAddress + 
            "</p>" + "<p>" + 
            localData[(localData.length - 1)][i].restCuisine + 
            "</p></div></div>"
        )

        restNameEl.innerHTML = cardContent;
        document.querySelector(".results").append(restNameEl);


    };




    $(".listButton").on("click", function (event) {
     

        let restName = ($(this).siblings(".restResultsTitle").text())

        swal(
            {
                title: "Add to List!",
                text: "Add to an existing list or create a new one",
                content: "input",
                buttons: {

                    Add: {
                        text: "Add",
                        confirm: true,

                    },
                    Close: {
                        text: "Close",
                        closeModal: true
                    }
                }
            })
       
            let localList = localStorage.getItem("list_names")
            console.log("first",localList)
        
        if (localList != null) {

            
            let listNames = JSON.parse(localList)
            lists = listNames
            listNames.forEach(function (item) {
                console.log("second",localList)
                let savedList = document.createElement("button")
                savedList.className = "button is-fullwidth userList";
                savedList.innerHTML = item.listName;
                $(".swal-text").append(savedList);})
    
            $(".swal-button--Add").on("click", function () {
                console.log("third",localList)
                listName = document.querySelector(".swal-content__input").value;
                lists.push({ listName, restName });
                localStorage.setItem("list_names", JSON.stringify(lists));

            })

            $(".userList").on("click", function () {
                console.log("fourth",localList)
                listName = ($(this)[0].childNodes[0].data);
                lists.push({ listName, restName });
                localStorage.setItem("list_names", JSON.stringify(lists));
            })
        }
        else {
            $(".swal-button--Add").on("click", function () {
                console.log("else",localList)
                listName = document.querySelector(".swal-content__input").value;
                lists.push({ listName, restName });
                localStorage.setItem("list_names", JSON.stringify(lists));
                let savedList = document.createElement("button")
                savedList.className = "button is-fullwidth userList";
                savedList.innerHTML = listName;
                $(".swal-text").append(savedList);
                localStorage.setItem("list_names", JSON.stringify(lists));


            })

        }

    })
}





document.querySelector(".submit").addEventListener('click', handleSearchFormSubmit);

