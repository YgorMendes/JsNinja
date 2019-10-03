(function(){

  // metodos de string q podemos usar o regex

  // .match
  console.log('Ygor'.match( /gor/ )); // ele retorna um array c encontrar oque procuramos, ou null c n encontrar

  // .replace
  console.log('Ygor'.replace( /Y/,'hy' )); // ele procura e retorna oq vc modificar

  // .split
  console.log('yg.or'.split( '.' )); // aond ele achar oq estiver procurando vai retirar e transformar em array, com itens separadamente
  console.log('Ygor'.split( /\w/ )); // ond tiver qlq caracter alfa numerico ele vai excluir e fazer um array, com itens separadamente

  // .search
  console.log('Ygor'.search( /g/ )) // mostra o indice doq esta procurando
})();