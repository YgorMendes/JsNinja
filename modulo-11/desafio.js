(function(){
let once = false;

do{
  console.log('Entrou ao menos uma vez');
} while(once);
// Finalizado

let person = {
  name: 'Ygor', 
  age: 21,
  weight: 65,
  birthday:'29/04/1998' 
};

let counter = 0;
for(let prop in person){ // for in percorre um objeto
  console.log('The of ' + prop + ' person is ' + person[prop]);
  counter ++;
};
console.log('The person has ' + counter + ' properties');
// Finalizado

function moreThan(age){
  return person.age > age;
};

console.log('The person has more than 25 years old?', moreThan(10));
// Finalizado

let numbers = []

for(let i = 0; i < 20; i++){
  if (i > 10){
    break;
  };
  numbers.push(i);
};
console.log(numbers);
//

numbers = [];

for(let i = 0; i <= 20; i ++){
  if(i % 2 === 1){
    continue;
  };
  numbers.push(i);
};
console.log(numbers);

}()); 