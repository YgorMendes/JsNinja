(function(){

  'use strict';

  function sum(){
    return Array.prototype.reduce.call( arguments, function(acumulado, item){
      return acumulado + item;
    } );
  };
  console.log( sum( 1, 3, 5 ,7 ) );

  // debuger clg do navegador 'f12'/ sources/ ctrl-p/

  // clg é um debugger
  // a palavra debugger tmb é um 'debugger' e aond ele tiver vai ser criado um 'brack point'

  // codigo inperativo n funcional

  console.time( 'Calculando o tempo de for' ); // mostra o tempo de exexução
  for( let i = 0; i < 10; i++ ){
    console.log('contagem...', i);
  };
  console.timeEnd( 'Calculando o tempo de for' );
  //

  let arr = [
    { item:'Arroz', prece: 'R$ 10' },
    { item:'Feijão', prece: 'R$ 8' },
    { item:'Frango', prece: 'R$ 20' }
  ];
  console.table( arr ); // mostra uma tabela no clg do navegador
})();