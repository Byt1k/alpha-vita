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

const mainPageSliderOpts = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1
}

$('.first-slider').owlCarousel(mainPageSliderOpts)

$('.second-slider').owlCarousel(mainPageSliderOpts)

$('.third-slider').owlCarousel(mainPageSliderOpts)

const popularSliderOpts = {
    loop: true,
    margin: 23,
    responsive: {
        1200: {
            items: 4,
            nav: true,
            dots: false
        },
        992: {
            nav: true,
            dots: false
        },
        768: {
            items: 3,
            dots: false
        },
        0: {
            dots: true,
            nav: false,
            items: 1
        }
    },
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ]
}

$('.popularRow1').owlCarousel(popularSliderOpts)

$('.popularRow2').owlCarousel(popularSliderOpts)


// Мобильное меню

const mobileMenu = document.querySelector('.mobile-menu')
const btnMenuOpen = document.querySelector('.burger')
const btnMenuClose = document.querySelector('.mobile-menu .close')

btnMenuOpen.addEventListener('click', () => {
    mobileMenu.classList.add('active')
})


btnMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active')
})


