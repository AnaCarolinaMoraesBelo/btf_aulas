import PF from './pessoas/PF.js'; 
import PFDAO from './pessoas/DAOs/PFDAO.mjs'; 
import Endereco from './pessoas/Endereco.js'; 
import Telefone from './pessoas/Telefone.js'; 
import Titulo from './pessoas/Titulo.js';  

const pf = new PF();
pf.setNome("Matheus Saraiva");
pf.setEmail("matheus.saraiva@apptrexo.com.br"); 
pf.setCPF("596.254.362-10");

const end = new Endereco(); 
end.setLogradouro("Rua Alfonsus Guimarães, 25");
end.setCep("25211-240");
pf.setEndereco(end);

const fone1 = new Telefone(); 
fone1.setDdd("12");  
fone1.setNumero("9123-4567");
pf.addTelefone(fone1);

const fone2 = new Telefone(); 
fone2.setDdd("98"); 
fone2.setNumero("95964-1152");  
pf.addTelefone(fone2);  

const titulo = new Titulo(); 
titulo.setNumero('320107859');
titulo.setZona('99'); 
titulo.setSecao('111'); 
pf.setTitulo(titulo);

const pfDAO = new PFDAO(pf); 

var jsonPF = pfDAO.toJSON(); 
pfDAO.saveJSON(); 

console.log("Objeto JSON gerado:");
console.log(jsonPF);  

console.log("\nString JSON salva:");
console.log(JSON.stringify(jsonPF)); 

console.log("\nDados recuperados do localStorage:");
console.log(pfDAO.recoveryJSON()); 