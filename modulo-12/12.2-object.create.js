// Herança Objetos

let obj1 = {
  x: 1,
  y: 2
};

let obj2 = Object.create(obj1);

console.log(obj1);
console.log(obj2); // não a nada aparentemente, mas ele erdou do obj1 'x' e 'y'

console.log(obj2.x , obj2.y) // agora aparece 'x' e 'y'

obj1.x = 2; // Mudança em obj1
obj1.y = 3;
console.log(obj2.x, obj2.y); // obj2 herda mudanças de obj1

obj2.x = 3; // Mudança em obj2
obj2.y = 4;
console.log(obj1.x, obj1.y) // obj1 não herda mudanças de obj2
//

obj1 = {
  heranca: 'casa'
};

obj2 = Object.create(obj1);

let obj3 = Object.create(obj2);
console.log(obj3.heranca); // obj3 herdou a casa de seu pai obj2, que herdou de obj1

// se mudar a herança de pai obj1, muda de filho e neto
// se mudar de filho obj2, muda de neto obj3, e naõ muda de pai obj1
// se mudar de neto obj3 , não muda de filho obj2 nem de pai obj1
//

for(let verPropiedadesDeUmObjeto in obj1){ // mostra as propedades de um obj sendo propias ou herdadas
  console.log(verPropiedadesDeUmObjeto)
};

for(let verPropiedadesDeUmObjeto in obj2){ // mostra as propedades de um obj sendo propias ou herdadas
  console.log(verPropiedadesDeUmObjeto)
};

for(let verPropiedadesDeUmObjeto in obj3){ // mostra as propedades de um obj sendo propias ou herdadas
  console.log(verPropiedadesDeUmObjeto)
};

console.log(obj1); // tem valor propio, que é a herança
console.log(obj2); // não tem valores propios, apenas erdados
console.log(obj3); // não tem valores propios, apenas erdados

console.log(obj1.hasOwnProperty('heranca')); // verifica se o valor é propio ou herdado
console.log(obj2.hasOwnProperty('heranca')); // verifica se o valor é propio ou herdado
console.log(obj3.hasOwnProperty('heranca')); // verifica se o valor é propio ou herdado
//

for(let verPropiedadesDeUmObjeto in obj1){ // mostra somente as propiedades propias de um obj
  if(obj1.hasOwnProperty(verPropiedadesDeUmObjeto)){
    console.log(verPropiedadesDeUmObjeto);
  };
};

for(let verPropiedadesDeUmObjeto in obj2){ // mostra somente as propiedades propias de um obj
  if(obj2.hasOwnProperty(verPropiedadesDeUmObjeto)){
    console.log(verPropiedadesDeUmObjeto);
  };
};

for(let verPropiedadesDeUmObjeto in obj3){ // mostra somente as propiedades propias de um obj
  if(obj3.hasOwnProperty(verPropiedadesDeUmObjeto)){
    console.log(verPropiedadesDeUmObjeto);
  };
};