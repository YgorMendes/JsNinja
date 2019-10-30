(function(){

  'use strict'

  let $tituloPrincipal = document.querySelector('.principal');
  let $tituloSecundario = document.querySelector('.secundario');
  let $contant = document.querySelector('.contant');
  let $contant2 = document.querySelector('.contant2');
  let $contant3 = document.querySelector('.contant3');

  // metodos

  // .removeChild(child)
  // $contant2.removeChild($tituloPrincipal); // remove os elementos da DOM

  // .replaceChild(new,old)
  // $contant.replaceChild($contant2, $contant3); // troca o lugar dos elementos excluindo o segundo elemento passado por parametro e não mantem o primeiro elemento em seu lugar real

  // trocar elementos deixando o primeiro em seu lugar real
  // let $cloneContant2 = $contant2.cloneNode(true);
  // $contant.replaceChild($cloneContant2, $contant3); // trocou os elementos mas manteve o msm em seu lugar real

  // .createTextNode(text) , metodo de document
  // let newText = document.createTextNode('novo texto'); // cria novo texto
  // $contant.appendChild(newText);

  // document.createElement(tagName)
  let newText = document.createTextNode('novo paragrafo');
  let $newP = document.createElement('p');  // cria elemento, e vc pode manipula-lo tmb
  $newP.appendChild(newText);
  $contant.appendChild($newP);


})();