'use strict'

async function pegarImagens(){
    const url = 'https://dog.ceo/api/breed/doberman/images'

    const response = await fetch(url)
    const imagens = await response.json()

    return imagens.message
}

function criarImg (imagem){
    const galeria = document.getElementById('galeria')
    
    const tagImg = document.createElement('img')
    tagImg.src = imagem

    galeria.appendChild(tagImg)
}

async function carregarGaleria(){
    const imagens = await pegarImagens()

    imagens.forEach(criarImg)

}

carregarGaleria()