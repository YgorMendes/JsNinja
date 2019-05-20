// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
// Qual o valor atualizado dessa variável?
// Declare uma nova variável, sem valor.
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
// Invoque a função criada acima.
// Qual o retorno da função? (Use comentários de bloco).
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
// Invoque a função criada acima, passando só dois números como argumento.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

const soma  = (a, b) => a + b
let res = soma(2,3) + 5
console.log(res) // 10
let pi  
const addVal = () => {
   pi = 3.14
   console.log(`O valor da variável agora é ${pi}`)
}
addVal() 
/**
 *  O valor da variável agora é 3.14
 */
const func = (a,b,c) => {
   let res = 0
   if(!(!!a && !!b && !!c)){
      console.log('Preencha todos os valores corretamente!')
   }else{
      res = (a * b * c) + 2
      console.log(res)
   }
}
func(pi, 2)
/*
   Preencha todos os valores corretamente!
*/
func(2,2, 2) // 10


const fun = (a,b,c) => {
   if(a && b && c){
      return (a + b) / c
   }else if(a && b && !c){
     return a + b
   }else if(a || b || c){
      return a || b || c
   }else if(!((a && b && c))){
      return false
   }else{
      return null
   }
}

console.log(fun())   // false
console.log(fun('isaias')) // isaias
console.log(fun(null,'mendes')) // mendes
console.log(fun(500, 500)) // 1000
console.log(fun(2000, 2000, 5)) // 800

// voltar da aula 16 do modulo 3
