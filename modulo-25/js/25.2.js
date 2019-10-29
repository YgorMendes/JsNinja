(function(){

  'use strict'

  function onEvent(elemento, event, callback) {
    document.querySelector(elemento)
    .addEventListener(event, callback, false);
  };

  onEvent('[data-js="link"]', 'click', function(event) {
    event.preventDefault();
    alert('clicou no a');
  });

  onEvent('[data-js="div"]', 'click', function(event) {
    event.preventDefault();
    alert('clicou na div');
  });

  onEvent('[data-js="span"]', 'click', function(event) {
    event.preventDefault();
    alert('clicou no span');
  });

  // false no Event sinifica user capturn
  // o true no Event ele ordena as ações pelos pais
  // callback é uma função de callback


})();