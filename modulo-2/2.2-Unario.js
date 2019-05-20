// Isso converte os tipos, De string para Number
let num = +'3'
let num2 = -'3'
let str  = +'isaias' // return NaN, Mas no typeof return number 
console.log(typeof num)    // number
console.log(typeof num2)   // number
console.log(typeof NaN)    // number // error
console.log(+'isaias') // NaN

// O sinal + pode ser usado para concatenar
console.log('2' + 5) // 25
console.log(2 + '5') // 25
console.log(2 + 5) // 7

console.log('2' - 5) // -3
console.log(2 - '5') // -3
console.log(2 - 5)   // -3

console.log(typeof [1,2,3] )  // "object"
