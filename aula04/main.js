'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-todos-numeros')
const botaoNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoNumerosImpares = document.getElementById('botao-mostrar-numeros-impares')


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

botaoMostrarNumeros.addEventListener('click', mostrarTodosNumeros)
botaoNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoNumerosImpares.addEventListener('click', mostrarNumerosImpares)