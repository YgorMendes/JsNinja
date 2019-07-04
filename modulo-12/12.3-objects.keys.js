let obj1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj1)); // mostra as propiedades de um objeto em forma de Array
console.log(obj1); // diferente de mostrar um objeto, que mostra entre chaves
console.log(Object.keys(obj1).length) // maneira de mostrar a quantidade de propiedades de um objeto
//

obj2 = Object.create(obj1); //criação de objeto com herança de outro objeto
obj3 = Object.create(obj2); // **

console.log(obj1.isPrototypeOf(obj2)); // verifica se o obj2  é um prototipo do obj1, ou seja se o obj2 é herdado do obj1
console.log(obj1.isPrototypeOf(obj3));
console.log(obj2.isPrototypeOf(obj1)); // obj1, não é prototipo de obj2, é ao contrario, por isso false
console.log(obj3.isPrototypeOf(obj1));// obj1, não é prototipo de obj3, é ao contrario, por isso false
//

console.log(JSON.stringify(obj1)); // transforma o objeto em string

let objetoModificado = JSON.stringify(obj1); // transforma o objeto em string
console.log(objetoModificado);

JSON.parse(objetoModificado); // transforma a string, em objeto de novo
console.log(objetoModificado);
//

// adcionar itens a um array
let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 'três';
console.log(arr);
arr[6] = 'seis'; // adiciona itens em branco, otens undefined
console.log(arr);
arr.push('sete');
console.log(arr);
//

// remove itens de um array
console.log(arr.pop()); // remove o ultimo item
console.log(arr.pop()); // remove o ultimo item
//

// remover um item de um array e levalo a uma variavel
let addItemDeUmArray = arr.pop();
console.log(arr);
console.log(addItemDeUmArray); // o item pego do array é undefined
