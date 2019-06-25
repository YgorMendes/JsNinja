let arr = ['a', [1], {alfabeto: 'abc...z'}, true , 1];
// Finalizado

function addItem(novoItem){
  arr.push(novoItem);
  return arr;
}; 
console.log(addItem('Novo Item'));
//  Finalizado

console.log(arr.push([1, true,'d']));
// Finalizado

console.log('O segundo elemento do segundo array é o ' + arr[6][2]);
// Finalizado

console.log('O primeiro array tem ' + arr.length + ' itens.')
// Finaizado

console.log('O segundo array tem ' + arr[6].length + ' itens.')
// Finalizado

let num = 10

while(num <= 20){
  num % 2 === 0 ? console.log(num) : '';
  num++;
};
// Finalizado pares

num = 10

while(num < 20){
  num % 2 === 1 ? console.log(num) : '';
  num++
};
// ou 

num = 10;

while(num < 20){
  (num++) % 2 === 0 ? console.log(num) : '';
};
// Finalizado impares

for(let num = 100; num <= 120; num++){
  num % 2 === 0 ? console.log(num) : '';
};
// Finalizado pares

for(let num = 111; num <= 125; num++){
  num % 2 != 0 ? console.log(num) : '';
};
//ou 

for(let num = 111; num <= 125; num++){
  if(num != 0){
    console.log(num)
  };
};

// Finalizado impares