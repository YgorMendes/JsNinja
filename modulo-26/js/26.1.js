(function(){

  'use strict'

  let $tituloPrincipal = document.querySelector('.principal');

  console.log($tituloPrincipal.parentNode); // trá o pai
  console.log($tituloPrincipal.childNodes); // retorna um node list
  // quebras de linha tmb são contadas como filhos
  // e textos soltos tmb

  // .parentNode
  // .childNodes
  // .firstChild
  // .lastChild
  // .nextSibling
  // .previousSibling

  console.log($tituloPrincipal.firstChild); // trás o primeiro filho
  console.log($tituloPrincipal.lastChild); // trás o ultimo filho
  console.log($tituloPrincipal.nextSibling); // a tag irmão, a seguint tag
  console.log($tituloPrincipal.previousSibling); // a tag irmão, a tag anterior

})();