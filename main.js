const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const closeNavBtn = document.querySelector("#close__nav-btn");

openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
});

closeNavBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //responsive breakpoints
  breakpoints:{
    //when window is >=600px
    400:{
      slidesPerView: 1,
    },
    600:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }
  }
});
