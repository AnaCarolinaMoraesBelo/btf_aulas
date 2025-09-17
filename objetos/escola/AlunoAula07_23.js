/*
class AlunoAula23_07 {
  matricula; //visibilidade é pública
}

matheus = new AlunoAula23_07();
matheus.matricula = 23202454;
console.log(matheus.matricula);
*/

class AlunoAula23_07 {
  #matricula; //visibilidade é privada
  #curso;
  #escola;
  setMatricula(matricula) {
    //cria um método público para a atribuição do valor privado
    this.#matricula = matricula;
    return true; //seguindo a UML de retorno booleano
  }
  getMatricula() {
    //metodo para ler o valor, neste caso a matrícula
    return this.#matricula;
  }
  setCurso(curso) {
    this.#curso = curso;
    return true;
  }
  getCurso() {
    return this.#curso;
  }
  setEscola(escola) {
    this.#escola = escola;
    return true;
  }
  getEscola() {
    return this.#escola;
  }
}

module.exports = AlunoAula23_07;
/*
  JavaScript:
    '#' = privado


  Python:

    '+' = público
    '-' = privado
    '#' = protegido
*/
