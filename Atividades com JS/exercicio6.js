let quantidadeItens =  Number (prompt("Digite a quantidade de itens:"))
let valorTotal = Number (prompt("Digite o valor total"))

if(quantidadeItens > 3 || valorTotal > 100){
    console.log ("Desconto aplicado!")
}else{
    console.log("Sem desconto dessa vez.")
}