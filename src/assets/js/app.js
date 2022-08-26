document.addEventListener("DOMContentLoaded", () => {


//= components/


let swiper = new Swiper(".mySwiper", {

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


let productsSlider = new Swiper(".productsSlider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        1124: {
            slidesPerView: 3,
        },

        745: {
            slidesPerView: 2,
        },
    }
}) 


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}

let menuBtn = document.querySelector('.menuBtn')
let menu = document.querySelector('.menu')
let overlay = document.querySelector('.overlay')
let cross = document.querySelector('.cross')

menuBtn.addEventListener('click', e => {
    menu.classList.toggle('activeMenu')
    overlay.classList.toggle('overlayActive')
    disableScroll()
})

overlay.addEventListener('click', e => {
    menu.classList.toggle('activeMenu')
    overlay.classList.toggle('overlayActive')
    enableScroll()
})

cross.addEventListener('click', e => {
    menu.classList.toggle('activeMenu')
    overlay.classList.toggle('overlayActive')
    enableScroll()
})



let countryNumber = document.querySelectorAll('.countryNumber')
let geography_item = document.querySelectorAll('.geography_item')

geography_item.forEach((e, i) => {
    e.dataset.number = i
    e.addEventListener('mouseenter', togglemenu)
    e.addEventListener('mouseleave', togglemenu)
    // e.addEventListener('click', togglemenu)
})
function togglemenu() {
    countryNumber[event.target.dataset.number].classList.toggle('countryNumber__active')
}
})


// let countryNumber = document.querySelectorAll('.countryNumber')
// let geography_item = document.querySelectorAll('.geography_item')

// geography_item.forEach((e, i) => {
    

//     if (window.matchMedia("(min-width: 920px)").matches) {
//         e.addEventListener('mouseenter', () => {
//             togglemenu(i)
//         })
//         e.addEventListener('mouseleave', () => {
//             togglemenu(i)
//         })
//     }else if (window.matchMedia("(max-width: 920px)").matches) {
//         e.addEventListener('click', () => {
//             togglemenu(i)
//             let countryNumber__active = document.querySelectorAll('.countryNumber__active')
//             console.log(countryNumber__active.length)
//             console.log(countryNumber__active)
//         })
//     }
    
// })
// function togglemenu(i) {
//     countryNumber[i].classList.toggle('countryNumber__active')
// }
// })










