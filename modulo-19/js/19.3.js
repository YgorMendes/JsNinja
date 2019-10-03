(function(){
 
  // construtor RegExp()
  let regex = new RegExp( 'Y' );
  console.log( regex );
  console.log( 'Ygor'.match( regex ) );

  // métodos de REGEXP
  //

  // .test(string)
  let name = 'Ygor123'
  console.log( /\d/.test( name ) ); // procura se em 'name' tem digitos e retorna true ou false

  // .exec(string)
  regex = /\d/g
  console.log( regex.exec( name ) );
  console.log( regex.exec( name ) ); 
  console.log( regex.exec( name ) );  // mostra o primeiro caracter correspondente com a pesquisa, ou seja o primeiro digito procurado e ele vai fazer um loop até n ter mais nenhum digito, executa varias vezes a string e retorna o requerido pesquisadp
  
  // caracteres especiais são aceitos em string
  // pode escapar as aspas com a barra invertida
})();