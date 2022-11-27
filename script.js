$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20 ){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");  
        }
    });
    //toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu ').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer"],
        typeSpeed: 100,
        backspeed :60,
        loop: true

    });
     // typing animation script
     var typed = new Typed(".typing-2", {
        strings: ["Developer","Youtuber"],
        typeSpeed: 100,
        backspeed :60,
        loop: true

    });

    // owl carousel script
    $('.carousel').owlCarousel({
         margin:20,
         loop: true,
         autoplayTimeOut: 2000,
         autoplatHoverPause: true,
         responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
           100:{
                items: 3,
                nav: false
            }
         }

    });
});
