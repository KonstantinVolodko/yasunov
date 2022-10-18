document.addEventListener("DOMContentLoaded", () => {


//= components/


if (window.matchMedia("(min-width: 780px)").matches) {
    let header = $('.header'),
		scrollPrev = 0;

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();
    
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('hide11');
        } else {
            header.removeClass('hide11');
        }
        scrollPrev = scrolled;
    });
}




let swiper = new Swiper(".mySwiper", {

    loop: true,
    autoplay: true,
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
    autoplay: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },

    navigation: {
        nextEl: ".arrowRight",
        prevEl: ".arrowLeft",
    },

    breakpoints: {
        860: {
            slidesPerView: 3,
        },

    }
}) 


function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
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
let countryNumber2 = document.querySelectorAll('.country')
let geography_item = document.querySelectorAll('.geography_item')
let showCountry = document.querySelector('.showCountry')

geography_item.forEach((e, i) => {
    e.dataset.number = i
    e.addEventListener('mouseenter', togglemenu)
    e.addEventListener('mouseleave', togglemenu)
})
function togglemenu() {

    if (window.matchMedia("(max-width: 850px)").matches) {
        countryNumber[event.target.dataset.number].classList.toggle('countryNumber__active')
    }else {
            let elem = document.createElement('div')
            elem.innerHTML = `${countryNumber2[event.target.dataset.number].innerHTML}`
            elem.classList.add('ident')
            showCountry.appendChild(elem)


            let len = document.querySelectorAll('.ident')
            if (len.length > 1) {
                showCountry.removeChild(len[0])
            }
    }
    
    
}

var modal = document.getElementById("myModal2");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
let okBtn = document.querySelector('.okBtn')

let declineBtn = document.querySelector('.declineBtn')


okBtn.onclick = function() {
    modal.style.display = "none";
  }

  declineBtn.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function() {
    modal.style.display = "block";
  };

})