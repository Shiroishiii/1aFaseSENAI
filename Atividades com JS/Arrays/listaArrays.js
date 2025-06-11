//12
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosDois = numeros.map(elemento => elemento * 2)
console.log(numeros)
console.log(numerosDois)

//14
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
console.log(soma)

let nomes2 = ["João", "Clara", "Jonas", "Carla", "Maria" ,"Alessandro", "Carlos", "José"]
let nomesVirgula =
nomes2.reduce((acumulador, valorAtual) => acumulador + ", " + valorAtual)

console.log(nomesVirgula)

//17

numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let numerosinvertidos = numeros.map((elemento, index, array) => {
    const len = array.length - 1
    return array[len - index]
})

console.log(numeros)
console.log(numerosinvertidos)

