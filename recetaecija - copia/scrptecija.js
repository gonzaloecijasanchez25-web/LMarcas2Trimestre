const form = document.getElementById('recipeForm');
const output = document.getElementById('recipeOutput');

/* ---------- GENERADOR DE RECETAS ---------- */

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const time = document.getElementById('time').value;
    const ingredients = document.getElementById('ingredients').value.split('\n');
    const steps = document.getElementById('steps').value.split('\n');

    const recipeHTML = `
        <h2>${name}</h2>
        <p><strong>Tiempo de preparación:</strong> ${time} minutos</p>

        <h3>Ingredientes</h3>
        <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>

        <h3>Pasos</h3>
        <ol>
            ${steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;

    output.innerHTML = recipeHTML;
});

/* ---------- CARRUSEL ---------- */

const images = document.querySelectorAll('.carousel img');
let index = 0;

function showImage(i) {
    images.forEach(img => img.classList.remove('active'));
    images[i].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
}, 5000);

/* ---------- ESTILOS DE RECETA ---------- */

function changeTextColor() {
    output.style.color =
        output.style.color === 'black' ? 'darkred' : 'black';
}

function changeTextSize() {
    output.style.fontSize =
        output.style.fontSize === '20px' ? '16px' : '20px';
}

function changeBackground() {
    output.style.backgroundColor =
        output.style.backgroundColor === 'lightyellow' ? 'white' : 'lightyellow';
}
