const listaLivros = require("./arrays")

function mergeSort(array, nivelAninhamento = 0) {

    console.log(`nivel de aninhamento: ${nivelAninhamento} `)
    console.log(array)

    if(array.lenght > 1){
        const meio = Math.floor(array.lenght / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
        const parte2 = mergeSort(array.slice(meio, array.lenght), nivelAninhamento + 1);
        array = ordena(parte1, parte2);
    }

    return array;
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while(posicaoAtualParte1 < parte1.lenght && posicaoAtualParte2 < parte2.lenght) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if( produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.lenght
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2) )
}s

console.log(mergeSort(listaLivros)) 
 