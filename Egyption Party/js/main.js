// $(".imgItem").click(function () {
//     let imgPath = $(this).attr("src")
//     $(".myImg").attr("src", imgPath)
// })

$(".iconCog").click(function () {
    let left = $(".outerBox").css("left");
    let innerwidth = $(".innerBox").outerWidth(true)
    $(".outerBox").animate({left: `${innerwidth}px`}, 1000)
})
$(".co").click(function () {
    let innerwidth = $(".innerBox").outerWidth(true)
    $(".outerBox").animate({ left: `0px` }, 1000)
})
$(document).ready(function () {
    $("#acc div:first").css("display", "block");
    $("#acc h3").click(function () {
        $(this).next().slideToggle(500);
        $("#acc div").not($(this).next()).slideUp(500);
    });
});


// count down
// Set the date we're counting down to
let countDownDate = new Date("1998,7,23 ").getTime();
// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s ";
    document.getElementById("days").innerHTML = days + " Days";
    document.getElementById("hours").innerHTML = hours + " hours";
    document.getElementById("minutes").innerHTML = minutes + " minutes";
    document.getElementById("seconds").innerHTML = seconds + " seconds";
}, 1000);


$(function () {
    let max = 100;
    $("textarea").keyup(function () {
        let length = $(this).val().length;
        let character = max - length;
        // console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        }
        else {
            $("#char").text(character);
        }
    });
});

$(".nav-link").click(function () {
    let href = $(this).attr("href");
    let moving = $(href).offser().top;
    $("html,body").animate({ scrollTop: moving}, 500)
})