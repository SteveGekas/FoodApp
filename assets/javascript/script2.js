
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


var restNames = [];
$(document).ready(function () {

    let localStor = localStorage.getItem("list_names")
    let listParse = JSON.parse(localStor);
    let localStorSearch = localStorage.getItem("restaurant_search")
    let listParseSearch = JSON.parse(localStorSearch)
    
    console.log(restNames)
    //let listParseName = listParse.restName

    console.log(listParseSearch)
    for (i = 0; i < listParse.length; i++) {
        let listCard = document.createElement("div");
        listCard.className = "card listPageCard";
        let listName = document.createElement("div");
        listName.className = "card-header";
        listName.innerHTML = listParse[i];
        listCard.append(listName);
        $(".restList").append(listCard);

    }
    
    for (i = 0; i < (listParseSearch.length) ; i++){
    var intersections = listParse.filter(e => listParseSearch[i][i].restNames.indexOf(e) !== -1);
    console.log(intersections)}
})
  /* for (i = 0; i < listParse.length; i++) { restNames.push(listParse[i].restName) }
    console.log(restNames)*/
 /*var nameEq =(listParseSearch[(listParseSearch.length - 1)].restNames) === (listParse[i])
    for (i = 0; i < listParseSearch[listParseSearch.length - 1].length; i++) {
        if ((listParseSearch[(listParseSearch.length - 1)].restNames) === (listParse[i])) {
            let newDiv = document.createElement('div');
            newDiv.className = "card-content";
            newDiv.innerHTML = $(this).nameEq.restUrl
            $(".card-header").append(newDiv);

        }
        else { console.log(listParse[0]); 
        console.log(listParseSearch[(listParseSearch.length - 1)][0].restNames)}

    }*/



/*function getParams() {
=======


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

//console.log(getValue());*/
