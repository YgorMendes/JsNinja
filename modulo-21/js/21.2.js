(function(win, doc){

  'use strict'

  // diferenças do setInterval e setTimeout recursivo

  // let counter = 0;
  // function timer(){
  //   console.log( 'Timer', counter++ );
  //   if( counter > 7 )
  //   return; // o return faz parar
  //   setTimeout( timer, 1000 );
  // };
  // timer();

  // O setTimeout vai colocando na fila enquanto as outras coisas são feitas
  // Enquanto o setInterval faz tudo oq ele tem que fazer

  // recomendação usar o setTimeout

  // metodos

  let counter = 0;
  let $button = doc.querySelector( '[data-js="button"]' );
  let temporizador;
  function timer(){
    console.log( 'timer', counter++ );
    if( counter > 20 )
    return; // o return faz parar
    temporizador = setTimeout( timer, 1000 );
  }
  timer();

  $button.addEventListener( 'click', function(){
    clearTimeout( temporizador ); // para o seTimeout
  }, false );

})(window, document);