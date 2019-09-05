(function(){
   
  // contar os caracteres de um array
  let ygor = new String('Ygor Mendes');
  console.log(ygor.length);
  console.log('Ygor Mendes'.length);
  //

  // charAt(index) diz qual é o caracter passado no indice
  console.log(ygor.charAt(0));
  console.log('Ygor Mendes'.charAt(5));
  //

  // concat() concatena as strings, igual aos arrays
  console.log(ygor.concat(' é ', 'o ', 'meu ', 'nome')); // a variável continua com o msm valor
  console.log('Ygão '.concat(' é ', 'o ', 'meu ', 'apelido'))
  //

  // indexOf() verifica se a dentro da string, igual aos arrays
  console.log(ygor.indexOf('Mendes')); // o 'Mendes' começa apartir do indice '5'
  console.log('YGÃO'.indexOf('Ã')); // c encontra no indice '2'
  console.log('YGÃO'.indexOf('Ñ')); // n c encontra nessa string
  //

  // lastIndexOf() a msm coisa sóq ele verifica de trás para frente
  //

  // replace() ele substitui uma caracter de uma string por outra
  console.log(ygor.replace('Y', 'Hi')); // troca os caracteres mas n muda a variável principal
  //

  // slice() pega os caracteres a partir de um indice passado
  console.log(ygor.slice(5)); // retorna o 'Mendes', n modifica a variável principal
  console.log(ygor.slice(2, 7)); // retorna 'or Me'
  //

  // split() quebra a string e a trasforma em um array
  console.log(ygor.split()); // c n passar nenhum valor, ele retornará a string inteira dentro de
  // um array
  console.log(ygor.split(' ')); // devera retornar um array com 'Ygor' e 'Mendes' ele remove o
  // caracter passado e split, n modifica a variável principal
  //

  let arrYgor = ygor.split(' '); // fazer um arrai tirando o spaço do primeiro e segundo nome
  // tendo dois valores 'Ygor' e 'Mendes'
  console.log(arrYgor);
  console.log(arrYgor.join(' ')); // fazer um arrai juntando o nome de novo e formando
  // a string 'Ygor Mendes'
  //
  
  // substituir o msm caracter em massa de uma string
  console.log(ygor.split('e').join('MADRID')); // todas as letras 'e' serão substituidas por
  // 'MADRID 

})();