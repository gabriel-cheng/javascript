// Novo recurso do ECMAScript 2015

const pessoa = {
    nome: 'Gabriel',
    idade: 23,
    endereco: {
        logradouro: 'casa',
        numero: 1419
    }

}

const { nome, idade } = pessoa
console.log(nome, idade)
 
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { logradouro: x, numero: y} = pessoa.endereco
console.log(x, y)

//Ou

const { endereco: {logradouro, numero} } = pessoa
console.log(logradouro, numero)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)