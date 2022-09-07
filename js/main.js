const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}
const estatistica = document.querySelectorAll("[data-estatistica]")
const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento) => {
  elemento.addEventListener("click", (event) =>{
    //verifica se o botão apertado é o + ou -
    checaSinal(event)
    manipulaDados(event.target.parentNode, event.target.textContent)
    atualizaEstatisticas(event.target.dataset.peca, checaSinal(event))
    
    
})})
function checaSinal(evento){
  if (evento.target.classList.contains("menos") == true)
{
  return "menos";
} 
  else {
    return "mais";
}
 }

  function manipulaDados(controle, operacao){
    const peca = controle.querySelector(".controle-contador")
    operacao === "-" ? peca.value = parseInt(peca.value) - 1 : peca.value = parseInt(peca.value) + 1;
}
function atualizaEstatisticas(peca, sinal){
  estatistica.forEach((elemento) =>{
  sinal === "menos"? elemento.innerText = parseInt(elemento.innerText) + pecas[peca] [elemento.dataset.estatistica] 
  : elemento.innerText = parseInt(elemento.innerText) + (pecas[peca] [elemento.dataset.estatistica] * -1)
  })
}