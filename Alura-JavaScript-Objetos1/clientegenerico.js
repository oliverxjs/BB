function Cliente(nome, cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }
}

const moisés = new Cliente("Moisés", "08337936169", "moisesoliveirarodrigues29@gmail.com",15000)

console.log(moisés)