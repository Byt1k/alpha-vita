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

if (btnMenuOpen && mobileMenu) {
    btnMenuOpen.addEventListener('click', () => {
        mobileMenu.classList.add('active')
    })
}


if (btnMenuClose && mobileMenu) {
    btnMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active')
    })
}


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



$('.product-photos-slider').owlCarousel({
    loop: false,
    margin: 10,
    dots: true,
    items: 1
})


// Cчётчик в карточке товара

const productCounter = document.querySelectorAll('.counter');

productCounter.forEach(counter => {
    const productIncrement = counter.querySelector('.plus');
    const productDecrement = counter.querySelector('.minus');
    let productCount = counter.querySelector('.value');

    productDecrement.addEventListener('click', () => {
        if (+productCount.innerHTML > 1) {
            productCount.innerHTML = +productCount.innerHTML - 1;
        }
    })

    productIncrement.addEventListener('click', () => {
        productCount.innerHTML = +productCount.innerHTML + 1;
        
    })
})


// Зум фото товара 

// const productPhotosZoom = document.querySelector('.product-item .photos .zoom')

// productPhotosZoom.addEventListener('click', (e) => {
//     const photosContainer = e.target.closest('.photos');
//     photosContainer.classList.add('active');
//     const photosSlider = photosContainer.querySelector('.product-photos-slider');
//     photosSlider.className = 'owl-carousel owl-theme owl-loaded owl-drag product-photos-slider-active';

//     const body = document.querySelector('body');

//     body.style.overflowY = 'hidden';
        
    // body.onclick = (e) => {
    //     console.log(e.target);
    //     if (e.target !== productPhotosZoom 
    //         && e.target !== productPhotosZoom.querySelector('img') 
    //         && e.target !== photosContainer.querySelector('.product-photos-slider .owl-dots .owl-dot span') 
    //         // && e.target. !== '.product-photos-slider .zoom'
    //     ) {
    //         photosContainer.classList.remove('active');
    //         body.style.overflowY = 'visible';
    //     }
    // }
// })


const programsObj = {
    loop: true,
    margin: 15,
    dots: false,
    navText: [
        '<img src="img/carousel-prev.svg" alt="prev" />',
        '<img src="img/carousel-next.svg" alt="next" />'
    ],
    responsive: {
        0: {
            nav: false,
            items: 1.5
        },
        768: {
            nav: false,
        },
        992: {
            nav: false,
            items: 3
        },
        1200: {
            items: 4,
            nav: true
        }
    }

}

$('.catalogWrapper').owlCarousel(programsObj);
$('.catalogWrapper-1').owlCarousel(programsObj);
$('.catalogWrapper-2').owlCarousel(programsObj);
$('.catalogWrapper-3').owlCarousel(programsObj);


const adminBurger = document.querySelector('.admin-header .burger');
const adminSidebar = document.querySelector('.sidebar .menu');

console.log(adminBurger);

adminBurger.addEventListener('click', () => {
    adminSidebar.classList.toggle('active');
})