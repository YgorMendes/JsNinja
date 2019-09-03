(function(){
  
  let myObject = {
    myProperty: 1,
    init: function init(){
      return this; // retorna o objeto ond ele c encontra 'myObject' ele é uma referência do objeto
    }
  };
  console.log(myObject.init());
  //

  let myObject2 = {
    property: 1,
    init: function init(){
       return this.property; // retorna o objeto ond ele c encontra 'myObject' ele é uma referência
      // do objeto
    }
  }
  console.log(myObject2.init());
  //

  function myFunction(){
    return this;
  };
  console.log(myFunction()); // quando a function n for uma propiedade de um objeto, o this vai ser
  // referência do window
  console.log(myFunction() === window) // true
  //

  // Criando meu propio construtor

  function MyConstructor(){ // padrão de criar construtores: smp deixar a primeira letra maiúscula
    this.prop1 = 'prop1';
    this.prop2 = 'prop2';
  };
  // console.log(prop1); // da erro por que prop1 não foi definido

  let constructor = new MyConstructor();
  console.log(MyConstructor());
  console.log(prop1); // agora funciona porque, transformamos 'MyConstructor' em um construtor
  // e agora prop1 virou global 'window'

})();