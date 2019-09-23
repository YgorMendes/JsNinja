(function(){
  let texto = 'a23sdj aKdja oa tp4 ASkasdl pwj nf ámvcv4açlr pyry nmns ça áwẃq ]vmcxvm90nmbaj orygr '
  console.log(texto.replace('o', 'O')); // ele só substitui o primeiro 'o' encontrado em 'texto'

  console.log(texto.replace(/o/g, 'O')); // ele substitui todos os 'o' encontrado em 'texto'

  console.log(texto.replace(/(o)/g, '$1--')); // ele continua com o 'o' e concatena com oq colocar ao lado

  console.log(texto.replace(/(o)(a)/g, '-- $1$2 --')); // o '()' agrupa, e faz uma procura
  // '$1' é a primeira procura e '$2'é a segunda procura, os '$' mantem a procura

  console.log(texto.replace(/(o)(a)/g, '-- $& --')); // da na msm que a de cima o '&' mantem todas as procuras

  console.log(texto.replace(/(o)(a)/g, function(){
    console.log('arguments', arguments);
  }));

  console.log(texto.replace(/(o)(a)/g, function(capturaTotal, o, a){
    return (o + a ).toUpperCase();
  })); // Maneira na qual podemos fazer retornar em upperCase ou ao contrario

  console.log('Ygor'.replace(/(\w)/g, function(capturaTotal, letra){
    return letra.toUpperCase();
  }));

  console.log('Ygor'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2){
    return letra1.toUpperCase() + letra2.toLowerCase();
  }));

})();