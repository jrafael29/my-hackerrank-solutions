function plusMinus(arr) {
  const array = arr;
  let quantidadeDePositivos = array.reduce((accumulator, value) => {
    if (value >= -100 && value <= 100) {
      if (Math.sign(value) > 0) {
        return accumulator + 1;
      }
    }
    return accumulator;
  }, 0);
  let quantidadeDeNegativos = array.reduce((accumulator, value) => {
    if (value >= -100 && value <= 100) {
      if (Math.sign(value) < 0) {
        return accumulator + 1;
      }
    }
    return accumulator;
  }, 0);
  let quantidadeDeZeros = array.reduce((accumulator, value) => {
    if (value >= -100 && value <= 100) {
      if (Math.sign(value) == 0) {
        return accumulator + 1;
      }
    }
    return accumulator;
  }, 0);

  const base = array.length;
  const positivosCalc = (quantidadeDePositivos / base).toPrecision(6);
  const negativosCalc = (quantidadeDeNegativos / base).toPrecision(6);
  const zerosCalc = (quantidadeDeZeros / base).toPrecision(6);
  console.log(positivosCalc);
  console.log(negativosCalc);
  console.log(zerosCalc);
}