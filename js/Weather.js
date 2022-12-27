let searchButton = document.getElementById("search");


let locationName = {};
let forecast = [];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



async function getData() {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dd0808df97254d7680e01232221501&q=cairo&days=3&aqi=no&alerts=no`)
    let Data = await response.json()
    locationName = Data.location
    forecast = Data.forecast.forecastday
    Display()
}
getData()


function Display() {
    document.getElementById("location").innerHTML = locationName.name;
    let temp = "";
    forecast.forEach((element) => {
        let dateIndex = new Date(element.date).getDay();
        temp += `<div class="col-md-4 ">
    <div class="item bg-info">
    <h2 class="bg-danger p-2">${days[dateIndex]}</h2>
    <h3>${element.date}</h3>
    <img src="https:${element.day.condition.icon}">
    <h4>${element.day.condition.text}</h4>
    <p class="text-danger bg-black">temp C ${element.day.maxtemp_c}</p>
    <p class="text-danger bg-black"> temp F ${element.day.mintemp_c}</p>
    </div>
    </div>`
    })

    document.getElementById("forecast").innerHTML = temp;
}