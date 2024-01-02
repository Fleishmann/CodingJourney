function classificarTriangulo() {
  const lado1 = parseFloat(document.getElementById('lado1').value);
  const lado2 = parseFloat(document.getElementById('lado2').value);
  const lado3 = parseFloat(document.getElementById('lado3').value);

  const resultadoDiv = document.getElementById('resultado');

  // Verifica se os valores inseridos são válidos (números)
  if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
    resultadoDiv.innerHTML = '<p>Por favor, insira comprimentos válidos para os lados do triângulo.</p>';
    resultadoDiv.style.display = 'block';
    return; // Retorna para evitar a execução do código abaixo
  }

  // Verifica se os comprimentos formam um triângulo válido
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
      resultadoDiv.innerHTML = '<p>O triângulo é equilátero.</p>';
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      resultadoDiv.innerHTML = '<p>O triângulo é isósceles.</p>';
    } else {
      resultadoDiv.innerHTML = '<p>O triângulo é escaleno.</p>';
    }
    
    resultadoDiv.style.display = 'block';
  } else {
    resultadoDiv.innerHTML = '<p>Os comprimentos fornecidos não formam um triângulo válido.</p>';
    resultadoDiv.style.display = 'block';
  }
}