const modulos = require('../bib/criamoduloAula16_07.js');

const soma = modulos.soma;
const subtrair = modulos.subtrair;

const divid = (x, y) => {
  return x / y;
};
const multiplicar = (x, y) => {
  return x * y;
};

module.exports = { soma, subtrair, divid, multiplicar };
