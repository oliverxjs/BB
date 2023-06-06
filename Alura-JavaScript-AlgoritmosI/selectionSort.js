const livros = require('./lista-livros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual)

    let livroatual = livros[atual];
    let livroMenorPreco = livros[menor];


    livros[atual] = livroMenorPreco
    livros[menor] = livroatual

}

console.log(livros)