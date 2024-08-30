/*
//objeto window = janela do navegador
window.console.log("Alo bruno")
window.alert("BOA NOITE BRUNO")
window.prompt("Diz pra mim, o que eu já sei")
*/

// console.log(document.head)
// console.log(document.body)

// accesando elemetos por tag, class e id
// var titulo = document.getElementsByTagName("h1")
// var paragrafos = document.getElementsByClassName("para")
// var para3 = document.getElementById("p3")

// paragrafos[0].innerText = "Arroz"
// para3.innerHTML = "<h3> novo texto aqui<h3>"

// var p1 = document.getElementsByTagName("p")[0]
// p1.style.background = "red"

// para3.style.color = "green"

function cliquei() {
  console.log("CLICO MESMO 2");

}

function outroFoco() {
  console.log("Mudei o foco, não está mais na caixa")
}

function trocaTexto(textoCaixinha) {
  var texto = document.getElementById("textoParaTrocar")
  texto.innerText = textoCaixinha.value
}

function corVerde(elemento){
  elemento.style.color = "green"
  elemento.style.fontSize = "600px"
}

function corAzul(elemento){
  elemento.style.color = "blue"
  elemento.style.fontSize = "30px"
}

