var daysWorked = document.querySelector("#valorTrabalhoHoras")
var hoursWorked = document.querySelector("#valorTrabalhoDias")
var daysVacation = document.querySelector("#valorDiasDeFerias")
var valueProj = document.querySelector("#valorProjetoTotal")
var visor = document.querySelector(".visor")




function calcular(valorHora){
  daysWorked = daysWorked.value
  hoursWorked = hoursWorked.value
  daysVacation = daysVacation.value
  valueProj = valueProj.value
  
  valorHora = (valueProj/(daysWorked * 4 * hoursWorked)) + ((daysVacation*daysWorked*hoursWorked))
  console.log(valorHora)

  visor.innerHTML = `<p>Valor total do projeto: </p>`  + `<p>` + parseFloat(valorHora) + `</p>`

}