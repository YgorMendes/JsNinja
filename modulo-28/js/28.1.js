(function() {

  'use strict';

  // window.XMLHttpRequest()

  let ajax = new XMLHttpRequest();
  ajax.open('GET', '/');
  ajax.send();
  //

  // ajax.onreadystatechange = function() {};
  // ou;
  ajax.addEventListener('readystatechange', function() { // verifica quando o status mudou
    if(isRequestOk()) {
      console.log('Request ok');
    }
    else{
      console.log('Deu ruim');
    }
    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }
    // console.log('Terminou requisição',ajax.readyState, ajax.status)
  }, false)

  // readyState
  // 0: Não enviado
  // 1: Conexão aberta
  // 2: Headers recebidos
  // 3: Carregando corpo do request
  // 4: concluido

  // status
  // 200 sucesso
  // 403
  // 404 arquivo não encontrado
  // 500
  //

  // manipular
  // responseText
  // responseXML
  //

  // Tratamento de erros

  // try
  // catch

  // ajax.addEventListener('readystatechange', function() {
  //   if (isRequestOk()) {
  //     try {
  //       throw new Error('Mensagem de eoo');
  //     }
  //     catch(e) {
  //       console.log(e);
  //     }
  //   }
  // }, false)

})();