const PessoaAula21_07 = require('./PessoaAula21_07.js'); //importei a classe

const matheus = new PessoaAula21_07('Matheus Saraiva', 80, 1.83);

console.log(matheus.imc());
console.log(matheus.peso);
const carol = new PessoaAula21_07();
carol.peso = 60;
carol.altura = 1.59;
console.log(carol.imc());
console.log(carol.peso);

//para executar o código = "node ./objetos/usaPessoaAula21_17.js"
