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
