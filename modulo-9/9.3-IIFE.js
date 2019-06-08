// Função auto executável.
// Exp:

(function(){ // Função auto executada, agoara ela passa a ser uma expressão
  console.log(1 + 1);
}());
// Vantagens: Forçar um escopo local e não compartilhar a informação a outros arquivos Js. Fica mais controlada a informação/Valor
let obj = { // Função executada dentro de um objeto
  prop: function(){
    return 1 + 9;
  },
};

console.log(obj.prop());

// Função anônima não é possível ser executada

// function(){
//   return 1 + 1;
// };

// console.log(function());