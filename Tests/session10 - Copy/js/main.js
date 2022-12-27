// let newsList = [];
// async function getNwes() {
//     let Data = await fetch("http://api.weatherapi.com/v1/forecast.json?key=dd0808df97254d7680e01232221501&q=London&days=1&aqi=no&alerts=no")
//     let response = await Data.json()
//     console.log(response);
//     newsList = response
// }
// getNwes()

class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    welcome() {
        console.log("welcom")
    }
}
class Doctor extends person {
    constructor(name, age, gender, deprt) {
        super(name, age, gender)
        this.deprt = deprt
    }
    helloDoc() {
        console.log("Hello")
    }
}
let DocAhmed = new Doctor("ahmed", 30, "male", "gender")
console.log(DocAhmed)