//Desafio: Criar um Array de Objetos "Aluno" (com no mínimo 3 objetos), bem como demonstrar a manipulação de tal Array de Objetos

const Aluno = require('./pessoas/Aluno.js');
const obj1 = new Aluno();
obj1.setNome('matheus');
const obj2 = new Aluno();
obj2.setMatricula('20123456');
const obj3 = new Aluno();
obj3.setCurso('software');

var objetos = [];
objetos.push(obj1);
//console.log(obj1);
//console.log(objetos);
console.log(objetos[0].getNome());

objetos.push(obj2);
//console.log(obj2);
//console.log(objetos);
console.log(objetos[1].getMatricula());

objetos.push(obj3);
//console.log(obj3);
//console.log(objetos);
console.log(objetos[2].getCurso());
