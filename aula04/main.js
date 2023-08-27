'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')
const botaoEMultiplos = document.getElementById('botao-mostrar-multiplos')
const botaoOuMultiplos = document.getElementById('botao-mostrar-multiplos-ou')
const botaoAnterior = document.getElementById('botao-anterior')
const botaoAnteriorImpar = document.getElementById('botao-anterior-impar')
const botaoTriplo = document.getElementById('botao-triplo')
const botaoPrimo = document.getElementById('botao-primo')


function mostrarTodosNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-todos-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }

}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosImpares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-numeros-impares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 1) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarEMultiplos() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 && numeros[contador] % 4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarOuMultiplos() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-multiplos-ou')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 || numeros[contador] % 4 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarAnterior() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-anterior')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] - 1
        container.appendChild(novoSpan)
    }
}

function mostrarAnteriorImpar() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-anterior-impar')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const valor = numeros[contador] - 1
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = valor
            container.appendChild(novoSpan)
        } else {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = valor - 1
            container.appendChild(novoSpan)
        }
    }
}

function mostrarTriplo() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-triplo')

    container.replaceChildren('')
    const ultimoIndice = numeros.length

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador] * 3
        container.appendChild(novoSpan)
    }
}

// function mostrarPrimo() {
//     const numeros = document.getElementById('numeros').value.split(',')
//     const container = document.getElementById('container-primo')

//     container.replaceChildren('')
//     const ultimoIndice = numeros.length

//     for (let contador = 0; contador < ultimoIndice; contador++) {
//         if (numeros[contador] % 1 == 0 && numeros[contador] % (numeros[contador]) == 0) {
//             const novoSpan = document.createElement('span')
//             novoSpan.textContent = numeros[contador] - 1
//             container.appendChild(novoSpan)
//         }
//     }
// }
botaoMostrarNumeros.addEventListener('click', mostrarTodosNumeros)
botaoNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoNumerosImpares.addEventListener('click', mostrarNumerosImpares)
botaoEMultiplos.addEventListener('click', mostrarEMultiplos)
botaoOuMultiplos.addEventListener('click', mostrarOuMultiplos)
botaoAnterior.addEventListener('click', mostrarAnterior)
botaoAnteriorImpar.addEventListener('click', mostrarAnteriorImpar)
botaoTriplo.addEventListener('click', mostrarTriplo)
botaoPrimo.addEventListener('click', mostrarPrimo)
