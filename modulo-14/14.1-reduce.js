// Forma de percorrer o array somando os valores, ou concatenando, reduzir o array

let arr = [1, 2, 3, 4, 5];
let reduce = arr.reduce(function(acumulado, atual, index, array){

  return acumulado + atual;
},0);
console.log(reduce); // reduce recebe 4 parametros, primeiro 'acumulado', que é '0' passado junto a function, segundo é o atual que é o valor 'trabalhado' cada vex que o reduce passa pelos itens


// 1ª - 0 + 1 = 1
// 2ª - 1 + 2 = 3
// 3ª - 3 + 3 = 6
// 4ª - 6 + 4 = 10
// 5ª - 10 + 5 = 15 // valor retornado no console

let arr2 = ['Y', 'g', 'o', 'r'];
let reduce2 = arr2.reduce(function(acumulado, atual, index, array){

  return acumulado + atual;
});
console.log(reduce2); // lembrando que o valor acumulado não é mais zero, ele não existe mais
// 

// tmb podemos fazer isso do lado inverso

let arr3 = ['o', 's', 'r', 'e', 'v', 'n', 'i'];
let reduce3 = arr3.reduceRight(function(acumulado, atual, index, array){

  return acumulado + atual;
});
console.log(reduce3); // tem que retornar a palavra 'inverso', usando reduceRight