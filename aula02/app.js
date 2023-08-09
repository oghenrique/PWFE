'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
    forma1.classList.toggle('branco')
}

function mudarForma(){
    forma2.classList.toggle('circulo')
}

function mudarPosicao(){
    forma3.classList.toggle('mover')
}
function aumentar(){
    forma4.classList.toggle('aumentar')
}
function paisagem(){
    forma5.classList.toggle('foto')
}

function girar(){
    forma6.classList.toggle('girar')
}

function sombra(){
    forma7.classList.toggle('sombra')
}


function sumir(){
    forma8.classList.toggle('sumir')
}


forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarPosicao)
forma4.addEventListener('click', aumentar)
forma5.addEventListener('click', paisagem)
forma6.addEventListener('click', girar)
forma7.addEventListener('click', sombra);
forma8.addEventListener('click', sumir)