// Return é um salto de instruções
// Break tmb
// Continue tmb

for(let numeros1 = 0; numeros1 <= 10; numeros1++ ){
  if(numeros1 === 5){ // Break para no 5, e não le mais as outras instruções
    break;
  };
  console.log(numeros1);
};

for(let numeros2 = 0; numeros2 <= 10; numeros2++ ){
  if(numeros2 === 5){ // continue pula o 5, e continua lendo as outras instruções
    continue;
  };
  console.log(numeros2);
};
