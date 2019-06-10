// Valores primitivos não são objetos
// Se tiver propiedades e métodos é um Objeto, se não, não é um objeto

// Maneira de transformar um valor primitivo em objeto
// Exp:

let num = new Number(30);
console.log(num);// Agóra 30 passa a ser um objeto
console.log(num.valueOf());// E passa a ter propiedades tmb 'como um objeto'

// Tmb é possível transformar valores de um para o outro
// Exp:

let value1 = String(30);

console.log(value1); // agora 30 é um valor string

let value2 = Number('30');

console.log(value2); // agora '30' é um valor number