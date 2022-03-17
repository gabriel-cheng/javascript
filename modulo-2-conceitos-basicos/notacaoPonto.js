console.log(Math.ceil(6.1))

const obj = {}
obj.nome = 'Bolsa'
obj['nome'] = 'Bolsa2'

function Object(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Object('Cadeira')
const obj3 = new Object('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()