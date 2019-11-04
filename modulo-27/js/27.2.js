(function(doc){

  'use strict'

  

  function afterDomContentLoaded() {
    let $tituloPrincipal = doc.querySelector('.principal');
    let $tituloSecundario = doc.querySelector('.secundario');
    let $contant = doc.querySelector('.contant');
    let $contant2 = doc.querySelector('.contant2');
    let $contant3 = doc.querySelector('.contant3');

    // sempre quando for modificar inserir ou manipular elementos da DOM, Fragmente primeiro para ter mais desempenho

    let fragment = doc.createDocumentFragment(); // ele é um involtorio, o conteúdo dele é q vai ser mexido
    let childP = doc.createElement('p');
    let textChildP = doc.createTextNode('Novo texto da tag  "P"!');

    childP.appendChild(textChildP);
    fragment.appendChild(childP);

    doc.body.appendChild(fragment);  
  }

  function afterWindowLoad() {
    alert('afterWindowLoad');
  }

  doc.addEventListener('DOMcontentLoaded', afterDomContentLoaded, false); // espera todo conteudo do DOM ser carregado, e se o script do html estiver no head ele não vai dar erro, porem ele não carrega elementos src tipo imagens videos e outros

  window.addEventListener('load', afterWindowLoad,false); // ele espera tudo carregar e depois faz oq tem q ser feito

})(document);