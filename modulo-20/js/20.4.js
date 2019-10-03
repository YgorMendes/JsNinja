(function( win, doc ){

  'use strict'
  
  // let $inputUsername = doc.querySelector( '#username' );
  // console.log( $inputUsername );

  // let $inputPassword = doc.querySelector( '#password' );
  // console.log( $inputPassword );

  // // chamar os valores dos inputs
  // console.log( $inputUsername.value );
  // console.log( $inputPassword.value );
  // //

  // // 'getter' e 'setter'
  // // 'getter' ele pega o valor
  // // setter ele seta o valor

  // $inputUsername.value = 'Digite seu nome'; // setter
  // $inputPassword.value = 'Digite sua senha';
  // console.log( $inputUsername.value ); // getter
  // console.log( $inputPassword.value );
  //

  //Eventos
  let $button = doc.querySelector( '#button' );

  $button.addEventListener( 'click', function( event ){
    event.preventDefault(); // evita o evento padrão
    console.log('click no botão');
  }, false );







})( window, document );