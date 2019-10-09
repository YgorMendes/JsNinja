(function(){

  'use strict'

  function myFunction( a, b, c ){
    return 'Blz'
  };
  console.log(myFunction.length); // mostra quantos parametrôs pode ser passado pra function

  let arr = [ 1, 2, 3, 4 ];
  console.log (arr.toString() ); // transforma o array em string e separa os itens por virgula

  let obj = {
    prop1: 1,
    prop2: 2
  };
  console.log( obj.toString() ); // retorna: obejeto do tipo objeto dentro de um array

  console.log( myFunction.toString() ); // converte toda função em uma strung


  console.log( myFunction.call() ); // call é o método de invocar
  console.log( myFunction() ); // msm coisa q isso
  //

  function myFunction2( a, b, c ){
    console.log( this.lastName, a, b, c); // daria erro pórem
  }

  let obj2 = {
    lastName: 'Ygão'
  }

  myFunction2.call( obj2, 'Ferreira Mendes', 10, null  );
  
  // console.log( myFunction2() );// daria erro pórem
   // agora this é obj
  // myFunction2.call( this, a, b, c)
  //

  function myFunction3( a, b, c ){
    console.log( this.lastName, a, b, c );
  };

  let arr2 = [1, 2, 3];
  myFunction3.apply( obj2, arr );

})();