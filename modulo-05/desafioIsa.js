// let escadinha = function(a){
//   if (a === 1) {
//     return '#';
//   };
//   if (a === 2) {
//     return '#\n##';
//   };
//   if (a === 3) {
//     return '#\n##\n###';
//   };
//   if (a === 4) {
//     return '#\n##\n###\n####'
//   } else {
//     return 'Mínimo de Degraus 1 e Máximo 4';
//    };
// };
// console.log(escadinha(3)); // n° de degraus desejado min: 1 max:4


let escada = {
  1: '#',
  2: '##',
  3: '###',
  4: '####'
};

for(let degraus in escada){
  console.log(escada[degraus]);
};


