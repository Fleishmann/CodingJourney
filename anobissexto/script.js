function verificarAnoBissexto() {
  const anoInput = document.getElementById('ano');
  const resultadoDiv = document.getElementById('resultado');

  const ano = parseInt(anoInput.value);

  if (!isNaN(ano)) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      resultadoDiv.innerHTML = `<p>${ano} é um ano bissexto!</p>`;
    } else {
      resultadoDiv.innerHTML = `<p>${ano} não é um ano bissexto.</p>`;
    }

    // Exibe o resultado e a borda
    resultadoDiv.style.display = 'block';
  } else {
    resultadoDiv.innerHTML = '<p>Por favor, insira um ano válido.</p>';
    resultadoDiv.style.display = 'none'; // Oculta o resultado se não houver entrada válida
  }
}