function soma(a, b) {
  let somar = a + b;
  return somar;
}

function subtrair(a, b) {
  let sub = a - b;
  return sub; //podendo ser utilizado de forma "return (a - b);"
}

function multi(k, j) {
  let multi = k * j; //a simbologia para a multiplicação é a '*'
  return multi;
}

function divid(o, p) {
  let divid = o / p; //a simbologia para a divisão é a '/'
  return divid;
}

//evitar criar variáveis desnecessárias

//node ./bib/criamodulo.js

module.exports = { soma, subtrair, multi, divid }; //module é para utilizar algo que vc queira exportar. {nome da(s) função(ões)}, disponibiliza essas duas funções para serem utilizadas
