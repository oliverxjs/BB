const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPythom = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
  let acum = 0 
  let atual = 0
  let length = notasDaSala.length;
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
     atual + acum, 0)

   return somaDasNotas/length
}

console.log(`Media da sala de JavaScript ${mediaSala(salaJS)}`)
console.log(`Media da sala de JAVA ${mediaSala(salaJava)}`)
console.log(`Media da sala de Pythom ${mediaSala(salaPythom)}`)