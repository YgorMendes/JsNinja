(function(){

// Retornar os argumentos passado para a função
function myFunction(arg1,arg2){ // ñ precisa escrever o nome dos argumentos na function, ele tmb retorna
  return arguments; // tmb podemos chamar apenas um, EXP: return arguments[1], ele retornaria 1
};
console.log(myFunction(0, 13)); // no console vai retornar '0' e '13' que foram passados no console.log
})();