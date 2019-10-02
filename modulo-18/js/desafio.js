(function() {

  let cpfs = [
    '049-214 3421-1,',
    '210.458.522-05',
    '735 500 794 - 22',
    '101.123-131x32'
  ];

  function cleanCPF( cpf ) {
    return cpf.replace( /\D/g, '' );
  };

  console.log( 'Limpando CPFs:' );

  cpfs.forEach(function( cpf ) {
    console.log( cleanCPF( cpf ) )
  }); 
  // Finalizado

  console.log( '\nFormatando CPFs corretamente:' );

  cpfs.forEach( function ( cpf ) {
    console.log(cleanCPF ( cpf ).replace( /(\d{3})(\d{3})(\d{3})(\d{2})/,
      function( regex, arg1, arg2, arg3, arg4 ) {
        return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;    
    }));
  });
// FInalizado

console.log( '\n Match com as palavras "junho" ou "julho"' );

console.log("Os meses de janeiro, junho e julho começam com a letra j.".match(
  / ju[ln]ho /g
)); // pega o que achou e transforma em array
// FInalizado

console.log( '\nMatch com a abertura de uma tag HTML:' );

console.log('<div><section><blockquote>Texto <img /></blockquote></section></div>'
.match( /<\w+>/g ));
// FInalizado

console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );

console.log("<div><ul><li></li><li></li><li><span></span></li></ul></div>"
.match( /<\w+><[/]\w+>/g ));
// FInalizado

console.log( '\nFazer replace dos textos das tags:' );
console.log("<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>".replace(
  /<(\w+)>([^<]+)<\/\w+>/g, '<$1>O texto dentro da tag "$1" é "$2"</$1>\n'
));
})();