// Hoisting é algo que está movendo para sima.
// Com Função funciona
// Exp:

function myFunction(){ // Uma função literal
  let x = 10;
  let y = 3;
  return soma(); // chamei a função antes msm dela existir
  function soma(){
    return x + y;
  };
};

console.log(myFunction()); // Hoisting funciona/aceita
//
// Mas não funciona com variáveis
// Exp:

function myFunction2(){
  function soma(){
    return x + y; // Chamei o resultado de 'x' e 'Y' antes msm deles existirem
  };
  return soma();
  let x = 10;
  let y = 3;
};
console.log(myFunction2()); // Hoisting n funciona/n aceita

//Ou

function myFunction3(){
  let x = 10;
  let y = 3;
  return soma(); // Chamei a variável antes msm dela existir
  let soma = function(){
    return x + y; 
  };
};

console.log(myFunction3()); // Hoisting n funciona/n aceita
