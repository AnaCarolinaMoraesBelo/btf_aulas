// Objetivo de uma função = definir um bloco de código reutilizável

function soma() {
  //para criar uma função você deve colocar a palavra 'function' e o nome
  let x = 1,
    y = 6;
  let soma = x + y;
  console.log(soma);
}
soma(); //chama a função

function sub(x, y) {
  //não atribui valores (podendo mudar os valores de entrada)
  let sub = x - y;
  return sub; //retorna a informação
}

var print;

//print = soma(8, 5);
//console.log(print);
print = sub(8, 5);
console.log(print);

//OBS: evitar utilizar printf dentro das funções, utilizar somente qundo necessário

print = sub(10, sub(9, 7));
console.log(print);
print = sub(10, sub(print, 1));
console.log(print);

function multi(k, j) {
  let multi = k * j; //a simbologia para a multiplicação é a '*'
  return multi;
}

console.log(multi(2, 1));

print = multi(2, 1);
console.log(print);

function divid(o, p) {
  let divid = o / p; //a simbologia para a divisão é a '/'
  return divid;
}

console.log(divid(10, 2));

print = divid(10, 2);
console.log(print);

const subtrair = function (x, y) {
  return x - y;
};
console.log(subtrair(3, 5));

const dividir = (x, y) => {
  return x / y;
}; //arrow function é conhecida pela símbolo que lembr uma flecha '=>'
console.log(dividir(3, 5));

const multiplicar = (x, y) => {
  return x * y;
};

/*
  A diferença entre '==' e '===' no JavaScript é que o '==' é uma igualdade solta e '===' é uma igualdade estrita

  A igualdade solta compara os valores após converter ambos os operandos para um tipo comum. Por exemplo, 5 == "5" retornaria true porque a string "5" seria convertida para o número 5 antes da comparação. Isso pode levar a resultados inesperados se não houver cuidado.

  A igualdade estrita compara os valores e tipos dos operandos. Não realiza conversão de tipo. Se os tipos forem diferentes, a comparação sempre retornará false. 5 === "5" retornaria false porque um é um número e o outro é uma string. 
*/

//youtube computtube

module.exports = { multi, divid };
