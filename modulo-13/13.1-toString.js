let arr = [1, 2 ,3];
console.log(arr.toString()); // Transforma o array em string, não tem efeiro colateral
//

console.log(arr.concat(4)); // Adiciona um valor ao array, não tem efeito colateral
//

console.log(arr.unshift(0)); // Adiciona um valor no inicio do array, e retorna o length'quantidade de itens', tem efeito colateral
console.log(arr) // zero '0' no inicio do array
//

console.log(arr.shift()); // Remove o primeiro item do array, e retorna o mesmo, tem efeito colateral