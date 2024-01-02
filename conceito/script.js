function converterNotaParaConceito() {
  const nota = parseFloat(document.getElementById('nota').value);
  const resultadoDiv = document.getElementById('resultado');

  if (!isNaN(nota) && nota >= 0 && nota <= 100) {
    let conceito;

    if (nota === 100) {
      conceito = 'A';
    } else if (nota >= 80) {
      conceito = 'B';
    } else if (nota >= 60) {
      conceito = 'C';
    } else if (nota >= 40) {
      conceito = 'D';
    } else {
      conceito = 'F';
    }

    resultadoDiv.innerHTML = `<p>O conceito para a nota ${nota} é: ${conceito}</p>`;
    resultadoDiv.style.display = 'block';
  } else {
    resultadoDiv.innerHTML = '<p>Por favor, insira uma nota válida (de 0 a 100).</p>';
    resultadoDiv.style.display = 'none';
  }
}
