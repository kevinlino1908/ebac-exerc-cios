const numeroA = document.getElementById("first-input");
const numeroB = document.getElementById("second-input");

function comparador() {
  const valorA = parseFloat(numeroA.value);
  const valorB = parseFloat(numeroB.value);

  if (isNaN(valorA) || isNaN(valorB)) {
    alert("Por favor, insira números válidos em ambos os campos.");
    return;
  }
  if (valorA < valorB) {
    alert("Daora, o número B é maior");
  } else if (valorA > valorB) {
    alert("Que pena, o número A está maior");
  } else {
    alert("Os números são iguais!");
  }
}

document.getElementById("compare-button").addEventListener("click", comparador);