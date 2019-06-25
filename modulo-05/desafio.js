let espanha = ['Melhor seleção', true, 11, 'Sergio Ramos', 'Dani Carvajal', 'Marco Asensio'];

function retornaArray(arr){
 return arr;
};
console.log(retornaArray(espanha)[1]);
// Finalizado

function madrid(arg1, arg2){
  return arg1[arg2];
};
console.log( madrid(espanha,3));
// Finalizado

let numeros = [null, true, 0,'string1', undefined];
console.log(retornaArray(numeros));
// Finalizado

function book(nomeLivro){
  let livros = {
    'livro1': {
      quantidadePag: 10,
      autor: 'Autor1',
      editora: 'Editora1'
    },
    'livro2': {
      quantidadePag: 15,
      autor: 'Autor2',
      editora: 'Editora2'
    },
    'livro3': {
      quantidadePag: 20,
      autor: 'Autor3',
      editora: 'Editora3'
    }
  };
  
  return !nomeLivro ? livros : livros[nomeLivro];
  
};
console.log(book('livro2')); // Imprimir  o 'livro2'
console.log(book('livro2')); // Imprimir todos os livros

let bookName = 'livro2';
console.log('O livro ' + bookName + ' tem ' + book(bookName).quantidadePag + ' páginas');// maneira de facilitar a codação
// Finalizado

console.log('O autor do livro3 é o ' + book('livro3').autor);
console.log('O livro1 foi publicado pela editora ' + book('livro1').editora);
// Finalizado
