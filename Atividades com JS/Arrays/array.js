let nomes = ["João", "Clara", "Jonas", "Maria", "Alessandro", ]
console.log(nomes[10])
console.log(nomes.length)
nomes.forEach((element, index) => {
    console.log (element + "@globmail.com")
})

nomesComSobrenome = nomes.map((element, index) => {
    return element + " Silva";
})

let nomesFiltrados = nomes.filter((nome) =>  nome.length > 5);
let findNome = nomes.find((nome) => nome.length > 5);
console.log(findNome);