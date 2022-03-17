//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
console.log(typeof imprimirSoma())

//Função com retorno (iniciando a variável b sendo igual a zero)
function Soma(a, b = 0) {
    return a + b
}

console.log(Soma(2, 3))

//Funções em variáveis
const somazinha = function (a, b) {
    console.log(a + b)
}

somazinha(2, 3)

//Arrow function
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const somatoria = (a, b) => a + b

console.log(somatoria(10, 10))

