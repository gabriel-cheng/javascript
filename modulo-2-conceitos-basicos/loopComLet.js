let numero = 10

for(let i = 0; i < numero; i++) {
    console.log(i)
}

const funcs = []

for(let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()