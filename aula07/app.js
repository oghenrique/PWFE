'use strict'

const cepInput = document.getElementById('cep')

async function pegarEndereco (cep){
     const url = `https://viacep.com.br/ws/${cep}/json/`
     const response = await fetch(url)
     const endereco = await response.json()
     return endereco
}

async function preencherCampos(){
    const endereco = document.getElementById('endereco')
    const bairro = document.getElementById('bairro')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    
    const cepInfo = await pegarEndereco(cepInput.value)

    endereco.value = cepInfo.logradouro
    bairro.value = cepInfo.bairro
    cidade.value = cepInfo.localidade
    estado.value = cepInfo.uf
}

cepInput.addEventListener('focusout', preencherCampos)