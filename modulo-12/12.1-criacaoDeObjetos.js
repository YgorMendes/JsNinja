let obj = {
  prop1: 'porp1',
  prop2: 'prop2'
};
console.log(obj);

obj.prop1 = 'mudei o valor'; // mudar valor de objeto
console.log(obj);

delete obj.prop1; // deletar propiedade de um objeto
console.log(obj);

obj.prop1 = 'novo valor'; // adicionar propiedades a um objeto
console.log(obj)
//

// Objetos são manipulados por referência
// Ex:

let cerdo = {
  prop1: 'animal',
};

let referenciaCerdo = cerdo;

referenciaCerdo.prop1 = 'animal comestible'; // mudei o valor de cerdo pela referencia
console.log(cerdo)
//

// Formas de criar um objeto

// Literal
// let obj = {};

// como construor (new)
// let obj = new Object();

// com object.create();
// let obj = Object.create();