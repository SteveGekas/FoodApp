// function restList() {
//     resultsEl.hidden = false;restaurant_sea
//     let localData = JSON.parse(localStorage.getItem("list_names"))
//     console.log("d8a", localData)
//     document.querySelector(".results").innerHTML = ""

//     for (i = 0; i < (localData[localData.length - 1].length); i++) {
//         let restNameEl = document.createElement("div");
//         restNameEl.className = ("card listOfRest");
//         let cardContent = ("<header class='card-header listOfRestHeader'><p class='card-header-title listOfRestTitle'>" +
//             localData[(localData.length - 1)][i].restNames + "</p><button class='button listButton'>Add to List</button></header>" +
//             "<div class='card-content'> <div class='media'><div class='media-center'><figure class='image is-48x48'><img src=" + localData[(localData.length - 1)][i].restImg +
//             "></figure></div><div class='content'>" +
//             "<p>" + localData[(localData.length - 1)][i].restNames + "</p>" + "<a href = + " + localData[(localData.length - 1)][i].restUrl   + "</a></div></div>"
//         )

//         restNameEl.innerHTML = cardContent;
//         document.querySelector(".results").append(restNameEl);



//     };

// }



function getParams() {
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
    let searchParamsArr = document.location.search.split('&');

    // Get the query and format values
    let imageOfRest = searchParamsArr[4].split('=').pop();
    let nameOfRest = searchParamsArr[1].split('=').pop();
    let menuOfRest = searchParamsArr[6].split('=').pop();

    searchApi(imageOfRest, nameOfRest, menuOfRest);

}

function restNames() {
    let image = localStorage.getItem('list_names.restImg');
    let name = localStorage.getItem('list_names.restNames');
    let site = localStorage.getItem('list_names.restUrl');
    //let restNames = JSON.parse(localStorage.getItem("list_names"))

    document.getElementById('list_names.restImg').innerHTML = image;
    document.getElementById('list_names.restNames').innerHTML = name;
    document.getElementById('list_names.restUrl').innerHTML = site;

    localStorage.getItem("restNames", JSON.stringify(list_names));

    document.querySelector("#restaurant-image").append[("list_names.restImg").value];
    document.querySelector("#restaurant-name").append[("list_names.restNames").value];
    document.querySelector("#restaurant-url").append[("list_names.restUrl").value];
    //console.log(restNames)

    //console.log(localStorage)
}
function getValue() {
	return localStorage.getItem('restNmes');  

}

//console.log(getValue());
