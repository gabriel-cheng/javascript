{
    var sera = 'Será??'
}

console.log(sera)

function local(local) {
    var local = 'Testandinho'
    return local
}

console.log(local)

var numero = 1
{
    var numero = 2
    console.log('Dentro...: ', numero)
}
console.log('Fora...: ', numero)