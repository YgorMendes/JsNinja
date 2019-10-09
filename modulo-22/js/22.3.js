(function(){

  'use strict';

  function  myFunction() {
    console.log( arguments );
  }
  console.log( myFunction( 1, 2, 3 ) );
  //

  myFunction = function() {
    console.log( arguments.length );
  }
  console.log( myFunction( 1, 2, 3 ) );
  //

  // myFunction = function() {
  //   arguments.forEach( function( arg ){
     
  //   } ); 
  // }
  // console.log( myFunction( 1, 2, 3 ) ); // n funfa porq ele é um array-like
  //

  myFunction = function() {
   let arr = [ 1, 2, 3, 4 ];
   arr.forEach( function( item ){
    console.log( item );
   } );
  }
  myFunction();
  //

  myFunction = function() {
    for( let i = 0; i < arguments.length; i ++ ){
      console.log( arguments[ i ] );
    };
  };
  myFunction( 1, 2, 3, 4 );
   //

  myFunction = function() {
    Array.prototype.forEach.call( arguments, function( item, index ){
      console.log( item );
    } ); 
  }
  myFunction( 1, 2, 3, 4 );
  // conseguimos estender qlq obj do js, com esse formato

  myFunction = function() {
    Array.prototype.forEach.apply( arguments, [function( item, index ){
      console.log( item );
    }] ); 
  }
  myFunction( 1, 2, 3, 4, );
  //

  // editor config é interessante para padronizar o codigo
  

  


})();