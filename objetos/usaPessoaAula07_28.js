const usaPessoaAula28_07 = require('./pessoas/Pessoa.js');

const x = new usaPessoaAula28_07();
var resposta = x.setNome('Carol');
console.log(resposta);
if (resposta) {
  console.log(x.getNome());
} else {
  console.log('Nome vazio!');
} //se resposta == true, então sairá o nome, caso contrário apresentará na tela a mensagem de que não há valor na variável nome

resposta = x.setEmail('');
console.log(resposta);
if (email) {
  console.log(x.getEmail());
} else {
  console.log('Email vazio');
}
