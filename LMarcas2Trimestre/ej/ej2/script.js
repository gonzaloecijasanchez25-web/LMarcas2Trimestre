/*
  EJERCICIO: Registro de paseos
  Practica: variables, funciones, DOM, eventos, arrays, if/else, switch, bucles, console.
*/

/* =========================
   1) DATOS (ARRAY)
   ========================= */

// Aquí guardo los paseos (cada paseo será un objeto con nombre, minutos y humor)
let paseos = [];

/* =========================
   2) DOM: coger elementos
   ========================= */

let inputNombre = document.getElementById("nombre");
let inputMinutos = document.getElementById("minutos");
let selectHumor = document.getElementById("humor");

let btnAgregar = document.getElementById("btnAgregar");
let btnResumen = document.getElementById("btnResumen");
let btnLimpiar = document.getElementById("btnLimpiar");

let estado = document.getElementById("estado");
let lista = document.getElementById("lista");
let resumen = document.getElementById("resumen");

/* =========================
   3) FUNCIONES (muy simples)
   ========================= */

/*
  Función: comprobar si los datos del “formulario” son válidos.
  - nombre no vacío
  - minutos tiene que ser número y > 0
*/
function datosValidos(nombre, minutos) {
  if (nombre === "") {
    return false;
  }

  // inputMinutos.value llega como texto, lo convertimos a número
  let num = parseInt(minutos);

  // isNaN significa “no es un número”
  if (isNaN(num) || num <= 0) {
    return false;
  }

  return true;
}

/*
  Función: crear un texto según el humor usando switch
*/
function textoHumor(humor) {
  switch (humor) {
    case "bien":
      return "✅ Ha ido genial";
    case "normal":
      return "😐 Paseo normalito";
    case "mal":
      return "❌ Paseo regulero";
    default:
      return "🤷 Sin datos";
  }
}

/*
  Función: pintar la lista de paseos en pantalla.
  - Usamos un bucle for para recorrer el array.
*/
function pintarLista() {
  // Si no hay paseos
  if (paseos.length === 0) {
    estado.textContent = "Aún no hay paseos registrados.";
    lista.innerHTML = "";
    return;
  }

  estado.textContent = "Paseos registrados: " + paseos.length;

  // Construimos HTML sencillo como texto
  let html = "";

  for (let i = 0; i < paseos.length; i++) {
    let p = paseos[i];
    html = html + "<p><strong>" + p.nombre + "</strong> - " + p.minutos + " min - " + textoHumor(p.humor) + "</p>";
  }

  // Metemos el HTML en el div
  lista.innerHTML = html;
}

/*
  Función: agregar paseo (usa lo anterior)
*/
function agregarPaseo() {
  let nombre = inputNombre.value;
  let minutos = inputMinutos.value;
  let humor = selectHumor.value;

  // Validación básica
  if (!datosValidos(nombre, minutos)) {
    alert("Revisa los datos: nombre y minutos válidos.");
    return;
  }

  // Creamos el objeto paseo
  let paseoNuevo = {
    nombre: nombre,
    minutos: parseInt(minutos),
    humor: humor
  };

  // Lo metemos en el array
  paseos.push(paseoNuevo);

  // Opcional: mostrar algo en consola (depuración)
  console.log("Paseo agregado:", paseoNuevo);

  // Limpiamos inputs (para el siguiente)
  inputNombre.value = "";
  inputMinutos.value = "";

  // Actualizamos pantalla
  pintarLista();
}

/*
  Función: hacer un resumen (total de minutos y media)
*/
function verResumen() {
  if (paseos.length === 0) {
    resumen.textContent = "No hay paseos para resumir.";
    return;
  }

  let total = 0;

  // Sumamos minutos
  for (let i = 0; i < paseos.length; i++) {
    total = total + paseos[i].minutos;
  }

  let media = total / paseos.length;

  // Mostramos resultado
  resumen.textContent = "Total minutos: " + total + " | Media: " + media;
}

/*
  Función: limpiar la lista
*/
function limpiarLista() {
  // Vaciar array
  paseos = [];

  // Reset de textos
  resumen.textContent = "Pulsa “Ver resumen”.";
  pintarLista();
}

/* =========================
   4) EVENTOS (click)
   ========================= */

btnAgregar.addEventListener("click", agregarPaseo);
btnResumen.addEventListener("click", verResumen);
btnLimpiar.addEventListener("click", limpiarLista);

/* Pintamos al cargar (por si acaso) */
pintarLista();
