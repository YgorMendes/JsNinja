let championship = 'UEFA EUROPA LEAGUE'
console.log(championship);
// Finalizado

let teams = ['Espanha', 'Alemanha', 'Portugal', 'França', 'Italia']
console.log( 'Times que estão participando do campeonato:', teams );
// FInalizado

function showTeamPosition(posicao){
  return posicao < 1 ||posicao > 5 ? "Não temos a informação do time que está nessa posição." : 'O time que está em ' + posicao + ' lugar é a ' + teams[posicao -1];
};
console.log(showTeamPosition(1)); // Espamha
console.log(showTeamPosition(6)); //  N temos a informação
console.log(showTeamPosition(-1));
//Finaliuzado


// Finalizado

let vinteATrinta = 20;
while(vinteATrinta < 30){
  console.log(vinteATrinta);
  vinteATrinta ++;  
};
console.log(vinteATrinta);
// Finalizado

function convertToHex(cor){
  let hexa;

  switch(cor){
    case 'white':
      hexa = '#FFFFFF'
      break;
    case 'black':
      hexa = '#000000'
      break;
    case 'green':
      hexa = '#008000'
      break;
    case 'red':
      hexa = '#FF0000'
      break;
    case 'orange':
      hexa = '#FFA500'
      break;
    case 'blue':
      hexa = '#0000FF'
      break;
    default:
      return 'Não temos o equivalente hexadecimal para ' + cor + '.';
  };
  return 'O hexadecimal para a cor ' + cor + ' é ' + hexa + '.';
};
console.log(convertToHex('white')); 
console.log(convertToHex('black')); 
console.log(convertToHex('blue')); 
console.log(convertToHex('green')); 
console.log(convertToHex('orange')); 
console.log(convertToHex('red')); 
console.log(convertToHex('rosa'));
console.log(convertToHex('rojo')); 