(function( win, doc ){

  'use strict'
  //

  // pegar pelo nome
  console.log( doc.getElementsByName( 'username' ) );
  console.log( doc.getElementsByTagName( 'input' ) );

  // Quando formos criar uma variável que envolva algum elemento de DOM normalmente usamos um sifrão '$' antes do nome
  let $inputs = doc.getElementsByTagName( 'input' );
  console.log( $inputs.length );
  //

  // Modo de trazer a primeira tag encontrada
  $inputs = document.querySelector( 'input' );
  console.log($inputs);

  // Modo de trazer todas as tags encontradas
  $inputs = document.querySelectorAll( 'input' );
  console.log($inputs);
  // não causam efeito colateral
  //

  // maneira de pegar tags pelo 'id' e pela 'class'
  $inputs = document.querySelectorAll( '#formulario' );
  console.log( $inputs );

  $inputs = document.querySelectorAll( '.inputsClass' );
  console.log( $inputs );



})( window, document );