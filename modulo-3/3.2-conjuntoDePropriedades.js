/* Objeto
Conjunto de propriedades
 */

 //Propriedades de um object
let pessoa = {
    nome: 'ygor',
    peso: 65,
    altura: 1.75,
    idade: 21
};
console.log(pessoa);

pessoa.cabelo = 'preto'; // forma de add uma propriedade.
console.log(pessoa);


pessoa.andar = function(){ //add um metodo ao object
    return 'pessoa andando';
};
console.log(pessoa.andar()); // forma de acessar um metodo

pessoa.aniversario = function(){
    pessoa.idade++;
};
console.log(pessoa);

//add um ano de vida 
pessoa.aniversario(); // add o valor (1) a propriedade idade do object pessoa
console.log(pessoa);

