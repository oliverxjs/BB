import User from "./user.js"

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }


aprovaEstudante(estudante, curso) {
    return `estudante ${estudante} aprovado no curso ${curso}.`
}
}

const novoDocente = new Docente('Moises', 'moises@gmail.com', '2022-05-29')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Pinto', 'Js'))