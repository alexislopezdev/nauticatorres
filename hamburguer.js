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

