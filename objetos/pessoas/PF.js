const Pessoa = require('./Pessoa.js');

class PF extends Pessoa {
  //por causa da herança, então a classe PF já possui nome e email
  #cpf;
  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    } else {
      return false;
    }
  }
  getCPF() {
    return this.#cpf;
  }
}
module.exports = PF; //exportando a classe
