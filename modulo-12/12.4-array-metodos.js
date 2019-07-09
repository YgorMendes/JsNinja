// Juntar os métodos em uma string

let arr = ['Arroz', 'Feijão', 'Mistura'];
console.log(arr.join()); // junta tudo em uma string separado por virgulas

// join recebe um parametro, ele de padrão mostra os metodos juntos, porém com virguas e tem como arrumar isso
//Exp:

console.log(arr.join(' ')); // agora mostra com espaço
console.log(arr.join(', ')); // agora mostra o correto
console.log('meu almoço hj será:',arr.join(', ')); // criando frases com array e join
//

// Inverter ordem do array

console.log(arr.reverse()); // inverte a ordem, tem efeito colateral, muda o array principal

console.log(arr.reverse()); // voltou ao normal
//

// Ordenar por ordem alfabetica
console.log(arr.reverse()); // bagunçei a ordem
console.log(arr.sort()); // ordenei por ordem alfabetica