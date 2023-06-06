const Moisés = {
    nome: 'Moisés Oliveira Rodrigues',
    idade: 15,
    cpf: "099.367.391.62",
    email: "Moisésoliveirarodrigues29@gmail.com",
    fones: ["61995738247", "61991823232"],
    dependentes: [{
        nome: "João",
        parentesco: "irmão",
        idade: 16
    }]
}

 Moisés.dependentes.push({
     nome: "Eduardo",
     parentesco: "filho",
     idade: 19
 })

 const filhoMaisNovo = Moisés.dependentes.filter(dependente => dependente.idade===16)

 console.log(filhoMaisNovo[0].nome)