//É possível criar um função dentro de uma função!
// Exp:

function myFunction(){
  function soma(){
    return 10 + 3;
  };
  return soma();
};

console.log(myFunction());
//

 function myFunction2(){
  let x = 0;
  let y = 1;
  function soma2(){
    return x + y;
  };
  return soma2();
};

console.log(myFunction2());
//

 function myFunction3(){
  function soma3(){
    return x + y;
  };
  let x = 0;
  let y = 1;
  return soma3();
};

console.log(myFunction3());
//

function myFunction4(){
  let x = 0;
  let y = 1;
  return soma4();
  function soma4(){
    return x + y;
  };
};

console.log(myFunction4());
//

// Não é possivel acessar uma função criada dentro de uma função fora de escopo!
// O mesmo com variáveis

console.log(soma()); // Vai dar erro no console
console.log(x); // Vai dar erro no console
console.log(y); // Vai dar erro no console