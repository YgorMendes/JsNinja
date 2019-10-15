(function(win, doc){

  'use strict';

  let $visor = doc.querySelector( '[ data-js="visor" ]' );
  let $btnNumber = doc.querySelectorAll( '[ data-js="number" ]' );
  let $btnOperation = doc.querySelectorAll( '[ data-js="operation" ]' );
  let $btnCe = doc.querySelector( '[ data-js="zerar" ]' );
  let $btnResolution = doc.querySelector( '[ data-js="resolution" ]' );

  function initialize(){
    initEvents();
  };

  function  initEvents(){
    Array.prototype.forEach.call( $btnNumber, function( btn ){
      btn.addEventListener( 'click', btnNumberClick, false );
    });
    Array.prototype.forEach.call( $btnOperation, function( btn ){
      btn.addEventListener( 'click', btnOperationClick, false );
    });
    $btnCe.addEventListener( 'click', btnCeClick, false );
    $btnResolution.addEventListener( 'click', btnResolutionClick, false);
  };
  
  function btnNumberClick(){ // botões de numeros
    $visor.value += this.value;
  };

  function btnOperationClick(){ // botoes de operações
    $visor.value = removerUltimaOperacao($visor.value);
    $visor.value += this.value;
  }

  function btnCeClick(){ // botão zerar
    $visor.value = 0;
  };

  function operationEnd( number ){
    let operations = getOperations();
    let lastItem = number.split('').pop();
    return operations.some( function( operator ){
      return operator === lastItem;
    });
  };

  function getOperations(){
    return Array.prototype.map.call( $btnOperation, function( btn ){
      return btn.value;
    });
  };

  function removerUltimaOperacao( string ){
    if( operationEnd( string) ){
      return string.slice( 0, -1 );  
    };
    return string;
  }

  function btnResolutionClick(){
    $visor.value = removerUltimaOperacao( $visor.value );
    let allValues = $visor.value.match(getRegexOperations() );
    $visor.value = allValues.reduce( calcularTodoValor );
  }

  function getRegexOperations(){
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g' );
  }

  function calcularTodoValor( accumulated, actual ) {
    var firstValue = accumulated.slice( 0, -1 );
    var operator = accumulated.split('').pop();
    var lastValue = removerUltimaOperacao( actual );
    var lastOperator = operationEnd( actual ) ? actual.split('').pop() : '';
    return doOperation( operator, firstValue, lastValue ) + lastOperator;
    
  };

  function doOperation( operator, firstValue, lastValue ){
    switch( operator ) {
      case '+':
        return Number( firstValue ) + Number( lastValue );
      case '-':
        return Number( firstValue ) - Number( lastValue );
      case '*':
        return Number( firstValue ) * Number( lastValue );
      case '/':
        return Number( firstValue ) / Number( lastValue );
    };
  };

  initialize();

})(window,document);