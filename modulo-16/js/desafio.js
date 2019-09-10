(function(){
  let name = 'Ygor';
  console.log( 'As letras do seu nome:' );
  
  for(let i = 0, len = name.length; i < len; i++){
    console.log(name.charAt(i) + ' é a '+ (i + 1)  + 'ª letra do meu nome.'); 
  };
  // Finalizado

  let fullName = 'ygor-mendes';
  console.log( '\nNome convertido à partir de um slug:' );

  let newFullName = fullName.split('-').map(function(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
  console.log(fullName);
  console.log(newFullName.join(' '));
  // Finalizado

  let irmaos = ['Isaías', 'Vanessa', 'Gabriel', 'Henrique'];
  let phrase = irmaos.reduce(function(acumulado, atual, index){
    let separador = irmaos.length - 1 === index ? ' e ': ', '
    return acumulado + separador + atual;
  }).concat(' São meus irmãos')
  console.log(phrase);
  // Finalizado

  console.log( '\nEra "Roberto", agora é:' );
  console.log('Roberto'.replace('to', 'ta'));
  // Finazlizado

  console.log( '\nParte de uma string:' );
  console.log('Ygor Mendes'.substring(11, 5));
  // Finalizado

  let myName = 'Ygor'
  let newMyName = [];

  for(let i = 0, len = myName.length; i < len; i++){
    newMyName.push(i % 2 === 0 ? myName[i].toUpperCase() : myName[i].toLowerCase())
  };
  console.log(newMyName.join(''));
})();