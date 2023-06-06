const livros = require('./lista-livros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;


 for (let atual = 0; atual < arrProdutos.lenght; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
        posicaoInicial = atual
    }
    {
        return maisBarato;
    }
}
}

module.exports = menorValor

console.log(menorValor)