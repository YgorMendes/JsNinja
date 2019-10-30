(function(){

  'use strict'

  let $tituloPrincipal = document.querySelector('.principal');
  let $tituloSecundario = document.querySelector('.secundario');
  let $contant = document.querySelector('.contant');
  let $contant2 = document.querySelector('.contant2');
  let $contant3 = document.querySelector('.contant3');

  // atributos

  // Element.id
  // console.log($contant.id);
  // console.log($contant.className); // eles substituem os valores dos msms
  // console.log($contant.id="novo-id");
  // console.log($contant.className="novo-class");

  // .getAttribute(attr)
  // console.log($contant.getAttribute('class')); // pega qlq tipo de atributo e o nome do parametro tem que ser escrito igual ao codigo html, ele retorna os valores em string
  // console.log($contant.getAttribute('data-js'));
  // console.log($contant.getAttribute('id'));

  // .setAttribute(attr, value)
  console.log($contant.setAttribute('data-js', 'novo-data-js')); // troca o nome das propriedades dos elementos

})();