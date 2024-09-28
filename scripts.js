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

// Reviews slider 
var Reviews = new Swiper(".Reviews", {
  slidesPerView: 3,
  loop:true,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});