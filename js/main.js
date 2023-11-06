//Librería animación 
AOS.init();

// Detectar el evento de scroll
window.addEventListener('scroll', function () {
  var header = document.getElementById('header');

  // Cuando el usuario hace scroll, verifica la posición del scroll
  if (window.scrollY > 50) {
      header.classList.add('white');
  } else {
      header.classList.remove('white'); 
  }
});

//Sidemenu
const menuIcon = document.querySelector(".bar-menu");
const sideMenu = document.querySelector(".sidemenu");
const closeMenu = document.querySelector(".btn-close");


menuIcon.addEventListener("click", () => {
    sideMenu.classList.add("open");
});

closeIcon.addEventListener("click", ()=>{
  sideMenu.classList.remove("open");
});


//swiper

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});