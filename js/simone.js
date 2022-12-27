$(document).ready(function () {
    let typed = new Typed('#typed', {
        strings: ['I am Simone olivia.', 'I am Dseginer.', 'I am Photographer', 'I am Developer'],
        typeSpeed: 200,
        loop:true
    });
    let aboutTop = $("#about").offset().top
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
    
})