// Pesquisar se existe o valor no array, retornando ond ele esta no indice

let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(5)); //retorna o indice donde o valor pesquisado c encontra
console.log(arr.indexOf(5,6));// retorna '-1' porque o valor pesquisado n existe apartir do indice '6'

// primeiro parametro o valor a ser pesquisado, segundo daond quer começar a pesquisa

console.log(arr.indexOf(5) > -1); // pesquisar c o valor pesquisado é 'true' c encontra no array
// e 'false' se naõ c encontra no array

// Pesquisar se existe o valor no array, retornando ond ele esta no indice, pesquisando de trás para
//frente

console.log(arr.lastIndexOf(5));// é a msm coisa só que procura no sentido contrario

// verificar c é um array

console.log(Array.isArray([])); // isso é um array
console.log(Array.isArray({})); // isso n é um arrayv