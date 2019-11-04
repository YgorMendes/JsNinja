(function(){

  'use strict';

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
    element.removeEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
    element.removeEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  let $a = new DOM('[data-js="link"]');
  $a.on('click', function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleClick)
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };
  //

  DOM.prototype.isArray = function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
  };


  DOM.prototype.isObject = function isObject(param) {
    return Object.prototype.toString.call(param) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(param) {
    return Object.prototype.toString.call(param) === '[object Function]';
  };


  DOM.prototype.isString = function isString(param) {
    return Object.prototype.toString.call(param) === '[object Number]';
  };
  
  DOM.prototype.isNumber = function isNumber(param) {
    return Object.prototype.toString.call(param) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(param) {
    return Object.prototype.toString.call(param) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(param) {
    return Object.prototype.toString.call(param) === '[object Null]'
    || Object.prototype.toString.call(param) === '[object Undefined]';
  };
  //

  let dom = new DOM();
  console.log(dom.isBoolean(true));
  //

  $a = new DOM('[data-js="link"]');
  console.log($a);
  let dataJs = $a.map(function(item) {
    return item.getAttribute('data-js')
  });
  console.log(dataJs);

})();