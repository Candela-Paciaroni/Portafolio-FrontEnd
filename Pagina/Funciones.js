const navMenu = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const contenedor = document.querySelector(".contenedor-responsive");
const fondo = document.querySelector("menu-fondo");

function toggleMenu() {
  navMenu.classList.toggle("menu_open");
  contenedor.classList.toggle("activado");
  fondo.classList.toggle("activo");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


/*const menu=document.querySelector(".nav-menu");

console.log(menu.className);

menu.className="menu_open";
*/
/*
const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("animado");
  });
  ham.classList.toggle("girar");
});
*/
