const PF = require('./PF.js');
const Disciplina = require('./Disciplina.js');
class Aluno extends PF {
  #matricula;
  #curso;
  #disciplina; //em linguagens tipadas você consegue definir se o objeto da classe disciplina é específico da classe, porém no javaScript você só consegue fazer isso dentro do método
  setMatricula(matricula) {
    //a matrícula começa com 20 pois a ideia é que o ano seja de 2000 e alguma coisa
    if (matricula) {
      if (matricula.length === 8 && matricula.startsWith('20')) {
        //starsWith literalmente é uma função que verifica de o começo da string inicia em ('<>');
        this.#matricula = matricula;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  getMatricula() {
    return this.#matricula;
  }
  setCurso(curso) {
    if (curso) {
      if (curso === 'software' || curso === 'computacao') {
        this.#curso = curso;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  getCurso() {
    return this.#curso;
  }
  setDisciplina(disciplina) {
    if (disciplina) {
      this.#disciplina = disciplina;
      return true;
    } else {
      return false;
    }
  }
  getDisciplina() {
    return this.#disciplina;
  }
}

module.exports = Aluno;

const aluno = new Aluno();
aluno.setNome('Appetrexo');
aluno.setCPF('123.456.789-20');
console.log(aluno.getNome());
console.log(aluno.getCPF());
var resposta = aluno.setMatricula('20345678');
if (resposta) {
  console.log(resposta);
  console.log(aluno.getMatricula());
}
var respostaCurso = aluno.setCurso('software');
console.log(respostaCurso);
console.log(aluno.getCurso());
