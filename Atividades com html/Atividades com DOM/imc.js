function calculo(){
    let nome = document.getElementById("nome").value
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let imc
    let tagresultado = document.getElementById("resultado")

    imc = peso / (altura * altura)
    tagresultado.innerText = "Olá, " + nome + "\nSeu IMC é: " + imc + "\nClassificação: "

    if (imc < 18.5){
        tagresultado.innerText += "\nAbaixo do peso"
    } else if (imc >= 18.5 && imc < 24.9){
        tagresultado.innerText += "\nPeso normal"
    } else if (imc >= 25 && imc < 29.9){
        tagresultado.innerText += "\nSobrepeso"
    } else if (imc >= 30 && imc < 34.9){
        tagresultado.innerText += "\nObesidade grau I"
    } else if (imc >= 35 && imc < 39.9){
        tagresultado.innerText += "\nObesidade grau II"
    } else {
        tagresultado.innerText += "\nObesidade grau III"
    }
}