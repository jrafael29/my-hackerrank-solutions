function gradingStudents(grades) {
  if (grades.length >= 1 || grades.length <= 60) {
    const notas = grades.map((nota) => {
      if (nota >= 0 || nota <= 100) {
        const notaArredondada = Math.ceil(nota / 5);
        const proximoMultiploDeCinco = notaArredondada * 5;
        const diferençaEntreNotaEProximoMultiploDeCinco = proximoMultiploDeCinco - nota


        let valorDaNota;

        if (nota < 38 || proximoMultiploDeCinco < 40) {
          valorDaNota = nota;
        } else {
          if (diferençaEntreNotaEProximoMultiploDeCinco < 3) {
              valorDaNota = proximoMultiploDeCinco;
            } else {
              valorDaNota = nota;
          }
        }
        return valorDaNota;
      }
    });
    console.log("notas", notas);
    return notas;
  }

  // Write your code here
}

const grades = [
  22, 86, 30, 0, 16, 51, 53, 42, 48, 22, 69, 12, 27, 34, 24, 95, 16, 32, 22, 52,
  56, 71, 95,
];
gradingStudents(grades);
