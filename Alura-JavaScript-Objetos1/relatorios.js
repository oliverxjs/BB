const Moisés = {
    nome: 'Moisés Oliveira Rodrigues',
    idade: 15,
    cpf: "099.367.391.62",
    email: "Moisésoliveirarodrigues29@gmail.com",
    fones: ["61995738247", "61991823232"],
    dependentes: [
        {
        nome: "Ryan",
        parentesco: "Amigos",
        idade: 16,},
        {
        nome: "Geovana",
        parentesco: "Amigos",
        idade: 16
    }
    ],
    saldo: 100,
    depositar:function(valor){
        this.saldo += valor
    }
    
}

let relatorio = "";

for ( let info in Moisés){
    if(typeof Moisés[info] === "object" || typeof Moisés[info] === "function")
{
    continue
} else {
    relatorio += `
    ${info} ==> ${Moisés[info]}`
}
}

console.log(relatorio)