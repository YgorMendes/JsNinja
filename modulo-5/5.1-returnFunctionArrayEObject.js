function myFunction(){
  return [1, 2, 3];
};
console.log(myFunction());
console.log(myFunction()[0]); // maneira de chamar um valor dentro do array

function myFunction1(){
  return {
    propiedade1: 'Madrid',
    propiedade2: 0,
    propiedade3: 'España'
  };
};
console.log(myFunction1());
console.log(myFunction1().propiedade3); // maneira de chamar um valor dentro do object