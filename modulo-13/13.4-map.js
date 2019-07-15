let arr = [1, 2, 3, 4, 5]; 
let map = arr.map(function(item, index, array){ // faz uma alteração ou uma copia do array principal
  return item + 1;
});
console.log(arr,map); // a comparação do principal com a modificação
//

map = arr.map(function(item, index, array){ // tranformar em um objeto que mostre o indice e o valor do msm
  return {indice: index, item: item};
});
console.log(map);
//
 
let filter = arr.filter(function(item, index, array){ // Cria um array novo, porém filtra algo do array principal, no caso valores dos itens maiores do que 3
  return item > 3 ;
});
console.log(filter);