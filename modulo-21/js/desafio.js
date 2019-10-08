(function(win, doc){

  'use strict'

  let $timer = doc.querySelector( '[data-js="time"]' );
  let $buttonStart = doc.querySelector( '[data-js="start"]' );
  let $buttonStop = doc.querySelector( '[data-js="stop"]' );
  let $buttonReset = doc.querySelector( '[data-js="reset"]' );
  let interval;

  $buttonStart.addEventListener( 'click', startTimer, false );
  $buttonStop.addEventListener( 'click', stopTimer, false );
  $buttonReset.addEventListener( 'click', resetTimer, false );

  function startTimer(){
    $timer.value ++;
    interval = setTimeout( startTimer, 1000 );
  };
  
  function stopTimer(){
    interval =  clearTimeout( interval ); // faz parar o setTimeout
  };

  function resetTimer(){
   $timer.value = 0;
   stopTimer();
  };

})(window, document);