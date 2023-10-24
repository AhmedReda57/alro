let colorsLi = document.querySelectorAll('.color-right ul li');
let mColor = localStorage.getItem("color-option");
let aboutOffset = $('#about').offset().top;


//loading bage

$(document).ready(function () {

    $('.loading-page .spinner').fadeOut(1000, function () { 
        $('.loading-page').fadeOut(1000 , function () {
            $('.loading-page').remove();
            $('body').css('overflow', 'auto');
        })
     })

})

// scrolling to section

$("a[href^='#']").click(function (e) {
    let linkhref = $(e.target).attr('href');
    let sectionOffset = $(linkhref).offset().top;
    $('html,body').animate({scrollTop: sectionOffset}, 1000)
})

// click on arrow to go to about section
$('.arrow').click(function () {
    $('html,body').animate({scrollTop: aboutOffset}, 500)
})

// type script

var typed = new Typed('.typeme', {
    strings: ["Freelancer.", "Devolpment."],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });

// Switch Colors
if(mColor !== null){
    document.documentElement.style.setProperty('--mainColor', localStorage.getItem("color-option"));
}
colorsLi.forEach(li => {

    li.addEventListener('click', function (e) {

        document.documentElement.style.setProperty('--mainColor', e.target.dataset.color);
        localStorage.setItem("color-option", e.target.dataset.color);

    })
    
})

// Toggle Color Box

let widthBox = $('.color-right').innerWidth();

$(document).ready(function () {
    $('.color').css('left', -widthBox)
})
$('.fa-gear').click(function () {

    if($('.color').css('left') == '0px') {
        $('.color').animate({left:`-${widthBox}`} , 1000)
    } else {
        $('.color').animate({left:`0`} , 1000)
    }

})


// Change Color Of Navbar

$(window).scroll(function () {

    let wScroll = $(window).scrollTop();

    if(wScroll > aboutOffset - 50 ) {

        $('#main-nav').css('backgroundColor', '#fff');
        $('.scroll').fadeIn(1000)

    }else{

        $('#main-nav').css('backgroundColor', '#ddd');
        $('.scroll').fadeOut(1000)

    }

})

// scrolling to top 

$('.scroll').click(function () {
    $('html,body').animate({scrollTop: 0}, 500)
})