const form = document.getElementById('recipeForm');
const output = document.getElementById('recipeOutput');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const time = document.getElementById('time').value;
    const ingredients = document.getElementById('ingredients').value.split('\n');
    const steps = document.getElementById('steps').value.split('\n');

    let recipeHTML = `
        <h2>${name}</h2>
        <p><strong>Tiempo de preparación:</strong> ${time} minutos</p>
        <h3>Ingredientes:</h3>
        <ul>
            ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <h3>Pasos:</h3>
        <ol>
            ${steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;

    output.innerHTML = recipeHTML;
});
