const listaLivros = require("./arrays")

function busca(array, de, ate, valorBuscado) {
    const meio = math.flor((de + ate) / 2);
    const atual = array[meio];

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if ( valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado)
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(listaLivros, 0, listaLivros.lenght - 1, 20)