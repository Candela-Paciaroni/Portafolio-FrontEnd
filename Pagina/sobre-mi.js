/*------------------------SOBRE MI--------------------------*/
const openMenuBtn = document.querySelector(".sobre-mi");
const closeMenuBtn = document.querySelector(".boton-cerrar");
const info= document.querySelector(".container-mas-info");

function toggleMenu() {
  info.classList.toggle("activado");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

