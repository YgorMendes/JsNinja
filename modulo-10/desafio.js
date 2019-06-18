(function(){
  let five = '5';
  let concat = 10 + 10;
  five = (5);
  concat = ('10'+'10');
  console.log( five + ' é número?', typeof five === 'number' );
  console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

  let operation = {
    '+': function(x, y){
      return x + y;
    },
    '-': function(x, y){
      return x - y;
    },
    '*': function(x, y){
      return x * y;
    },
    '/': function(x, y){
      return x / y;
    },
    '%': function(x, y){
      return x % y;
    }
  };
  
  function isOperatorValid(operador){
    return operation[operador] !== undefined; 
    // Ou
    // return !!operation[operador];
  };
  console.log(isOperatorValid('+'))
  // Finalizado
  
  function calculator(operador){
    if (!isOperatorValid(operador)){
        return false;
    };
    return function(x, y){
      if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
      };
      return operation[operador]( x, y);
    };
  };
    
  function showOperationMessage(operador, number1, number2){
    return 'A operação ' + number1 + ' ' + operador + ' ' + number2 + ' =';
  };

  function showErrorMessage(operador){
    return 'Operação ' + operador + ' não permitida!';
  };
  
  let number1 = 0;  
  let number2 = 0;
  let operationSignal;

  operationSignal = '+';

  let sum = calculator(operationSignal);

  if(sum){
    number1 = 13;
    number2 = 9;
    console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2));
  }
  else {
    console.log(showErrorMessage(operationSignal))
  };
}());
// Finalizado


