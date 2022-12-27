let recipeList = [];
let navlinks = document.querySelectorAll(".nav-link");
for (let i = 0; i < navlinks.length; i++){
    navlinks[i].addEventListener('click', function (event) {
        let type = event.target.innerHTML;
        console.log(type)
        getRecipe(type)
    })
}
function getRecipe(recipetype="pizza") {
    let Http = new XMLHttpRequest();
    Http.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${recipetype}`);
    Http.send()
    Http.addEventListener('readystatechange', function () {
        if (Http.readyState == 4 && Http.status == 200) {
            recipeList = JSON.parse(Http.response).recipes
            display()
            // console.log(recipeList)
        }
    })
}

getRecipe()
function display() {
    let temp = "";
    recipeList.forEach((element) => {
        temp += `<div class="col-md-3 mb-3">
        <div class="item">
        <img class=" w-100 " src="${element.image_url}" >
        <h4>${element.title}</h4>
        <button class=" btn btn-outline-info"><h5 class="text-danger">${element.recipe_id}</h5></button>
        </div>
        </div>`
        
    })
    document.getElementById("rowData").innerHTML = temp;
}
