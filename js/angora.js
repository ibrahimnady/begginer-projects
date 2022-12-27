let aboutTop = $("#ABOUT").offset().top
console.log(aboutTop);
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop()
    if (scrollTop >= aboutTop) {
        $(".navbar").css("background-color", "black")
    }
    else {
        $(".navbar").css("background-color", "transparent")
    }
})