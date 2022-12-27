var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteURL");
var box;
if (localStorage.getItem("website") == null) {
    box = [];
}
else {
    var box = JSON.parse(localStorage.getItem("website"))
    displayWebsite(box);

}
function addWebsite() {
    if (validateName() && validateUrl()) {
        var website = {
            name: siteNameInput.value,
            URL: siteURLInput.value,
        }
        box.push(website);
        displayWebsite();
        localStorage.setItem("website", JSON.stringify(box));
        clearform();
    }
    else {
        alert("input required");
    }
}
function displayWebsite() {
    var cartoona = ``;
    for (var i = 0; i < box.length; i++) {
        cartoona += `<tr>
        <td><h2>${box[i].name}</h2></td>
        <td><a href="${box[i].URL}" class=" btn btn-primary "> visit </a>
        <button onclick="deleteWebsite(${i})" class=" btn btn-danger">delete</button></td>
        </tr>`
    }
    document.getElementById("divDisplay").innerHTML = cartoona;
}
function clearform() {
    siteNameInput.value = ""
    siteURLInput.value = "https://wa.me/+2"
}
function deleteWebsite(websiteIndex) {
    box.splice(websiteIndex, 1);
    localStorage.setItem("website", JSON.stringify(box));
    displayWebsite();
}
function validateName() {
    var regexName = /^[A-Za-z]{3,15}[0-9]?$/
    if (regexName.test(siteNameInput.value)) {
        return true;
    }
    else {
        return false
    }
}
function validateUrl() {
    var regexName = /^(ftp|http|https):\/\/[^ "]+$/
    if (regexName.test(siteURLInput.value)) {
        return true;
    }
    else {
        return false
    }
}

