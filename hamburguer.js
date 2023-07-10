const hamburguer = document.getElementById("#navbar__link");
const navbarHamburguer = document.getElementById("#close__hamburguer");
const closeNavbar = document.getElementById("#close__logo");
const hamburguer2 = document.getElementById("#navbar__links");

hamburguer.addEventListener("click", () => {
  navbarHamburguer.style.display ="none";
  closeNavbar.style.display ="block";
  hamburguer2.style.display="block";
  hamburguer.style.display="none";
});


closeNavbar.addEventListener("click", () => {
  hamburguer2.style.display="none";
  closeNavbar.style.display ="none";
  navbarHamburguer.style.display ="block";
  hamburguer.style.display="block";
  
});


var carousel = document.querySelector('.carousel');
var carouselInner = document.querySelector('.carousel-inner');
var carouselItems = document.querySelectorAll('.carousel-item');
var currentIndex = 0;
var totalItems = carouselItems.length;

function showSlide(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Cambia automáticamente las imágenes cada 3 segundos

// Eventos para los controles (opcional)
var nextButton = document.querySelector('.next-button');
var prevButton = document.querySelector('.prev-button');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

