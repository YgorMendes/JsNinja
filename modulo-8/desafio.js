let sum = function calculateSum(x, y){
  return x + y;
};
// Finalizado

let x = 10
let y = 3

console.log('A soma de ' + x + ' e ' + y + ' é igual a ' + sum(x, y));
// Finalizado

console.log('O nome da função que faz a soma é ' + sum.name + '.')
// Finalizado

function showName(){ // Função Literal
  return 'Ygor Mendes';
};

console.log(showName());
// Finalizado

let varShowName = showName;
console.log('A função ' + varShowName.name + ' retorna ' + varShowName() + '.');
// Finalizado

function calculator(operador){
  return function operacao(a, b){
    let resultado;

    switch(operador){
      case '+' :
        resultado = a + b;
        break;
      case '-' :
        resultado = a - b;
        break;
      case '/' :
        resultado = a / b;
        break;
      case '*' :
        resultado = a * b;
        break;
      default: 
      return 'Operação Invalida';
    };
    return 'Resultado da operação: ' + a + ' ' + operador + ' ' + b + ' = ' + resultado;
  };
};

let som = calculator('+')
console.log(som(5, 2));
// Finalizado

let sub = calculator('-');
let div = calculator('/');
let mult = calculator('*');
// Finalizado

console.log(sub(16, 3));
console.log(div(800, 800));
console.log( mult(10, 100));
// Finalizado
