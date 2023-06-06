const Moisés = {
    nome: 'Moisés Oliveira Rodrigues',
    idade: 15,
    cpf: "099.367.391.62",
    email: "Moisésoliveirarodrigues29@gmail.com",
    fones: ["61995738247", "61991823232"],
    dependentes: [
        {
        nome: "Ryan",
        parentesco: "Amigo",
        idade: 16,},
        {
        nome: "Geovana",
        parentesco: "Amigo",
        idade: 16
    }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
    
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes)("dependentes")
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(oferecerSeguro(Moisés))