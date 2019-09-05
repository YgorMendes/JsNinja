(function(){

  'use strict'

  let obj={
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
  };
  console.log(obj);
  console.log(delete obj.prop3); // deletar uma propiedade de um objeto, retorna 'true'
  console.log(obj);
  //
  let myVar = 0;
  console.log(delete myVar); // n c pode deletar variavéis, por esso retorna 'false'
  console.log(delete obj); // n c pode deletar objetos, por esso retorna 'false'
  // mas com o 'use strict' ao invéz de retornar false,  retona um erro de syntax,
  // o famosso 'syntaxError'

  // Não pode ter duas propiedades com o msm nome nos objetos exp:
  // let obj2={
  //   prop1: 'abc',
  //   prop1: 123
  // } // prop1 vai receber o segundo valor '123', se não estiver usando o 'use strict' 


  // argumentos de funções tmb n pode ter o msm nome exp:
  // function myFunction(a, a, b){};
})();