(function(){
  //O 'use strict' é uma funcionalidade do ECMAScript, uma expressão literal, uma diretiva, que
  // corrige uns erros no Js
  'use strict' // funciona aonde ela está ou seja dentro da IFE
  let myName = 'Ygor';
  console.log(myName);
}());
console.log(myName); // da um erro pois  'myName' está em escopo local, ñ daria o erro se 'myName'
// ñ fosse declara com 'let' ou 'var'