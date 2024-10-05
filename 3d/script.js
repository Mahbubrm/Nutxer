var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var defaultcarousel = new Swiper('.defaultcarousel', {
  slidesPerView: 2,
  loop:true,
  spaceBetween: 0,
  // freeMode: true,
  breakpoints: {
    340: {
      slidesPerView: 'auto'
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});

 
// services one slider 
var swiperOne = new Swiper('.swiper-one', {
  slidesPerView: 2,
  grabCursor: true,
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    440: {
      slidesPerView: 'auto'
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// index slider2 
var slider2 = new Swiper('.slider2', {
  grabCursor: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// index 3 
var index = new Swiper('.index', {
  slidesPerView: 2,
  grabCursor: true,
  loop: true,
  spaceBetween: 0,
  breakpoints: {
    440: {
      slidesPerView: 'auto'
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
