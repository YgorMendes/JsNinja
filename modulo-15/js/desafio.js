(function(){

  function Person(name, lastName, age){ // parametros
    // propiedades
    this.name = arguments[0];
    this.lastName = arguments[1];
    this.age = arguments[2];

    // métodos
    this.getFullName = function getFullName(){
      return this.name + ' ' + this.lastName;
    };
    this.getAge = function getAge(){
      return this.age;
    };
    this.addAge = function addAge(){
      this.age += arguments[0];
      return this;
    };
  };
  //  Finalizado

  // pessoas criadas com o construtor 'person'
  console.log( 'Novas pessoas criadas à partir de Person:' );
  let ygor = new Person('Ygor', 'Mendes', 21);
  let sergio = new Person('Sergio', 'Ramos', 33);
  let marcelo = new Person('Marcelo', 'Vieira', 31);

  console.log(ygor);
  console.log(sergio);
  console.log(marcelo);
  // FInalizado

  console.log( '\nNomes das pessoas:' );
  console.log(ygor.getFullName());
  console.log(sergio.getFullName());
  console.log(marcelo.getFullName());
  // Finalizado

  console.log( '\nIdade das pessoas:' );
  console.log(ygor.getFullName() + ' tem '+ ygor.getAge() +  ' anos.');
  console.log(sergio.getFullName() + ' tem '+ sergio.getAge() +  ' anos.');
  console.log(marcelo.getFullName() + ' tem '+ marcelo.getAge() +  ' anos.');
  // Finalizado

  console.log( '\nNova idade das pessoas:' );
  console.log(ygor.getFullName() + ' agora tem '+ ygor.addAge(19).getAge() +  ' anos.');
  console.log(sergio.getFullName() + ' agora tem '+ sergio.addAge(7).getAge() +  ' anos.');
  console.log(marcelo.getFullName() + ' agora tem '+ marcelo.addAge(9).getAge() +  ' anos.');
})();