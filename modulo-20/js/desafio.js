(function(win, doc){

  'use strict';

  let userName = prompt( 'Qual é o seu nome?' ) || 'Desconhecido';
  // diminui a quantidade de if 

  // if( !userName )
  //   userName = 'Desconhecido';
  alert( 'Bem vindo '+ userName );
  // Finalizado

  let email = prompt( 'Qual o seu e-mail?' );
  

  let $inputUsername = document.querySelector( 'input[type="text"]' );
  // FInalizado

  let $inputEmail = document.querySelector( '[type="email"]' );
  // Finalizado

  let $message = document.querySelector( 'textarea' );
  // Finalizado

  let $button = document.querySelector( 'button' );
  // Finalizado

  $inputUsername.value = userName;
  $inputEmail.value = email;
  // Finalizado

  $button.addEventListener( 'click', function(event){
    event.preventDefault();
    if( !$inputUsername.value )
      return alert( 'Preencha seu Nome' );
    if ( !$inputEmail.value )
    return alert( 'Preencha seu e-mail' );
    if( !isValidEmail( $inputEmail.value ) )
      return alert( 'Entre com um e-mail válido' );
    if ( !$message.value )
      return alert( 'Preencha a mensagem' );
    if( !confirm( 'Tem certeza que quer enviar o formulário?' ) )
      return alert( 'Não enviado' );
    return  alert( 'Enviado com sucesso!' );
  }, false );
  // Finalizado
  
  function isValidEmail( email ){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test( email );
  };

})(window, document);