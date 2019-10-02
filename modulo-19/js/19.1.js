(function(){

  // inicio de string '^'
  console.log('Ygor'.match( /^Y/) );
  // verifica se existe um 'Y' no inicio da string, se n tiver retorna null

  // fim de string '$'
  console.log('Ygor'.match( /r$/ ));
  // vrifica se minha string termina com 'r', se n retorna null

  // flag 'm' multiline
  console.log(
  'Ygor\nyorgut\nYahoo'.match( /^y/gmi ))
  // verifica se cada linha começa com 'y|Y', se n retorna null

  // repetição ñ gulosa '?'
  "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
  // /(<\w+>).+(<\/w+>)/g // repetição gulosa
  // /(<\w+>).+?(<\/w+>)/g repetição ñ gulosa

  // somente agrupamento sem capturar (?:)
  console.log('junho e julho'.match( /ju(n|l)ho/g )); //agrupa e captura
  console.log('junho e julho'.match( /ju(?:n|l)ho/g )); //agrupa e n captura
  
  // referência dentro de regex '\1, \2'
  console.log("<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>".replace(
    /<(\w+)>.+<\/(\1)>/g, '<$1>O texto dentro da tag "$1" é "$2"</$1>\n' 
  ));
  // garante que o abrimento e fechamento das tags sejam a msm

})();