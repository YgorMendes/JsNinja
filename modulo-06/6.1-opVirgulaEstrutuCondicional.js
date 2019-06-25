//A virgula vai separar umas instruções e vai juntar em uma unica condição

//exp:
let a, b = 2, c;
function myFunction(){
  let x = 0;
  return (x += 1, x);
}
// 

function nana(){
  let a = 1, b = 2, c = 3;
  return[a, b, c];
};
console.log(nana());
//

function operacao(){
  let x = 0;
  return (x += 1, x); // um pre-encremento
};
console.log(operacao());
//

//switch verifica um expreção
//exp:

function funcao(x){
  switch(x) {
    case 1:
      console.log('x é 1');
    break;
    case 2:
      console.log('x é 2');
    break;
    default:
      console.log('x não é nem1 nem2');
  };
};
console.log(funcao(3)); // que brisa, dahora