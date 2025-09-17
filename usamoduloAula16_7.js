//comando que importa as funçãoes, nesse caso a função soma() e a função sub()

const calculadora = require('./bib2/novomoduloAula16_07.js'); //require é para importação. require ('onde está o arquivo')

var x = 10,
  y = 30;
console.log(calculadora.soma(x, y));
console.log(calculadora.subtrair(y, x));
console.log(calculadora.multiplicar(x, y));
console.log(calculadora.divid(x, y));
