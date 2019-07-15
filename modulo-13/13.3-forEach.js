// Estrutura de repetição forEach, que é mais rapída, mais pratica, funcional e elegante doq o for

let arr = [1, 2, 3, 4];

arr.forEach(function(item, index, array){
console.log(item, index, array); // Recebe três  paramêtros o 'item', 'indice' e 'Array'
});
//

// Mesma estrutura de repetição porém com o for

for(let i = 0; i < arr.length; i++){
  console.log(arr[i], i, arr)
};
//

arr = ['#','##', '###', '####'];

arr.forEach(function(item){
  console.log(item); // se quiser pode mostrar somente o item, escadinha
  });
  //

arr = [1, 2, 3, 4];
let sum = 0;

arr.forEach(function(item){
  sum += item; // se quiser somar o valor dos itens
});
console.log(sum); // a sum é a soma de todos os items e vale 10
//

let every = arr.every(function(item){
  return item < 5;
});
console.log(every); // verifica se todos os itens são true, no caso era se todos eram menores que 5, entaõ é true
//

let some = arr.some(function(item){
  return item % 2 === 0;
});
console.log(some); // verifica se ao menos um itens é true, no caso era se algum item dividido por 2 desse 0, então é true 