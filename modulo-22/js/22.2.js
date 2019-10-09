(function(){

  'use strict';

  function MyFunction( name, lastName ){
    this.fullName = name + ' ' + lastName; // this agora é MyFunction
  }
  let ygor = new MyFunction( 'Ygor', 'Mendes');
  console.log(ygor.fullName);
  //

  function MyFunction2( name, lastName ){
    this.name = name;
    this.lastName = lastName;
    // this.age = 15; essa propiedade tem mais importância doq a criada a baixo, então ela seria lida e na a de valor '21'
  }

  MyFunction2.prototype.fullName = function(){
    return this.name + ' ' + this.lastName;
  }

  MyFunction2.prototype.age = 21; // tem como adicionar uma propiedade, e sobreescreve-la

  let nomeCompleto = new MyFunction2( 'Ygor', 'Mendes');
  console.log( nomeCompleto.fullName() );
  //

})();