const escola = "Cod3r"

console.log(escola.charAt(2)); //Mostra o caracter que está no indice informado
console.log(escola.charCodeAt(2)); //Mostra o número na tabela unicode do caracter informado pelo indice
console.log(escola.substring(1)); //Mostra todos os caracteres que está após o índice informado
console.log('Escola '.concat(escola).concat("!")); //Concatena strings

console.log(escola.replace("3", "e")); //Altera caracteres dentro da cadeia de caracteres
console.log(escola.indexOf("d")); //Informa o índice do caracter informado

console.log("Gabriel,Rafael,Rose".split(',')); //Transforma um texto em Array