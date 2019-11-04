(function(doc, win){

  'use strict'

  // copiar arrays
  // Array.prototype.slice

  let arr = [1, 2, 3, 4, 5];
  let arr2 = arr;
  console.log(arr, arr2, arr === arr2); // referência, n queremos isso
  
  // copia

  arr2 = arr.map(function(item) {
    return item;
  });
  console.log(arr, arr2, arr === arr2);

  // ou
  arr2 = arr.slice(); // ou .slice(0)
  console.log(arr, arr2, arr === arr2);
  //

  // c for um array lique podemos usar

  let $divs = doc.querySelectorAll('div');
  let $copyDivs = Array.prototype.slice.call($divs);
  console.log($divs, $copyDivs, $divs === $copyDivs);
  //
  
  // saber o tipo de dado real
  // Object.prototype.toString

  console.log(Object.prototype.toString.call(arr)); // mostra o tipo da propiedade passada por call

  // melhor doq usar o typeof porq retornaria obejto, tiypeof dev ser usado somente com tipos primitivos do js

})(document, window);