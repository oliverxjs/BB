class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email= email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}
    class clientePoupança extends Cliente{
        constructor(nome,email,cpf,saldo,saldoPoupanca){
            super(nome,email, cpf,saldo)
            this.saldoPoupanca = saldoPoupanca
    
        }

    depositarpoupanca(valor){
        this.saldoPoupanca += valor
    }
}
    const geovana = new clientePoupança("geovana", "geo@email.com", "240195219501501", 2000, 2000)

    console.log(geovana)