// escopo local e escopo goblal

/* sempre quando for declarado uma variavel fora de função, essa variavel esta sendo declarada no escopo Global. */ 

/* sempre quando for declarado uma variavel dentro de unma função, essa variavel esta sendo declarada no escopo Local. */ 

let myvar = 1; // variavel escopo local
console.log(myvar);

function myfunction () { // acessivel de todos os lugares
  return myvar;
};
console.log(myfunction());

function otherFunction () {
  let otherVar = true;
  return otherVar;
};
console.log(otherFunction()); // executei a função
console.log(otherVar); // não acessivel fora do escopo, é Local

// e parametros de função tmb são locais e não podem ser acessiveis fora do escopo
function outraFunction (a) {
  return a;
};
console.log(outraFunction(108));
console.log(a); // não acessivel fora do escopo, é Local

// sempre que for criado uma variavel use a palavra chave 'let', caso contrario ela pode ser acessivel em todos os lugarers, alem de poder dar conflito com variaveis ja existentes.