console.log("==== Objeto Aluno =====");
const Aluno = require('./pessoas/Aluno');
const w = new Aluno();

resposta = w.setNome('Pedro');
console.log(resposta);
if(resposta){
  console.log(w.getNome());
}else{
  console.log("Nome vazio");
}
resposta = w.setMatricula('20123456')
console.log(resposta);
if(resposta){
  console.log(w.getMatricula());
}else{
  console.log("Matricula Inválida");
}

resposta = w.setCurso('SIS')
console.log(resposta);
if(resposta){
  console.log(w.getCurso());
}else{
  console.log("Curso Inválido");
}