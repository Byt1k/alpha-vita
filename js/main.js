$('.mainSlider').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    items: 1,
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ],
    responsive: {
        0: {
            nav: false
        },
        992: {
            nav: true
        }
    }

})

$('.first-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1
})

$('.second-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1
})

$('.popularRow1').owlCarousel({
    loop: true,
    margin: 23,
    dots: false,
    responsive: {
        1200: {
            items: 4
        },
        992: {
            nav: true
        },
        768: {
            items: 3
        },
        0: {
            nav: false
        }
    },
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ]
})

$('.popularRow2').owlCarousel({
    loop: true,
    margin: 23,
    dots: false,
    responsive: {
        1200: {
            items: 4
        },
        992: {
            nav: true
        },
        768: {
            items: 3
        },
        0: {
            nav: false
        }
        
    },
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ]
})

$('.third-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1
})


