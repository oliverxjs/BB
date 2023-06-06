function Cliente(nome, cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor 
    }
}

function clientePoupança(nome, cpf, email, saldo, saldoPoupança){
    Cliente.call(this, nome, cpf , email, saldo)
    this.saldoPoupança = saldoPoupança
}

const bia = new clientePoupança("Bia", "55558828418248118", "bia@gmail.com", 100, 1200)

clientePoupança.prototype.depositarPoup = function(valor){
    this.saldoPoupança += valor
}

bia.depositarPoup(50)

console.log(bia)