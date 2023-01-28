const hamburguer = document.getElementById("navbar__link");
const hamburguer2 = document.getElementById("navbar__links");
const navbarHamburguer = document.getElementById("close__hamburguer");
const closeNavbar = document.getElementById("close__logo");

hamburguer.addEventListener("click", () => {
  hamburguer2.style.display = "block";
  navbarHamburguer.style.display = "none";
  closeNavbar.style.display = "block";
});

closeNavbar.addEventListener("click", () => {
  console.log("hola");
  hamburguer2.style.display = "none";
  
  
});


const filterLancha = document.getElementById("#check__lancha");
const filterId = document.getElementById("#card__id");

filterLancha.addEventListener("click",() => {
  filterId.style.display = "none";

  console.log("Hola",filterId);
});
