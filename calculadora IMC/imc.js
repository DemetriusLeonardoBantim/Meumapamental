var resultado;
var valorPeso = document.querySelector('#peso')
var valorAltura = document.querySelector('#altura')
var visorResultado = document.querySelector('.resultado')
//valorPeso/math.pow(altura,2)


function calcularIMC(resultado){
  valorPeso = parseInt(valorPeso.value)
  valorAltura = parseInt(valorAltura.value)

  resultado = valorPeso/Math.pow(valorAltura,2)
  visorResultado.innerHTML = "Seu imc :" + " " + resultado
}