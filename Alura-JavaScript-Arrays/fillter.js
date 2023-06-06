const aprendizes = ['Ryan', 'Matheus', 'Antonio', 'Geovana', 'Moises']
const notasAprendizes = [10, 9.5, 4.95, 4.0, 3.0]

const reprovados = aprendizes.filter( (aprendiz, indice) => notasAprendizes [indice] <5)

console.log(`Os aprendizes que reprovaram: ${reprovados}`)