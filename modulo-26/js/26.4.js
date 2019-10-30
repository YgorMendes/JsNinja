(function(){

  'use strict'

  let $tituloPrincipal = document.querySelector('.principal');
  let $tituloSecundario = document.querySelector('.secao')
  let $contant = document.querySelector('.contant')

  // metodos

  // .appendChild(child)
  // .insertBefore(node, beforeWhom)
  // .cloneNode(boolean)
  // .hasChildNodes()

  // console.log($tituloPrincipal.appendChild($tituloSecundario)); // remove e inseri em outro lugar

  // console.log($tituloPrincipal.insertBefore('elemento que sera inserido no titulo principal antes do elemento a seguir', 'elemento que ficara depois do elemento anterior' ))

  //
  let cloneTituloPrincipal = $tituloPrincipal.cloneNode(true); // true quer dizer que vai copiar o conteudo da tag tmb

  $contant.appendChild(cloneTituloPrincipal);

  console.log(document.querySelectorAll('.principal').length);
  //

  console.log($tituloPrincipal.hasChildNodes()); // verifica c o elemento tem filho/ c tem 'node de textos'

})();