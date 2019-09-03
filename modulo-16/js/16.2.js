(function(){
  'use strict'
  let obj = {
    prop1: {
      prop2: {
        prop3: {
          prop31:'prop31',
          prop32:'prop32',
          prop33:'prop33'
        }
      }
    }
  };

  console.log(obj.prop1.prop2.prop3.prop31);
  console.log(obj.prop1.prop2.prop3.prop32); // maneira a qual devemos fazer para chamar as três
  //  propiedades separadamentes
  console.log(obj.prop1.prop2.prop3.prop33);

  // vai dar erro pois o 'with' n pode ser declarado com o 'use strict'
  // with(obj.prop1.prop2.prop3){ // maneira de encurtart um objeto, n pod ser usado
  //   console.log(prop31, prop32, prop33);
  // }

  function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  };
  // console.log(Person('Ygor', 'Mendes', 21)); // diz que o objeto Person não exixte, porem se
  // chamarmos as propiedades por fora elas existem, sem o 'use strict'
  console.log(new Person('Ygor', 'Mendes', 21)); // só funciona por causa da palavra chave new

  // console.log(name, lastName, age);// eles viraram escopo global por causa do 'this'
  
  // o 'use strict' faz com que o this seje igual a undefined ao en vez de igual a window, então
  // por isso da erro nos consoles na função Person, nem name, lastName, e age.
}());