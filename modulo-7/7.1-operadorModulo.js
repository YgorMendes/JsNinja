// Operador de modúlo %
// ele retorta o resto da divisão entre dois operando   
// quanto sobra da divisão
// exp:
console.log(3 / 3); 
console.log(3 % 3); // 3 dividido para 3 ,não sobra nada
console.log(5 % 2); // ele divide o vl 'inteiro' para os 2, 'n quebra o valor', por isso mostra quanto sobrou  1
//

let num = 0;

while(num <= 20){
  console.log(num++);
};
// mostrar numeros de 0 á 20

num = 0;

while(num <= 20){
  (num++) % 2 === 0 ? console.log(num) : '';
};
//mostrar numeros 0 á 21 impares

num = 0;

while(num <= 20){
  num % 2 === 0 ? console.log(num) : '';
  num++;
};
// mostrar numeros 0 á 20 pares
