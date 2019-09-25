(function(){
  'use stricct'

  let text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande,13 de junio de 1804 – Rio de Janeiro, 18 de julio de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

  console.log(text.replace(/Manuel Marques/g, 'Ygor Mendes'));

  console.log(text.replace(/brasileiro/g, 'São Rockino'));

  console.log(text.replace(/\d/g, '-'));

  console.log(text.replace(/\w/g, 'Y'));

  console.log(text.replace(/[D-Hd-h]/g, '0'));

  console.log(text.replace(/[Aa]/g, '4'));
  console.log(text.replace(/A|a/g, '4'));
  console.log(text.replace(/a/gi, '4'));

  console.log(text.replace(/O Centauro de Luvas/g, function(capturaTotal){
    return capturaTotal.toUpperCase();
  }));

  function getMonthNumber(nomeMes){
    let nomes = {
      'enero' : '01',
      'febrero' : '02',
      'marzo' : '03',
      'abril' : '04',
      'mayo' : '05',
      'junio' : '06',
      'julio' : '07',
      'agosto' : '08',
      'septiembre' : '09',
      'octubre' : '10',
      'noviembre' : '11',
      'diciembre' : '12'
    };
    return nomes[nomeMes];
  };
console.log('El número del mes correspondiente a abril es el ' + getMonthNumber('abril'));
console.log('El número del mes correspondiente a octubre es el ' + getMonthNumber('octubre'));
console.log('El número del mes correspondiente a diciembre es el ' + getMonthNumber('diciembre'));

let regexDate = /(\d\d) de (julio|junio) de (1804)/;
console.log(regexDate);

function replaceDate(regex, day, month, year){
  return day + '/' + getMonthNumber(month) + '/' + year;
};
console.log(text.replace(regexDate, replaceDate))

})(); 