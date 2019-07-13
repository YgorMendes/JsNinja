let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 4)); // Mostra itens a parte, tem duas propiedades, primeira da onde vc quer que começe, a segunda propiedade na onde vc quer que termine, de onde a onde, lembrando que a segunda prop vc deve adicionar um indice á mais

console.log(arr.slice(2, 4)); // Mostrar 3 e 4
console.log(arr.slice(0)); // Mostra todos os itens
console.log(arr.slice(-2)); // Mostra os dois últimos itens 4 e 5
console.log(arr.slice(2, 3)); // Mostrar apenas o 3
//

console.log(arr.splice(-2)); // Remove os ultimos dois itens
console.log(arr); // E tem efeito colateral

console.log(arr.push(4, 5 , 6)); 
console.log(arr.splice(1 ,4)); // Remover o 2, 3, 4, 5, primeira prop aonde vc quer começar, segunda prop quantos itens deseja remover
console.log(arr); // Sobrou apenas 1 e 6
//

console.log(arr.splice(1, 0, 2, 3, 4, 5)); // Adicionar 2, 3, 4, 5, primeira prop da onde quer começar, segunda prop quantos quer remover no caso nenhum '0', e a terceira prop em diante o que quer adicionar, não retorna nada
console.log(arr); // Array arr agora
//

console.log(arr.splice(1, 4, 'dois', 'três', 'quatro', 'cinco')); // Trocar vaores, primeira prop da onde quer começar, segunda prop quantos quer remover, terceira prop em diante seus substitutos
console.log(arr); // Array arr agora