const valores = [1.2, 3.7, 4.5]
console.log(valores[0], valores[2])

const texto = "Olá meu nome é Gabriel Carvalho"
const result = texto.split(" "); //Transformando o texto da variável "texto" em Array, usando espaço como separador

console.log(result)

console.log(result[1]) //Acessando o elemento de índice "1" dentro do Array
console.log(result.length) //Imprime a quantidade d elementos dentro do Array
/*
result.push('testando', 'testandinho') //Adicionando valores no Array
console.log(result)
*/

console.log(result.pop()) //Remove o último valor do Array

delete valores[1]
console.log(valores)