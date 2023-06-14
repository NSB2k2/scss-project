$('.course__carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2,
            margin:1
        },
        410:{
            items:2,
            margin:4
        },
        600:{
            items:3
        },
        1200:{
            items:4,
            margin:5
        }
    }
})
$('.viewing__carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:2,
            margin:1
        },
        400: {
            items: 2,
            margin: 5
        },
        600:{
            items:3
        },
        1000:{
            items:6,
            margin:5
        }
    }
})
$('.student__carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            padding:5
        },
        900:{
            items:2
        },
        1200:{
            items:3
        }
    }
})