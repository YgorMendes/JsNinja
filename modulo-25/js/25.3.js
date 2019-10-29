(function(){

  'use strict'

  function onEvent(elemento, event, callback) {
    document.querySelector(elemento)
    .addEventListener(event, callback, false);
  };

  function offEvent(elemento, event, callback) {
    document.querySelector(elemento)
    .removeEventListener(event, callback, false);
  };

  function funcClick() {
    event.preventDefault();
    alert('clicou de novo no a');
  };

  function funcClick2() {
    event.preventDefault();
    alert('clicou de novo no a');
  }

  onEvent('[data-js="link"]', 'click',funcClick);
  offEvent('[data-js="link"]', 'click',funcClick);

  // onEvent('[data-js="input"]', 'input', function(event) {
  //   console.log(this.value); // this dentro da função de callback do evento representa o propio elemento no caso 'input'
  // }); // a ação input é oq vc inseri nela 

  // onEvent('[data-js="input"]', 'keyup', function(event) {
  //   console.log(this.value); // é o botão presionado e quando soltar ele faz a func
  // });

  onEvent('[data-js="input"]', 'keydown', function(event) {
    console.log(this.value); // 'keydown' é o botão presionado e ele ja faz a func
  });

  onEvent('[data-js="select"]', 'change', function() {
    console.log(this.value); // 'change' é a opçaõ trocada, modificação de valores
  })


  // o metodo onclick nesse formato  "nomeDaVariavel.onClick = nomeDoEvento(event){
  //  o que o evento vai fazer;
  // }" o metodo nesse formato não é bom porque ele sobreescreve a primeira declaração

  // remover eventos
  // .removeEventListener(event, callback, false);
  // remove o evento criado

  // false no Event sinifica user capturn
  // o true no Event ele ordena as ações pelos pais
  // callback é uma função de callback


})();