function exercicio1() {
    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))
    let soma = num1 + num2
    alert("A soma é: " + soma)
}

function exercicio2() {

    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))
    let media = (num1 + num2) / 2
    alert("A média é: " + media)
}

function exercicio3() {
    let nome = prompt("Digite seu nome:")

    alert("Olá " + nome + ", Seja bem-vindo(a)!")
}

function exercicio4() {
    let num1 = Number(prompt("Digite o primeiro número:"))
    let num2 = Number(prompt("Digite o segundo número:"))
    let soma = num1 + num2
    alert("A soma é: " + soma)
}

function exercicio5() {
    let tempCelsius = Number(prompt("Digite a temperatura em Celsius:"))
    let tempFahrenheit = (tempCelsius * 9/5) + 32

    alert("A temperatura em Fahrenheit é: " + tempFahrenheit)
}

function exercicio6() {
    let num = Number(prompt("Digite um número:"))

    if (num % 2 === 0) {
        alert(num + " é par.")
    }else {
        alert(num + " é ímpar.")
    }
}

function exercicio7() {
    let nota1 = Number(prompt("Digite a primeira nota:"))
    let nota2 = Number(prompt("Digite a segunda nota:"))
    let nota3 = Number(prompt("Digite a terceira nota:"))
    let media = (nota1 + nota2 + nota3) / 3

    alert("A média é: " + media)
}

function exercicio8() {
    let peso = Number(prompt("Digite seu peso (em kg):"))
    let altura = Number(prompt("Digite sua altura (em metros):"))
    let imc = peso / (altura * altura)

    alert("Seu IMC é: " + imc)

    if (imc < 18.5) {
        alert("Abaixo do peso")
    }else{
        if (imc >= 18.5 && imc < 24.9) {
            alert("Peso normal")
        }else{
            if (imc >= 25 && imc < 29.9) {
                alert("Sobrepeso")
            }else{
                alert("Obesidade")
            }
        }
    }
}

function exercicio9() {
    
}

function exercicio10() {
    let ano = Number(prompt("Digite um ano:"))

    if ((ano % 4 === 0 && ano % 1000 !== 0) || (ano % 4000 === 0)) {
        alert(ano + " é um ano bissexto.")
    }else{
        alert(ano + " não é um ano bissexto.")
    }
}
