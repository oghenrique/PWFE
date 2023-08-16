'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdent = document.getElementById('ident')
const botaoMedia = document.getElementById('media')

function somar (){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}

botaoSomar.addEventListener('click', somar)

function ident(){
    const numero = parseInt(document.getElementById('numero-it2').value)
        
    const resultado = document.getElementById('resultado-2')

    if (numero > 0){
        resultado.textContent = 'Positivo'
    }else if (numero < 0){
        resultado.textContent = 'Negativo'
    }else{
        resultado.textContent = 'Zero'
    }
} 

botaoIdent.addEventListener('click', ident)

function calcularMedia() {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);
    const nota4 = Number(document.getElementById('nota4').value);

    // Cálculo da média das notas
    const md1 = (nota1 + nota2 + nota3 + nota4) / 4;

    if (md1 >= 7) {
        // Usar md1 em vez de media
        alert("Sua média é " + md1 + ". Parabéns, você foi aprovado!");
    } else {
        const ne = prompt(`Sua média é ${md1}. Insira sua nota de exame:`);

        const md2 = (md1 + Number(ne)) / 2;

        if (md2 >= 5) {
            alert(`Sua nova média é ${md2}. Aprovado em exame.`);
        } else {
            alert(`Sua nova média é ${md2}. Você foi reprovado.`);
        }
    }
}

botaoMedia.addEventListener('click', calcularMedia);


