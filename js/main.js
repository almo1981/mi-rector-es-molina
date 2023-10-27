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

AOS.init();
