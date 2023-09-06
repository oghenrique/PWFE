'use strict'

const contatos = [
    {
        nome: 'Ana Castela',
        mensagem: 'Oi, tudo bem?',
        quantidade: '1',
        tempo: 'Há 12 minutos',
        foto: 'ana.img',
        contato: 'Gustavo Henrique'
    },
    {
        nome: 'Neymar',
        mensagem: 'Fut na sexta, leva 10 cont....',
        quantidade: '11',
        tempo: 'Há 4 dias',
        foto: 'neymar.img',
        contato: 'Gustavo Henrique'
    },
    {
        nome: 'Roger Guedes',
        mensagem: 'Vou voltar não KKKKKKK...',
        quantidade: '1',
        tempo: 'Há 1 minuto',
        foto: 'roger.img',
        contato: 'Gustavo Henrique'
    },
    {
        nome: 'Nicolas Petri',
        mensagem: 'Gu, a Gab tá te procu...',
        quantidade: '18',
        tempo: 'Há 25 minutos',
        foto: 'nicolas.png',
        contato: 'Gustavo Henrique'
    }
]

function mostrarCards(contatos){

    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img${contatos.foto}`
    img.alt = contatos.nome

    const informacoes = document.createElement('div')
    informacoes.classList.add('informacoes')

    const nomeContato = document.createElement('div')
    nomeContato.classList.add('nomeContato')

    const nomeCtt = document.createElement('h3')
    nomeCtt.classList.add('nomeCtt')
    nomeCtt.textContent = contatos.nome

    const qtdMensagem = document.createElement('p')
    qtdMensagem.classList.add('qtdMensagem')
    qtdMensagem.textContent = contatos.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = contatos.mensagem

    nomeContato.replaceChildren(nomeCtt, qtdMensagem)

    informacoes.replaceChildren(nomeContato, mensagem)

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = contatos.tempo

    const contato = document.createElement('div')
    contato.classList.add('contato')

    const contato2 = document.createElement('p')
    contato2.textContent = contatos.contato

    contato.replaceChildren(contato2)

    card.replaceChildren(img, informacoes, tempo, contato)

    container.appendChild(card)

}

contatos.forEach(mostrarCards)
