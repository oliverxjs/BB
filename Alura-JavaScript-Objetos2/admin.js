import User from "./user.js"

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomedoCurso, vagas){
        return `Curso de ${nomedoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Geovana', 'g@g.com', '2022-03-29')
console.log(novoAdmin.criarCurso('JS', 20))