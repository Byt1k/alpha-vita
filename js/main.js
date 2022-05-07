$('.mainSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ]
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
    nav: true,
    dots: false,
    responsive: {
        1200: {
            items: 4
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
    nav: true,
    dots: false,
    responsive: {
        1200: {
            items: 4
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


