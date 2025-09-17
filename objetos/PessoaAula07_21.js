/* 

Classe - Estrutura que eu quero respresentar
As estruturas tem características e funcionalidades
  -> Dentro das classes há os atributos (características/propriedades)
  -> Métodos (ações ou funcionalidades)
Objeto é uma instância daquela classe

*/

class PessoaAula21_07 {
  //class = classe; é comum utilizar o nome do arquivo após a classe. Sempre criar o nome do arquivo com letra maiúscula
  constructor(nome, peso, altura) {
    //o construtor serve para quando for instânciar, ela chame essa função
    this.peso = peso;
    this.altura = altura;
  }
  imc() {
    let imc = this.peso / (this.altura * this.altura); //this é desta função
    return imc;
  }
}
//quando exporta funções, coloca {}; Quando exporta classes é só o nome da Classe;
module.exports = PessoaAula21_07;
//Para cada classe cria um arquivo
