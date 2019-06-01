// funções são objetos de primeira classe, ou cidadões de primeira classe

function person(){
  return {
    name: 'Ygor',
    lastName: 'Mendes'
  };
};
console.log(person());


function persona(){
  let info = {
    name: 'Ygor',
    lastName: 'Mendes'
  };
  return info
};
console.log(persona());
console.log(persona().name);
console.log(persona().lastName);