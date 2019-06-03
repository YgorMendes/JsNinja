// Retorno de functions e criar uma function dentro de uma function
// Exp:

function adder(x){
  return function(y){
    return x + y;
  };
};

let add2 = adder(2);
console.log(add2(8));
//
console.log(adder(6)(6));