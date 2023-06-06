const alunos = ['Gabriel', 'Ju', 'Pedro', 'Geovana']

const mediaDosAlunos = [9, 6, 10, 0]

let listamediaalunos = [alunos, mediaDosAlunos]

//.includes é um booleano(true or false), ele possui a função de verificar se o parametro que você deseja está no array
//.indexof ele retorna o indice do parametro que você deseja no array

function exibeNomeNota(nomeDoAluno) {
    if (listamediaalunos[0].includes(nomeDoAluno)) {
        let indice = listamediaalunos[0].indexOf(nomeDoAluno)
        return listamediaalunos[0][indice] + ',sua media de notas é ' + 
        listamediaalunos[1][indice]
    } else {
        return "aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Jacare"))