//reconhecendo cartao como array
const cartao = document.querySelectorAll('.cartao')
let cartaoAtual = 0

//trocando o ".selecionado" de lugar
function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector ('.selecionado') //selecionando a classe
    cartaoSelecionado.classList.remove('selecionado') //removendo o termo 'selecionado'
}

//colocando o ".selecionado" no proximo cartao a ser mostrado
function mostrarCartao (rolCartao) {
    cartao [rolCartao].classList.add('selecionado') //adicionando o termo 'selecionado'
}

//botao avancar
const avancar = document.getElementById('btAvancar')
btAvancar.addEventListener('click' , function() {     //adicionando o ato de clicar e avançando
    if(cartaoAtual === cartao.length - 1) return

    cartaoAtual++
    mostrarCartao (cartaoAtual)
    esconderCartaoSelecionado ()
})

//botao voltar
const voltar = document.getElementById('btVoltar')
btVoltar.addEventListener('click' , function(){    //adicionando o ato de clicar e voltando
    if (cartaoAtual === 0) return

    esconderCartaoSelecionado ()

    cartaoAtual--
    mostrarCartao (cartaoAtual)

})