// 'use strict'

// //JSON
// const funcionarios = [
//     {
//         nome: 'Maria Souza',
//         cargo: 'Designer',
//         imagem: 'maria.jpg'
//     },
    
//     {
//         nome: 'João Silva',
//         cargo: 'DBA',
//         imagem: 'joao.jpg'
//     },

//     {
//         nome: 'Hugo Pereira',
//         cargo: 'FrontEnd',
//         imagem: 'hugo.jpg'
//     },
    
//     {
//         nome: 'Ana Maria',
//         cargo: 'BackEnd',
//         imagem: 'ana.jpg'
//     }

// ]

// function mostrarCards(funcionario) {
//     const cardContainer = document.getElementById('card-container')

//     const card = document.createElement('div')
//     card.classList.add('card')

//     const imagem = document.createElement('img')
//     imagem.src = `./img/${funcionario.imagem}`
//     imagem.alt = funcionario.nome

//     const cardDescription = document.createElement('div')
//     cardDescription.classList.add('card-description')

//     const nome = document.createElement('h2')
//     nome.textContent = funcionario.nome

//     const cargo = document.createElement('p')
//     cargo.textContent = funcionario.cargo

//     cardDescription.replaceChildren(nome, cargo)
//     card.replaceChildren(imagem, cardDescription)
//     cardContainer.appendChild(card)
// }

// funcionarios.forEach(mostrarCards)

