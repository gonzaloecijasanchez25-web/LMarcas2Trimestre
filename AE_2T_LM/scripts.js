let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicatorsContainer = document.querySelector('.indicators');

slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.addEventListener('click', () => goToSlide(index));
  indicatorsContainer.appendChild(dot);
});
const indicators = document.querySelectorAll('.indicators div');

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIndex);
    indicators[index].classList.toggle('active', index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Inicializar
updateCarousel();

let tituloArticulo = document.getElementById("tituloArticulo");
let parrafoArticulo = document.getElementById("parrafoArticulo");
let autorFecha = document.getElementById("autorFecha");

let inputTitulo = document.getElementById("inputTitulo");
let inputTexto = document.getElementById("inputTexto");
let inputAutor = document.getElementById("inputAutor");
let inputFecha = document.getElementById("inputFecha");

let btnNuevoTexto = document.getElementById("btnNuevoTexto");

let selectColor = document.getElementById("selectColor");
let selectTam = document.getElementById("selectTam");

/*
  Esta función “envía” lo que escribes:
  - si falta título o opinión => alert
  - si está bien => lo pone arriba en el artículo
*/
function enviarOpinion() {
  let nuevoTitulo = inputTitulo.value;
  let nuevaOpinion = inputTexto.value;

  let nuevoAutor = inputAutor.value; // opcional
  let nuevaFecha = inputFecha.value; // opcional

  if (nuevoTitulo === "" || nuevaOpinion === "") {
    alert("Escribe un TÍTULO y una OPINIÓN antes de enviar.");
    return;
  }

  // Poner en pantalla
  tituloArticulo.textContent = nuevoTitulo;
  parrafoArticulo.textContent = nuevaOpinion;

  // Si autor/fecha no están, ponemos “por defecto”
  if (nuevoAutor === "") {
    nuevoAutor = "Anónimo";
  }
  if (nuevaFecha === "") {
    nuevaFecha = "sin fecha";
  }

  autorFecha.textContent = "Autor: " + nuevoAutor + " · Fecha: " + nuevaFecha;

  // Limpiar campos (opcional)
  inputTitulo.value = "";
  inputTexto.value = "";
  inputAutor.value = "";
  inputFecha.value = "";
}

// Click en botón = enviar
btnNuevoTexto.addEventListener("click", enviarOpinion);


/*
  Formato del texto (color y tamaño) con los desplegables
*/
function aplicarFormato() {
  parrafoArticulo.style.color = selectColor.value;
  parrafoArticulo.style.fontSize = selectTam.value;
}

selectColor.addEventListener("change", aplicarFormato);
selectTam.addEventListener("change", aplicarFormato);

// Aplicar al cargar
aplicarFormato();
