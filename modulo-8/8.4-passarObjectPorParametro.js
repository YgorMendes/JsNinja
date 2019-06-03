// Passando obejetos por parametros
// Exp:

let car = {
  color: 'black'
};

function getCarColor(myCar){
  return myCar.color;
};
console.log(getCarColor(car));

// Tmb podemos passar funções por parametro
// Exp:

function showOtherFunction(func){
  return func();
};

function returnFunc(){
  return 'return func'
};

console.log(showOtherFunction(returnFunc));
//

  

console.log(showOtherFunction(function(){
  return 'Ninja Js'
}));  