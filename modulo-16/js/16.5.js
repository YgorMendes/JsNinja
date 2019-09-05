(function(){

  let = meuNome = 'ygor mendes'
  console.log(meuNome.substring(4)); // vai pegar os caracteres apartir do indice passado até o final
  // se n passar o outro valor onde diz ond deve parar
  console.log(meuNome.substring(0, 4)); // dev retornar 'gor'
  console.log(meuNome.substring(11, 0)) // dev retornar o meuNome completo, aceita tirar os caracteres
  // do indice maior para o menor, de trás para frente, sem inverter os caracters
  //

  // towLoweCase() deixar todos os caracteres em minúsculo
  console.log(meuNome.toLowerCase()); // n modifica a variável principal
  // towUpperCase() deixar todos os caracteres em maiúsculo
  console.log(meuNome.toUpperCase());// n modifica a variável principal
  //
  
  // primeira letra maíúscula e as demais minuscula
  let newMeuNome = meuNome.charAt(0).toUpperCase()
  + meuNome.slice(1, 4)
  + ' '
  + meuNome.charAt(5).toUpperCase()
  + meuNome.slice(6); // deve retornar as primeiras letras de cada nome e deixalas
  // maiúsculas 'Ygor Mendes'
  console.log(newMeuNome);

})();