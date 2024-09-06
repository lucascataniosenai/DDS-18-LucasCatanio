// function mostrarTexto(){
//   console.log("O texto apareceu");

// }

// var contagem = 0

// function mostrarContagem(){
//   contagem++
//   console.log(contagem);

// }

// setTimeout(mostrarTexto, 5000)
// setInterval(mostrarContagem, 1000)

var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");
var saudacao = document.getElementById("saudacaoTexto")
var bom = document.getElementById("bom")

var diasSemana = [
  "DOMINGO",
  "SEGUNDA-FEIRA",
  "TERÇA-FEIRA",
  "QUARTA-FEIRA",
  "QUINTA-FEIRA",
  "SEXTA-FEIRA",
  "SÁBADO",
]
var numeroMes = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
]

var atualizarRelogio = setInterval(function () {
  var dataAtual = new Date()
  var horaAtual = dataAtual.getHours().toString().padStart(2, "0")
  var minutoAtual = dataAtual.getMinutes().toString().padStart(2, "0")
  var segundoAtual = dataAtual.getSeconds().toString().padStart(2, "0")
  var diaSemanaAtual = dataAtual.getDay()
  var diaAtual = dataAtual.getDate().toString().padStart(2, "0")
  var mesAtual = dataAtual.getMonth()
  var anoAtual = dataAtual.getFullYear()
  var horaDesformatada = dataAtual.getHours()
  //console.log(dataAtual);
  horas.textContent = horaAtual
  minutos.textContent = minutoAtual
  segundos.textContent = segundoAtual
  saudacao.textContent = diaAtual + "/" + numeroMes[mesAtual] + "/" + anoAtual + " - " + diasSemana[diaSemanaAtual]
  comprimento = bom(horaDesformatada)
  bom.textContent = comprimento



})

function bom(hora){
  if(hora >= 0){
    return "Boa madrugada"
  } else if(hora >= 6){
    return "Bom dia"
  } else if(hora >= 12){
    return "Boa tarde"
  } else if(hora >= 18){
    return "Boa noite"
  }
}