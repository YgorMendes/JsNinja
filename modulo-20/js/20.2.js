(function( win, doc ){

  'use strict'

  // metodo confirm
  let del = confirm( 'Deseja realmente excluir?' );
  if(del)
  console.log( 'Excluida', del );
  else
  console.log( 'Ñ excluida' );
  //

  // DOM
  // Document Object Model
  // Arvore genealogica, estrutura criada a partir de um documento html ou xml
  // Documento principal ou todo nosso documento

  console.log( doc.getElementById( 'texto1' ) );
  console.log(doc.getElementsByTagName( 'h1' ));
  console.log( doc.getElementsByClassName( 'texto2' ) );

})( window, document );