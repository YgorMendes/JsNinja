// o que é estrutura lexica
/**
 * Conjunto de regras que vai definir como a linguagem funciona, o que podemos usar,
 * como usar, quais sãos as formas 
**/
// Case sensitive
const bola = 'Basquete'
const bOla = 'Volei'
const boLa = 'Futebol Americano'
const BOLA = 'Futebol'
console.log(bola === BOLA) // false

// Literais - Nada que crie eles
console.log(12, true, 1.2, null, 'ninja', {a:1}, "isaias", [1,2])