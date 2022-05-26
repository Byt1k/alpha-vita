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


$('.certificates-wrapper').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    margin: 0,
    dots: false,
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ],
    responsive:{
        1200: {
            items: 5,
            nav: true
        },
        992: {
            items: 4,
            nav: false
        },
        768: {
            nav: false,
            items: 3
        },
        0: {
            nav: false,
            loop: false
        }
    }
});


const certificatesZoomBtns = document.querySelectorAll('.certificates-wrapper .item .zoom');

certificatesZoomBtns.forEach((btn) => {
    btn.onclick = (e) => {
        const imgSrc = e.target.parentNode.parentNode.querySelector('img').src;
        let overlay = document.createElement('div')
        overlay.className = 'overlay';
        overlay.innerHTML = '<div class="magnify"><img src="'+imgSrc+'"><div class="close-popup"><i></i></div></div>';
        
        const body = document.querySelector('body');
        body.append(overlay);
        body.style.overflowY = 'hidden';
        
        body.onclick = (e) => {
            if (e.target !== (document.querySelector('.overlay .magnify img')) && 
                e.target.className !== 'zoom' &&
                e.target.className !== 'increase'
            ) {
                overlay.remove();
                body.style.overflowY = 'visible';
            }
        }

    }
})

$(window).resize(function(){
    if($(window).width() > 768){
        $('.certificates-wrapper').trigger('destroy.owl.carousel');
    } else {
        
    }
});



