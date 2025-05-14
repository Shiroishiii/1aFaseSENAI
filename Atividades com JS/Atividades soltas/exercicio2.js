let idade = Number(prompt("Digite a sua idade"))
let temEspadaMagica = prompt("Você tem a espada mágica (sim ou não)")

if(idade >= 18 && temEspadaMagica === "sim"){
    console.log ("Você pode lutar contra o dragão!")
} else {
    console.log ("Fuja enquanto é tempo!")
}