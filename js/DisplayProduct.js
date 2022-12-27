var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer")
var innerBox = document.getElementById("innerBox")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var currentIndex = 0 
for (var i = 0; i < imgs.length; i++){
    imgs[i].addEventListener("click", function (event){
        boxContainer.style.display = "flex";
        currentIndex = imgs.indexOf(event.target)
        var imgSrc = event.target.getAtribute("src")
        innerBox.style.backgroundImage = `url(${imgSrc})`
    })
}
close.addEventListener("click", closeElement)
function closeElement() {
    boxContainer.style.display = "none"

}
next.addEventListener("click", nextElement)
prev.addEventListener("click", prevElement)
function nextElement() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0

    }
    var imgSrc = imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage = `url(${imgSrc})`
}
function prevElement() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1

    }
    var imgSrc = imgs[currentIndex].getAttribute("src")
    innerBox.style.backgroundImage = `url(${imgSrc})`
}
document.addEventListener("keyup", function (event){
    if (event.code == "ArrowRight") {
        nextElement()
    }
    else if (event.code == "Arrowleft") {
        prevElement()
    }
    else if (event.code) {
        closeElement()
    }
})