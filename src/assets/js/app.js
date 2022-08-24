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

})











