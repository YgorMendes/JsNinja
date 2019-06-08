(function myFunction(){
  let number1 = 10;
  let number2 = 20;
  console.log('Na função `myFunction`, o primeiro número é', number1);
  console.log('Na função `myFunction, o segundo número é', number2);
  console.log(number1 + number2); 
}
());
//

(function myFunction2(){
  let number1 = 10;
  let number2 = 20;
  let sum = function sum(){
      return number1 + number2;
  };
  console.log('A soma de 10 e 20 é igual a', sum ? sum() : undefined);
  return sum();
}
());
//

(function myFunction3(){
  let number1 = 40;
  let number2 = 50;
  function sum(){
      return number1 + number2;
  };
  console.log('Na função myFunction3, number1 é igual a', number1);
  console.log('A soma de 40 e 50 é igual a', sum() );
  return sum();
}
());
// Finalizado

function calculator(x, y){
  return function(callback){
    return callback(x, y);
  };
};
// Finalizado

let sum = calculator(10, 3);
// Finalizado

console.log(sum(function(num1, num2){
 return num1 + num2;
}));
// Finalizado

let sub = calculator(20, 20);

console.log(sub(function(num1, num2){
  return num1 - num2;
}));
// Finalizado

let div = calculator(60, 3);

console.log(div(function(num1, num2){
  return num1 / num2;
}));
// Finalizado

let mult = calculator(200, 50);

console.log(mult(function(num1, num2){
  return num1 * num2;
}));
// Finalizado