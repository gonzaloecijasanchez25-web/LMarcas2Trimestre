const calculadora = document.querySelector('.calculadora');
const teclas = calculadora.querySelector('.teclas__calculadora');
const pantalla = document.querySelector('.pantalla__calculadora');

teclas.addEventListener('click', evento => {
    if (evento.target.matches('button')) {
        const tecla = evento.target;
        const accion = tecla.dataset.accion;
        const contenidoTecla = tecla.textContent;
        const numeroPantalla = pantalla.textContent;
        const tipoTeclaAnterior = calculadora.dataset.tipoTeclaAnterior;

        Array.from(tecla.parentNode.children)
            .forEach(t => t.classList.remove('is-depressed'));

        if (!accion) {
            if (numeroPantalla === '0' || tipoTeclaAnterior === 'operador') {
                pantalla.textContent = contenidoTecla;
            } else {
                pantalla.textContent = numeroPantalla + contenidoTecla;
            }
            calculadora.dataset.tipoTeclaAnterior = 'numero';
        }

        if (accion === 'decimal') {
            if (!numeroPantalla.includes('.')) {
                pantalla.textContent = numeroPantalla + '.';
            } else if (tipoTeclaAnterior === 'operador') {
                pantalla.textContent = '0.';
            }
            calculadora.dataset.tipoTeclaAnterior = 'decimal';
        }

        if (accion === 'sumar' || accion === 'restar' ||
            accion === 'multiplicar' || accion === 'dividir') {

            tecla.classList.add('is-depressed');

            calculadora.dataset.primerValor = numeroPantalla;
            calculadora.dataset.operador = accion;
            calculadora.dataset.tipoTeclaAnterior = 'operador';
        }

        if (accion === 'limpiar') {
            calculadora.dataset.primerValor = '';
            calculadora.dataset.operador = '';
            calculadora.dataset.tipoTeclaAnterior = '';
            pantalla.textContent = '0';
        }

        if (accion === 'calcular') {
            const primerValor = calculadora.dataset.primerValor;
            const operador = calculadora.dataset.operador;
            const segundoValor = numeroPantalla;

            if (primerValor && operador) {
                pantalla.textContent = calcular(primerValor, operador, segundoValor);
            }
            calculadora.dataset.tipoTeclaAnterior = 'calcular';
        }
    }
});

const calcular = (valor1, operador, valor2) => {
    let resultado = '';

    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);

    if (operador === 'sumar') {
        resultado = numero1 + numero2;
    } else if (operador === 'restar') {
        resultado = numero1 - numero2;
    } else if (operador === 'multiplicar') {
        resultado = numero1 * numero2;
    } else if (operador === 'dividir') {
        resultado = numero1 / numero2;
    }

    return resultado;
};