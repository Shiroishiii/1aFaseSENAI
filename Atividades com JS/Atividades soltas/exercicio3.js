let temDinheiro = prompt("Tem dinheiro? (sim ou não)")
let estaComFome = prompt("Está com fome? (sim ou não)")
let hojeEhSexta = prompt("Hoje é sexta? (sim ou não)")

if (temDinheiro === "sim" && estaComFome === "sim" ||  temDinheiro === "sim" && hojeEhSexta === "sim" ){
    console.log ("Vamos pedir pizza!")
}else {
    console.log ("Hoje não é dia de pizza.")
}