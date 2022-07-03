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

$('.about-page__catalog').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    nav: false,
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
})


const adminBurger = document.querySelector('.admin-header .burger');
const adminSidebar = document.querySelector('.sidebar .menu');


if (adminBurger) {
    adminBurger.addEventListener('click', () => {
        adminSidebar.classList.toggle('active');
    })
}


const avaArr = document.querySelectorAll('.structure .ava');

avaArr.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.parentNode.querySelector('.info').classList.add('active')
    })
    item.addEventListener('mouseout', (e) => {
        e.target.parentNode.querySelector('.info').classList.remove('active')
    })
})


const structure = document.querySelector('.structure');

const structureZoomIn = document.querySelector('.my-structure .zoomIn')
const structureZoomOut = document.querySelector('.my-structure .zoomOut')

let scale = 1;

if (structureZoomIn) {
    structureZoomIn.addEventListener('click', () => {
        scale = scale + 0.5;
        structure.style.transform = `scale(${scale})`;
    })
}

if (structureZoomOut) {
    structureZoomOut.addEventListener('click', () => {
        scale = scale - 0.5;
        structure.style.transform = `scale(${scale})`;
    })
}


let menu = document.querySelector('.capabilities .menu')

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY + 200;
    
    if (window.scrollY >= 200) {
        menu.classList.add('fixed')
    } else {
        menu.classList.remove('fixed')
    }
    
    document.querySelectorAll('.capabilities-section').forEach((el, i) => {
        if (el.offsetTop  <= scrollDistance) {
            document.querySelectorAll('.capabilities .menu a').forEach(el => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            })
            document.querySelectorAll('.capabilities .menu li')[i].querySelector('a').classList.add('active');
        }
    })


})



// 
const ratingWrapperValue = +document.querySelector('.rating-wrapper .value');
let ratingValue;

if (ratingWrapperValue) {
    ratingValue = ratingWrapperValue.innerHTML.split('%')[0];
}
const ratingIcon = document.querySelector('.rating-wrapper .icon');

if (ratingIcon) {
    if (ratingValue < 49) {
        ratingIcon.classList.add('white')
    } else {
        ratingIcon.classList.remove('white')
    }
}

$(".progress-bar-1").loading();
$(".progress-bar-2").loading();


const charts = document.querySelectorAll('.level .diagrams .item');

charts.forEach(i => {
    const firstChart = i.querySelector('.first-chart');
    const secondChart = i.querySelector('.second-chart');

    const valueFirstChart = +i.querySelector('.first-chart > .value').innerHTML.split('%')[0];
    const valueSecondChart = +i.querySelector('.second-chart > .value').innerHTML.split('%')[0];
    

    if (valueFirstChart < 80) {
        firstChart.classList.add('color-value');
    } else {
        firstChart.classList.remove('color-value');
    }

    if (valueSecondChart < 40) {
        secondChart.classList.add('color-value');
    } else {
        secondChart.classList.remove('color-value');
    }
    
})
