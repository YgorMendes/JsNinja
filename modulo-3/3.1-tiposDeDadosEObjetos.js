/* Tipos de dados e objetos 
Os Dados Primitivos:
string
number
boolean
null e undefined 

E todos os outros tipos de dados são:
Objeto*/

/* Objects */

let pessoa = {
    nome: 'ygor',
    peso: 65,
    altura: 1.75
};
console.log(pessoa.peso); //forma de acessar uma propriedade de um object

let carro = {
    montadora: 'volkswagen',
    cor: 'Black',
    modelo: 'Sciroco'
};
console.log(carro);

let madrid = function(){ //função anonima
    return 'Club mais rico do Mundo';
}; 
console.log(madrid);
console.log(madrid());