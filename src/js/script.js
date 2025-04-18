/* 
O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele 

OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
*/


const botoes = document.querySelectorAll(".botao")

botoes.forEach((botao) => {
	botao.addEventListener("click", () => {
		selecionarBotao(botao)
	})
})

function selecionarBotao(botao) {
	botao.classList.add("selecionado")
}


/*const botoes = document.querySelectorAll(".botao") // Objetivo 1
const personagens = document.querySelectorAll(".personagem") // Objetivo 2

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		removerSelecaoBotao()
		selecionarBotao(botao)

		removerSelecaoPersonagem()
		selecionarPersonagem(indice)
	})
})

function removerSelecaoBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado")
	if (botaoSelecionado) {
		botaoSelecionado.classList.remove("selecionado")
	}
}

function selecionarBotao(botao) {
	botao.classList.add("selecionado")
}

function removerSelecaoPersonagem() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado")
	if (personagemSelecionado) {
		personagemSelecionado.classList.remove("selecionado")
	}
}


function selecionarPersonagem(indice) {
	personagens[indice].classList.add("selecionado")
}*/