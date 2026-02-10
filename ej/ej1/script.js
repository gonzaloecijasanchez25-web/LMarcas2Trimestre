/* 
  Este archivo controla la interacción de la página:
  - Carrusel automático (cambia fotos solo)
  - Botones que cambian texto/estilo
  - alert/confirm/prompt
  - Lista en consola
  - Hora actual
*/

/* =========================
   1) CARRUSEL DE IMÁGENES
   ========================= */

// Array con los nombres de las imágenes (tienen que existir en la carpeta)
const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg"];

// Índice para saber qué imagen toca ahora
let indice = 0;

// Selecciono el <img> del carrusel por su id
let imgCarrusel = document.getElementById("imgCarrusel");

// Función: pasa a la siguiente imagen
function pasarImagen() {
  indice = indice + 1;

  // Si me paso del final, vuelvo al inicio
  if (indice >= imagenes.length) {
    indice = 0;
  }

  // Cambio la imagen que se ve
  imgCarrusel.src = imagenes[indice];

  // Cambio también el texto alternativo (alt)
  imgCarrusel.alt = "Perrito " + (indice + 1);
}

/*
  Esto repite la función cada X milisegundos (2 segundos).
  Es lo que hace que el carrusel vaya “automático”.
*/
setInterval(pasarImagen, 2000);


/* =========================
   2) CAMBIAR TEXTO
   ========================= */

let mensaje = document.getElementById("mensaje");
let btnCambiarTexto = document.getElementById("btnCambiarTexto");

// Función: cambia el texto del párrafo
function cambiarTexto() {
  mensaje.textContent = "El perrito ha visto una pelota. Modo turbo activado.";
}

// Cuando hago click en el botón, se ejecuta la función
btnCambiarTexto.addEventListener("click", cambiarTexto);


/* =========================
   3) CAMBIAR ESTILOS
   ========================= */

let textoColor = document.getElementById("textoColor");
let btnCambiarEstilo = document.getElementById("btnCambiarEstilo");

// Función: cambia el estilo del texto usando style
function cambiarEstilo() {
  textoColor.style.color = "red";
  textoColor.style.fontSize = "20px";
  textoColor.style.fontWeight = "bold";
}

btnCambiarEstilo.addEventListener("click", cambiarEstilo);


/* =========================
   4) INTERACCIÓN
   ========================= */

let btnAlert = document.getElementById("btnAlert");
let btnConfirm = document.getElementById("btnConfirm");
let btnPrompt = document.getElementById("btnPrompt");
let resultadoInteraccion = document.getElementById("resultadoInteraccion");

// alert: muestra un mensaje
function usarAlert() {
  alert("¡Guau! Bienvenido/a a la galería 🐾");
}

// confirm: devuelve true (Aceptar) o false (Cancelar)
function usarConfirm() {
  let respuesta = confirm("¿Te gustan los perritos?");
  if (respuesta) {
    resultadoInteraccion.textContent = "Respuesta: Sí ✅";
  } else {
    resultadoInteraccion.textContent = "Respuesta: No ❌ (me duele, pero lo respeto)";
  }
}

// prompt: pide un texto (si cancelas, devuelve null)
function usarPrompt() {
  let nombre = prompt("Ponle nombre al perrito:");
  if (nombre === null) {
    resultadoInteraccion.textContent = "No le has puesto nombre (por ahora).";
  } else {
    resultadoInteraccion.textContent = "Nombre elegido: " + nombre;
  }
}

btnAlert.addEventListener("click", usarAlert);
btnConfirm.addEventListener("click", usarConfirm);
btnPrompt.addEventListener("click", usarPrompt);


/* =========================
   5) LISTA + CONSOLA
   ========================= */

let btnVerLista = document.getElementById("btnVerLista");

// Array simple con “razas”
let razas = ["Labrador", "Beagle", "Pastor Alemán"];

// Función: recorre el array y lo imprime en consola
function mostrarListaEnConsola() {
  console.log("Razas:");
  for (let i = 0; i < razas.length; i++) {
    console.log("- " + razas[i]);
  }
}

btnVerLista.addEventListener("click", mostrarListaEnConsola);


/* =========================
   6) HORA ACTUAL
   ========================= */

let btnHora = document.getElementById("btnHora");
let horaActual = document.getElementById("horaActual");

// Función: muestra la hora actual (HH:MM)
function verHora() {
  let ahora = new Date();
  let h = ahora.getHours();
  let m = ahora.getMinutes();

  // Si minutos es 5, que se vea como 05
  if (m < 10) {
    m = "0" + m;
  }

  horaActual.textContent = "Hora actual: " + h + ":" + m;
}

btnHora.addEventListener("click", verHora);
