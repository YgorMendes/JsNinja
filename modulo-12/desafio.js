(function(){

let person = {
  name: 'Ygor',
  lastname: 'Mendes',
  age: 21
};
console.log(Object.keys(person)); 
// Finalizado

let books = [];

books.push(
  obj1 = {
    name: 'livro1' ,
    pages: '1' 
},
obj2 = {
  name: 'livro2' ,
  pages: '2' 
},
obj3 = {
  name: 'livro3' ,
  pages: '3' 
});
console.log(books);
// Finalizado

console.log(books.pop());

console.log(books);
// Finalizado

JSON.stringify(books);
console.log(books);

// JSON.parse(books);
// console.log(books);
// Finalizado

for(let i = 0; i < Object.keys(books).length; i ++){
  for(let prop in books[i]){
    console.log(prop + ': ' + books[i][prop]);
  }
}
// Finalizado

let myName = ['Y', 'g', 'o', 'r', ' ', 'M', 'e', 'n', 'd', 'e', 's'];
console.log(myName.join(''))
// Finalizado

console.log(myName.reverse());
console.log(myName.join(''))
// Finalizado

console.log(myName.sort());
console.log(myName.join(''))
// Finalizado

}());