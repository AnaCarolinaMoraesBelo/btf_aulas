// run `node index.js` in the terminal

//para comentar é só utilizar // ou /* */

var x = 1,
  y = 3,
  soma = x + y;

//para criar uma variável basta colocar var, como se fosse int, char, double, float

console.log(soma);

var x = 6;
{
  let w = 7; // let são variáveis locais de cada bloco onde só podem ser acessadas dentro de seu respectivo bloco
  var y = 9; // var são variáveis globais
  console.log(w);
}

const h = 3; // const = constante, sendo ela imutável

/*
  blocos são definidos por {}
  há programas sequenciais, cujo há sequência em seus códigos
  programação estrutural = blocos de código
  programação orientada a objetos = blocos mais complexos
*/
