(function(){
  numberObjects = [];
  for(let i = 1; i <= 10; i++ ){
    numberObjects.push({number: i});
  };
  console.log( 'Number Objects Array:' );
  console.log(numberObjects);
  //

  let justNumbers = numberObjects.map(function(item){
    return item.number;
  });
  console.log( '\nJust Numbers:' );
  console.log(justNumbers);
  //

  let justMod2Or3 = justNumbers.filter(function(item){
    return item % 2 === 0 || item % 3 === 0;
  });
  console.log( '\nJust module of division by 2 or 3:' );
  console.log(justMod2Or3);
  //

  let operation = justMod2Or3.reduce(function(acumulado, atual){
    return (acumulado + 1) * atual;
  }, 0);
  console.log( '\nOperation:' );
  console.log(operation);
  //

  let operation2 = justMod2Or3.reduceRight(function(acumulado, atual){
    return (acumulado + 1) * atual;
  }, 0);
  console.log( '\nOperation2:' );
  console.log(operation2);
  //

  console.log(6 * 7 + ( 135 / 3 ) - 10); // Davison = 77
  //

  let name = ['y', 'g', 'o', 'r'];
  let reduce = name.reduce(function(acumulado, atual){
    return acumulado + 'p'  + atual;
  }, '');
  console.log( '\nSeu nome na língua do "P":' );
  console.log(reduce);
  //

  let inversedName = name.reduceRight(function(acumulado, atual){
    return acumulado + atual;
  });
  console.log( '\nInversed Name:' );
  console.log(inversedName);
  //

  console.log( '\nNumber objects' );
  console.log(numberObjects);
  //

  console.log( '\nExiste um {number: 2} em numberObjects?' );
  let obj = numberObjects[1]; 
  numberObjects.indexOf(obj) > -1 ?
  console.log('Existe um objeto {number: 2}) em numberObjects') :
  console.log('Não existe um objeto {number: 2} em numberObjects')
  //

  numberObjects.lastIndexOf(obj) > -1 ?
  console.log('Existe um objeto {number: 2}) em numberObjects') :
  console.log('Não existe um objeto {number: 2} em numberObjects')
  //

  console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
  if(Array.isArray(justMod2Or3)){
    console.log(justMod2Or3.toString());
  }  
})();  