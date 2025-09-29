//Forma 1: criar um array já atribuindo os valores diretamente
var dadosAluno = ['Joao', 12345, true];
console.log(dadosAluno); //imprime todo o array = ['Joao', 12345, true]
console.log(dadosAluno[0]); //imprime somente o valor do índice pedido

//Forma 2: apenas declara o array
var curso = [];
curso[0] = 'BFD'; //adiciona o valor depois de ter declarado a variável
curso[1] = 123456;
curso[3] = false;
console.log(curso); // irá printar: [ 'BFD', 123456, <1 empty item>, false ], empty item pois não atribui nenhum valor a esse bloco do array

//Forma 3:
var notas = new Array(7.5, 8.9);
console.log(notas); //irá printar : [ 7.5, 8.9 ]

//Forma 4: colocar todos os elementos dentro dele com o mesmo tipo
var objetos = [];

//Forma 5
var frutas = []; //Objeto array - possui atributos e métodos
frutas.push('maçã'); //push = adicionar ao final
frutas.push('morango');
frutas.unshift('uva'); //unshift = adiciona ao começo
frutas.push('banana');
frutas.pop(); //remove o último
frutas.shift(); //remove do início
frutas.splice(0, 1); //retira a quantidade de arrays a partir do índice, sendo : (<índice >, <quantia a partir da posição>)
frutas.splice(0, 0, 'acerola'); //consegue adicionar, possibilidando adicionar mais de um
console.log(frutas); //conteúdo do array
console.log(frutas.length); //imprimi o tamanho do array

//Desafio: Criar um Array de Objetos "Aluno" (com no mínimo 3 objetos), bem como demonstrar a manipulação de tal Array de Objetos


// 07: Forma 6: Array com tipos uniformes (booleans)
let status = [true, false, true, true];
console.log('status:', status);
console.log('Status:', status[3]);

// 08: Forma 7: Array com strings (nomes de cursos)
let cursos = ['ADS', 'SI', 'Engenharia', 'Jogos'];
console.log('cursos:', cursos);