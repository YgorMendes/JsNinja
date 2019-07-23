(function(){

let arr = ['String'];
console.log('\n transformar array em string');
console.log(arr.toString());
// Finalizado

let sudeste = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
let sul = ['Santa Catarina', 'Rio Grande do Sul', 'Paraná'];
// Finalizado

let brasil = sudeste.concat(sul);
console.log('\n estados do brasil');
console.log(brasil);
// Finalizado

brasil.unshift('Bahia', 'Ceará', 'Sergipe');
console.log('\n estados adicionados no principio do array estado');
console.log(brasil);
// Finalizado

console.log('\n excluir estado');
console.log(brasil.shift(0));
// Finalizado

let newSul = brasil.filter(function(item, index, array){
  return index > 5;
});
console.log('\n estados de newSul');
console.log(newSul);
// Finalizado

console.log('\n estados de brasil');
console.log(brasil);
// Finalizado

let nordeste = ['Bahia', 'Ceará', 'Sergipe', 'Rio Grande do Norte', 'Piauí', 'Maranhão', 'Alagoas', 'Pernambuco', 'Praíba'];
console.log('\n estados do Nordeste:');
console.log(nordeste);
// Finalizado

let newSudeste = brasil.splice(2, 4,);
console.log('\n estados de newSudeste')
console.log(newSudeste);
// Finalizado

brasil = brasil.concat(nordeste);
console.log('\n estados do brasil adcionando a região nordeste');
console.log(brasil);
// Finalizado

console.log( '\n estados em newSudeste:' );
console.log(newSudeste);
// Finalizado

console.log('\n estados do brasil');
console.log(brasil);

// Finalizado

let newBrasil = [];
brasil.forEach(function(item, index){ // percorre os itens de um array, e os transforma em objetos em newBrasil com as propiedades 'id' que tem valor o indice de brasil e 'estado'que tem valor item de brasil.
   newBrasil.push({
     id: index,
     estado: item
   })
});
// Finalizado

console.log('\n estados de newBrasil');
console.log(newBrasil);
// Finalizado

let every = brasil.every(function(item){
  return item.length > 7;
});
console.log('\n todos os estados de "brasil" tem mais de 7 letras?');
console.log(every === true
  ? 'Sim, todos os estados tem mais de 7 letras!' 
  : 'Não, Nem todos os estados tem mais de 7 letras!' 
);
// Finalizado

let some = brasil.some(function(item){
  return item === 'Ceará'
});
console.log('\n o estado Ceará está incluido em brasil?');
console.log(some === true
  ? 'Sim, Ceará está incluido'
  : 'Não, Ceará não foi incluido'
);
// Finalizado

let map = newBrasil.map(function(item, index, array){
  return {
   id: item.id + 1,
   estado: item.estado + ' pertence ao Brasil'
  };
});
// Finalizado

console.log('\n brasil com mais informações');
console.log(map);
// Finalizado

let filter = map.filter(function (item, index){
  return item.id % 2 === 0
});
console.log('\n mostrar os itens que tem o id par');
console.log(filter);
// Finalizado
}())