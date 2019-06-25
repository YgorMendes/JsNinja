let arr = [1, 2, 3];

function myFunction(arg){
  return arg;
};
console.log(myFunction());
console.log(myFunction(arr));

function myFunction2(arg){
  return arg[1];
};
console.log(myFunction2(arr)); // função 'myFunction2' recebe a variavel 'arr' por parametro, e retorna o primeiro indice do array do msm. no caso o valor '2'.

let obj = {
  prop: 'Ygor',
  curso: 'JsNinja',
  ninja: 'aindaN' 
};
function myFunction3(arg){
  return arg;
};
console.log(myFunction3(obj).prop); // chamar uma propiedade de um object usando o '.' e seu nome

function myFunction4(arg){
  return arg.ninja;
};
console.log(myFunction4(obj)); // chamar uma propiedade diretamente