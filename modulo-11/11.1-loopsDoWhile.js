let counter1 = 1;
while(counter1 < 10){ // verifica algo primeiro e depois faz
  console.log(counter1++);
};
console.log('counter não é menor que dez, agora ele vale',counter1);
//

let counter2 = 10;
do{ // faz algo primeiro e depois verifica
  console.log(counter2++);
} while(counter2 < 10);
//

for(let counter3 = 14; counter3 < 20; counter3++){
  console.log(counter3);
};
//

let colores = {
  col1: 'Negro',
  col2: 'Blanco',
  col3: 'Rojo',
  col4: 'Amarillo'
};

for(let propiedadesColores in colores){ // muestra las propiedades de un objeto.
  console.log(propiedadesColores);
  console.log(colores[propiedadesColores]);// si quieres puedes mostrar los valores de las propiedades
};

console.log('col3 in colores?','col3' in colores) // también verifica las propiedades
console.log('co5 in colores?','col5' in colores)
