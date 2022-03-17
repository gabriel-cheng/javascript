//Basicamente se traduz como "içamento", o que acontece é que ao invés de dar um erro de falta de variável, a variável é reconhecida, porém sem atribuição de valores, gerando o erro "undefined"

console.log("a = ", a)
var a = 2
console.log('a = ', a)