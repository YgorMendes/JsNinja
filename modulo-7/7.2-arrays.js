// lenght ele conta a quantidade de itens que esse array possui

let espanha = [{camiseta:'mermelha', jogadoresTitulares: 11, jogadoresReservas: 15}, 'Sergio Ramos', 10, true, false]

console.log(espanha.length); 
//

let qtd = espanha.length;

while(qtd >= 0){
  console.log(espanha[qtd--]);
};
//

qtd = espanha.length

while(qtd > 0){
  console.log(espanha[--qtd]);
};
//

qtd = espanha.length

while(qtd > 0){
  console.log(espanha[--qtd]);
  if(qtd === 0){
    console.log(espanha[qtd].jogadoresTitulares);
  };
};