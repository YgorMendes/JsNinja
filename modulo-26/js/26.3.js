(function(){

  'use strict'
  
  let $tituloPrincipal = document.querySelector('.principal');

  // .children
  // .firsElementChild
  // .lastElementChild
  // .nextElementSibling
  // .previousElementSibling
  // .childElementCount // .children.length faz a msm coisa

  console.log($tituloPrincipal.children); // não autorizada, ele só trás os 'nos' html
  
  console.log($tituloPrincipal.firsElementChild); // ele trás o primeiro elemento html

  console.log($tituloPrincipal.lastElementChild); // ele trás o ultimo elemento html

  console.log($tituloPrincipal.nextElementoSibling); // trás o irmão seguinte elemento html

  console.log($tituloPrincipal.previousElementoSibling); // trás o irmão  anteior elemento html

  console.log($tituloPrincipal.childElementCount); // conta os filhos do elemento

  // MÈTODOS

  // .hasAttribute(name)
  // .hasAttributes()

  console.log($tituloPrincipal.hasAttribute('class')); // pergunta c o elemento tem uma class, ele retorna um valor buleano

  console.log($tituloPrincipal.hasAttribute('id'));
  console.log($tituloPrincipal.hasAttribute('data-js'));

  console.log($tituloPrincipal.hasAttributes()); // verifica se o elemento tem qlq atributo

})();