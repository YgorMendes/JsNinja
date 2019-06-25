let isTruthy = function(a){ // se a function for acionada tendo o valor
  return a ? true : false;    // true return true, caso contratio return false
  /* ou */ //return !!a;
};
console.log(isTruthy(1)); // true
console.log(isTruthy()); // false
// Finalizado

let carro = {
  marca: 'Fiat',
  modelo: 'Uno',
  placa: 'UFC-6324',
  ano: 2019,
  cor: 'Black',
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0
};
// Finalizado

carro.mudarCor = function(cor){
  carro.cor = cor;
};
console.log(carro.mudarCor('Branco'));
console.log(carro);
// Finalizado

carro.obterCor = function(){
  return carro.cor;
};
console.log(carro.obterCor());
// Finalizado

carro.obterModelo = function() {
  return carro.modelo;
};
console.log(carro.obterModelo());
// Finalizado

carro.obterMarca = function(){
  return carro.marca;
};
console.log(carro.obterMarca());
// Finalizado

carro.obterMarcaModelo = function(){
  return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo;
};
console.log(carro.obterMarcaModelo());
// Finalizado

carro.addPessoas = function(pessoasNoCarro){
  let totalPessoas = carro.quantidadePessoas + pessoasNoCarro;
  let quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
  let pessoa = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
  let pessoaNoCarro = totalPessoas === 1 ? 'pessoa no carro' : 'pessoas no carro';

  if (carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return 'O carro já esta lotado!'; 
  };
  if (totalPessoas > carro.assentos) {
    return 'Só cabem mais ' + quantasPessoasCabem + ' ' + pessoa;
  };
  if (totalPessoas <= 0) {
    return 'O carro está vacio';
  };
  carro.quantidadePessoas += pessoasNoCarro;
  return 'Temos '+ carro.quantidadePessoas + ' ' + pessoaNoCarro;
};
console.log(carro.addPessoas(1)); // deve mostrar 'pessoa' no final da string
console.log(carro.addPessoas(1)); // deve mostrar 'pessoas' no final da string
console.log(carro.addPessoas(2)); // deve mostrar 'pessoas' no final da string
console.log(carro.addPessoas(1)); // deve mostrar 'pessoas' no final da string
console.log(carro.addPessoas(3)); // o carro esta lotado

carro.quantidadePessoas = 0;
carro.addPessoas(3); // addciona o numero posto na propiedade
console.log(carro.addPessoas(6)); // deve mostrar a quantidade de assentos desocupados

carro.quantidadePessoas = 0;
console.log(carro.addPessoas(1)); // deve mostrar 'pessoa' no final da string

console.log(carro.addPessoas(3)); 
console.log(carro.addPessoas(-2)); // deve diminuir o numero de pessoas no carro
console.log(carro.addPessoas(-2)); // deve dizer que o carro c encontra vacio
// Finalizado