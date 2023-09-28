function diagonalDifference(array) {
  const numeroDeLinhasEColunas = array.length;
  let primeiraDiagonal = [];
  let segundaDiagonal = [];
  for (let i = 0; i <= numeroDeLinhasEColunas - 1; i++) {
    const number = array[i][i];
    primeiraDiagonal.push(number);
  }
  for (let i = 0; i <= numeroDeLinhasEColunas - 1; i++) {
    const number = array[i].reverse()[i];
    segundaDiagonal.push(number);
  }
  const somaPrimeiraDiagonal = primeiraDiagonal.reduce((accumulator, value) => {
    if (value >= -100 && value <= 100) {
      return accumulator + value;
    }
    return accumulator;
  }, 0);
  const somaSegundaDiagonal = segundaDiagonal.reduce((accumulator, value) => {
    if (value >= -100 && value <= 100) {
      return accumulator + value;
    }
    return accumulator;
  }, 0);
  const diff = somaPrimeiraDiagonal - somaSegundaDiagonal;

  return Math.abs(diff);
}
