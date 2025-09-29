import Aluno from './pessoas/Aluno.js'; 
import AlunoDAO from './pessoas/DAOs/AlunoDAO.mjs'; 
import Endereco from './pessoas/Endereco.js'; 
import Telefone from './pessoas/Telefone.js'; 
import Titulo from './pessoas/Titulo.js';

const aluno = new Aluno(); 
aluno.setNome("Carolina Belo"); 
aluno.setEmail("carolina.belo@aluno.ifb.edu.br");
aluno.setCPF("596.755.326-48");
aluno.setMatricula("232069875");
aluno.setCurso("Medicina");

const end = new Endereco(); 
end.setLogradouro("Bloco G Casa 6");
end.setCep("72152319"); 
aluno.setEndereco(end); 

const fone = new Telefone(); 
fone.setDdd("21");  
fone.setNumero("98288-9649"); 
aluno.addTelefone(fone);  

const fone2 = new Telefone();    
fone2.setDdd("61");    
fone2.setNumero("98233-9649");  
aluno.addTelefone(fone2);  

const titulo = new Titulo();
titulo.setNumero('123456789'); 
titulo.setZona('12');
titulo.setSecao('345');  
aluno.setTitulo(titulo); 

const alunoDAO = new AlunoDAO(aluno); 

var jsonAluno = alunoDAO.toJSON(); 
alunoDAO.saveJSON(); 

console.log("Objeto JSON gerado:");
console.log(jsonAluno); 

console.log("\nString JSON salva:");
console.log(JSON.stringify(jsonAluno));

console.log("\nDados recuperados do localStorage:");
console.log(alunoDAO.recoveryJSON());