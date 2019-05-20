let perro = {};

let pessoa = {
    nome: 'Ygor',
    sobrenome: 'Mendes',
    sexo: 'Masculino',
    idade: 21,
    altura: 1.75,
    peso: 65,
    andando: false,
    caminhouQuantosMetros: 0
}
// finalizado 

pessoa.fazerAniversario = function(){
    return pessoa.idade++
};
pessoa.fazerAniversario()
// console.log(pessoa)
// finalizado

pessoa.andar = function(Km){
    return pessoa.caminhouQuantosMetros = 100 + ' metros'
    return pessoa.andando = true;
};

pessoa.andar()
console.log(pessoa);




