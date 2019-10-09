(function(){

  'use strict';

  let pessoa1 = {
    name: 'Nome1',
    lastName: 'Sobrenome1'
  };

  let pessoa2 = {
    name: 'Nome2',
    lastName: 'Sobrenome2'
  };
  // Finalizado

  console.log( 'O nome das pessoas é:' );
  function getFullName(){
    return this.name + ' ' + this.lastName; 
  };

  console.log( getFullName.call( pessoa1 ) );
  console.log( getFullName.call( pessoa2 ) );
  // Finalizado

  function sum(){
    console.log( arguments );
    return Array.prototype.reduce.call( arguments, function( acumulado, atual ){
      return +acumulado + +atual;
    } );
  };

  console.log( '\nSomar alguns números:' );
  console.log( sum( 10, 10, 10, 10 ) );
  console.log( sum( 15, 15, 0, 10 ) );
  console.log( sum( 7, 3, 20, 10 ) );
  // Finalizado

  console.log( '\nEntrada do usuário:' );
  let userEntry = prompt( 'Entre com alguns números que serão somados:' )
  console.log( userEntry );
  // Finalizado

  console.log( '\nFunção que limpa entrada do usuário (somente números):' );
  function justNumbers( entry ){
    return entry.replace( /\D+/g, ',' ).split( ',' );
  }
  console.log( justNumbers( '1 asd32a1sd 4as d5' ) );
  // Finalizado

  console.log( '\nEntrada do usuário limpa. Somente números:' );
  let numbers = justNumbers( userEntry );
  console.log( numbers );
  // Finalizado

  console.log( '\nSomar números entrados pelo usuário:' );
  console.log(sum.apply( sum, numbers ));

})();