let combustivel = Number (prompt("Digite a quantidade de combustível")) 
let clima = prompt ("Qual a situação do clima? (bom ou ruim)")

if (combustivel > 50 && clima === "bom"){
    console.log ("Pouso autorizado!")
}else{
    console.log ("Abortar missão!")
}