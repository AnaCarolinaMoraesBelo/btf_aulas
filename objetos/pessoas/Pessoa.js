const Telefone = require('./Telefone');
const Endereco = require('./Endereco');

class Pessoa {

  #nome;
  #email;
  #endereco;    
  #telefones = [];  
  // 06:
  setEndereco(endereco) {
    if (endereco instanceof Endereco) {
      this.#endereco = endereco;
      endereco.setPessoa(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
  // 07:
  getEndereco() {
    return this.#endereco;
  }
  // 08:
  addTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.#telefones.push(telefone);
      telefone.setPessoa(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getTelefones() {
    return this.#telefones;
  }
  //=========================================
  // 10:
  setNome(nome) {
    if (nome) {
      this.#nome = nome;
      return true;
    } else {
      return false;
    }
  }
  // 11:
  getNome() {
    return this.#nome;
  }
  // 12:
  setEmail(email) {
    if (email) {
      this.#email = email;
      return true;
    } else {
      return false;
    }
  }
  // 13:
  getEmail() {
    return this.#email;
  }
}
// 14:
module.exports = Pessoa;