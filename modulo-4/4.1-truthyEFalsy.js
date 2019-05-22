/* Truthy é todo valor que quando transformado para boolean
 é representado por: True */

 /* Falsy é todo valor que quando transformado para boolean
 é representado por: False */

// Numeros falsy:
/* undefined - 0
null - -0
NaN - 'ou' = string vacia*/

// Numeros Truthy:
/* São todos os outros valores */

let teste;

if (false) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false


if (0) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false

if (-0) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false

if (undefined) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false

if (null) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false

if (NaN) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false

if ('') {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // false

if (' ') {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // true

if (1) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // true

if ([]) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // true

if ({}) {
  teste = true;
} else {
  teste = false;
};
console.log(teste); // true

// Uma maneira de verificar qual é o valor boolean é usando '!!'

console.log(!! 2); // true
console.log(!! 0); // false