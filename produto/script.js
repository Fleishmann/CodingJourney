function Produto() {
  let numberA = parseFloat(document.getElementById('numberA').value);
  let numberB = parseFloat(document.getElementById('numberB').value);

  const resultadoDiv = document.getElementById('resultado');
  let produtoFinal = numberA;

  while (numberA < numberB) {
    numberA++;
    produtoFinal *= numberA;
  }

  resultadoDiv.innerHTML = `<p>Multiplicacao dos numeros e ${produtoFinal}.</p>`;
  resultadoDiv.style.display = 'block';
}
