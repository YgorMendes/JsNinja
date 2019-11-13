(function(){

  'use strict'

  // .nodeType
  // .nodeValue
  // .nodeName

  let $tituloPrincipal = document.querySelector('.principal');

  console.log($tituloPrincipal.nodeType); // é 1
  // document é tipo 9
  // elementos html é tipo 1
  // text é tipo 3
  // comments tipo 8
  // documentFragment = 11

  console.log($tituloPrincipal.firstChild.nodeValue); // mostra o valor da tag
  console.log($tituloPrincipal.firstChild.nodeName); // mostra o tipo, c for tag vai ser o nome dela, c for somente um texto vaui ser apenas #text, e se for comentario vai ser #comit

  // verificar no site c as propriedades são suportadas no browser
  // htpp:// caniuse.com

})();