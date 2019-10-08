(function(){

  'use strict'

  // o modo sincrono bloqueia as ações do usuario enquanto ñ for terminado

  // event loop ele joga os eventos numa fila

  console.log( 'inicio' );
  setTimeout(function(){
    console.log( 'executou setTimeout' ); // é executado depois porq é Asincrono
  }, 1000); // 1000 é um segundo
  console.log( 'fim' );
  //

  // setInterval(function(){
  //     console.log( 'executou setInterval' );
  // }, 1000) // a cada 1 segundo ele irá executar a função

  let counter = 0;
  function timer(){
    console.log( 'Timer', counter++ );
    if( counter > 7 )
    return; // o return 
    setTimeout( timer, 1000 );
  };
  timer();

})();