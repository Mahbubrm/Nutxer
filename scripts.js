let mobile_icon = document.getElementById("mobile_icon");
let main_manu = document.getElementById("main_manu");

mobile_icon.addEventListener("click",()=>{
    main_manu.classList.toggle('hidden');
});

let btn_para = document.getElementById("btn_para");
let para = document.getElementById("para");

btn_para.addEventListener("click",()=>{
  para.classList.toggle('hidden');
});

// JAVASCRIPT CODE
      var swiper = new Swiper(".default-carousel", {
      loop: true,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      breakpoints: {
        1920: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        550: {
            slidesPerView: 1,
            spaceBetween: 0
        }
      }
      });

      var swiper = new Swiper(".multiple-slide-carousel", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: ".multiple-slide-carousel .swiper-button-next",
          prevEl: ".multiple-slide-carousel .swiper-button-prev",
        },
        breakpoints: {
         1920: {
             slidesPerView: 1,
             spaceBetween: 30
         },
         1028: {
             slidesPerView: 2,
             spaceBetween: 30
         },
         990: {
             slidesPerView: 1,
             spaceBetween: 0
         }
       }
      });

      // blog carousel 
  
      var swiper2 = new Swiper(".centered-slide-carousel2", {
       centeredSlides: true,
       paginationClickable: true,
       loop: true,
       spaceBetween: 30,
       slideToClickedSlide: true,
       pagination: {
         el: ".centered-slide-carousel2 .swiper-pagination",
         clickable: true,
       },
       breakpoints: {
         1920: {
           slidesPerView: 4,
           spaceBetween: 30
         },
         1028: {
           slidesPerView: 2,
           spaceBetween: 10
         },
         990: {
           slidesPerView: 1,
           spaceBetween: 0
         }
       }
      });  
    



// var swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// var swiper = new Swiper(".mySwiper", {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       freeMode: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });

//     var swiper = new Swiper(".centered-slide-carousel", {
//       // centeredSlides: true,
//       paginationClickable: true,
//       loop: true,
//       mousewheelControl: true,
//       mousewheel: {
//         releaseOnEdges: true,
//       },
//       spaceBetween: 30,
//       grabCursor: true,
//       slideToClickedSlide: true,
//       pagination: {
//         el: ".centered-slide-carousel .swiper-pagination",
//         clickable: true,
//       },
//       breakpoints: {
//         1920: {
//           slidesPerView: 4,
//           spaceBetween: 30
//         },
//         1028: {
//           slidesPerView: 2,
//           spaceBetween: 10
//         },
//         450: {
//           slidesPerView: 1,
//           spaceBetween: 10
//         }
//       }
//      });