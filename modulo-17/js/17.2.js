(function(){
  // termos do Macth

  let texto = 'a23sdj aKdja o tp4 ASkasdl pwj nf ámvcv4açlr pyry nmns ça áwẃq ]vmcxvm90nmbaj orygr '

  // '\w' 
  console.log(texto.match(/\w/)); // pega todo tipo de caracteres
  console.log(texto.match(/\w/g)); // pega todo tipo de caracterers global

  // '\d'
  console.log(texto.match(/\d/)); // 'pega o primeiro digito
  console.log(texto.match(/\d/g)); // pega todos os digitos
  console.log(texto.match(/\d\d/)); // pega dois primeiros digitos juntos
  console.log(texto.match(/\d\d/g)); // pega todos os dois digitos juntos

  // '|'
  console.log(texto.match(/a|o/)); // busca o primeiro 'a' ou o primeiro 'o'
  console.log(texto.match(/a|o/g)); // busca todos os 'a' e todos os 'o'

  // '[]'
  console.log(texto.match(/[ao]/)); // busca o primeiro 'a' ou o primeiro 'o'
  console.log(texto.match(/[ao]/g)); // busca todos os 'a' e todos os 'o'

  // '[-]'
  console.log(texto.match(/[a-z]/)); // qlq primeiro caracter de 'a-z' minusculos
  console.log(texto.match(/[a-z]/g)); // todos os caracteres de 'a-z' minusculos

  console.log(texto.match(/[0-9]/)); // qlq primeiro caracter de número de '0-9'
  console.log(texto.match(/[0-9]/g)); // todos os caracteres de números de '0-9'
  
  console.log(texto.match(/[a-zA-Z0-9]/g)); // todos os caracteres de letras e
  //numeros maiusculas e minusculas
})();