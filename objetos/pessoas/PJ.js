const Pessoa = require('./Pessoa.js');

class PJ extends Pessoa {
  //por causa da herança, então a classe PF já possui nome e email;
  #cnpj; //adiciona a vaiável cnpj, que é um atibuto privado segundo a UML que está sendo utilizada como base;
  /*
    Operadores de comparação:
    <   : menor que
    >   : maior que
    <=  : menor ou igual que
    >=  : maior ou igual que
*/
  setCNPJ(cnpj) {
    //cria-se o método setCNPJ;
    if (cnpj) {
      //verifica se na variável cnpj foi atribuido algum valor;
      if (cnpj.length < 18) {
        //length é um comando para comparar o tamanho
        return false;
      }
      this.#cnpj = cnpj;
      return true; //se sim, retorna true;
    } else {
      return false; //caso contrário retorna false;
    }
  }
  getCNPJ() {
    //cria-se o método getCNJP para "pegar" o valor da variável;
    return this.#cnpj;
  }
  setEmail(email) {
    //cria-se um método para sobrescrever o método setEmail que foi herdado
    /*
    Operadores de comparação:
      ==   : igualdade frouxa
      ===  : igualdade estrita
      !=   : diferença frouxa
      !==  : diferença estrita
*/
    if (email !== '') {
      //verifica se o email é
      if (email.includes('@')) {
        //
        super.setEmail(email); // chama o método original da classe pai
        return true;
      }
    } else {
      return false;
    }
  }
}

module.export = PJ; //exportando a classe
