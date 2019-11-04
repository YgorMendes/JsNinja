(function(){

  'use strict'

  let $tituloPrincipal = document.querySelector('.principal');
  let $tituloSecundario = document.querySelector('.secundario');
  let $contant = document.querySelector('.contant');
  let $contant2 = document.querySelector('.contant2');
  let $contant3 = document.querySelector('.contant3');

  // sempre quando for modificar inserir ou manipular elementos da DOM, Fragmente primeiro para ter mais desempenho

  let fragment = document.createDocumentFragment(); // ele é um involtorio, o conteúdo dele é q vai ser mexido
  let childP = document.createElement('p');
  let textChildP = document.createTextNode('Novo texto da tag  "P"!');

  childP.appendChild(textChildP);
  fragment.appendChild(childP);

  document.body.appendChild(fragment);

})();