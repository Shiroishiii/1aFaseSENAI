function exercicio1() {
    let numero = 0
    
    while (numero <= 20) {
        alert ("O número é: " + numero)
        numero += 2
    }
}

function exercicio2() {
    let numero = 1

    while (numero <= 20) {
        alert ("O número é: " + numero)
        numero += 2
    }
}

function exercicio3() {
    let quantidade = 0
    let mensagem = "Olá mundo!!!"

    while (quantidade <= 5){
        alert (mensagem)
        quantidade++
    }
}

function exercicio4() {
    let numero = 0
    
    while (numero <= 50){
        alert ("O número é: " + numero)
        numero += 5
    }
}

function exercicio5(){
    let numero = 100

    while (numero >= 0){
        alert ("O número é: " + numero)
        numero -= 10
    }
}

function exercicio6(){
    let numero = 0

    while (numero <= 30){
        alert ("O número é: " + numero)
        numero += 3
    }
}

function exercicio7(){
    let numero = 1
    let quadradoNum 

    while (numero <= 10){
        quadradoNum = numero * numero
        alert ("O número é: " + numero + " e ao quadrado é: " + quadradoNum)
        numero++
    }
}

function exercicio8(){
    let numero = 1
    let cuboNum

    while (numero <= 10){
        cuboNum = numero * numero * numero
        alert ("O número é: " + numero + " e ao cubo é: " + cuboNum)
        numero++
    }
}

function exercicio9(){
    let numero = 1

    while (numero <= 15){
        if (numero % 2 == 0){
            alert ("O número " + numero + " é par.")
        }else{
            alert ("O número " + numero + " é ímpar.")
        }
        numero++
    }
}

function exercicio10(){
    let numero = 0

    while (numero <= 100){
        alert ("O número é: " + numero)
        numero += 4
    }
}

function exercicio11(){
    let numero = 0 
    let frase = "Número: X"

    while (numero <= 10){
        alert (numero + " " + frase)
        numero++
    }
}

function exercicio12(){
    let numero = 1

    while (numero <= 20){
        if (numero % 3 == 0){
            alert ("O número é: " + numero + " Fizz")
        }else{
            alert ("O número é: " + numero)
    }
        numero++
    }
}

function exercicio13(){
    let numero = 1

    while (numero <= 20){
        if (numero % 5 == 0){
            alert ("O número é: " + numero + " Buzz")
        }else{
            alert ("O número é: " + numero)
    }
        numero++
    }
}

function exercicio14(){
    let numero = 1
    let soma

    while (numero <= 10){
        soma = numero + numero
        alert ("O número é: " + numero + " e a soma é: " + soma)
        numero++
    }
}

function exercicio15(){
    let numero = 5
    let resultado
    let contador = 0

    while (contador <= numero){
        alert ("O fatorial de " + numero + " é: " + resultado)
        resultado = numero * contador
        contador++
    }
}

function exercicio16(){
    let numero = 0
    let numPares = 0

    while (numero <= 50){
        alert ("O número é: " + numero + " e os números que pares até 50 são: " + numPares)
        if (numero % 2 == 0){
            numPares++
        }
        numero++
    }
}

function exercicio17(){
    let num = 0
    let multiploDeSeis = 0

    while (num <= 100){
        alert ("O número é: " + num + " e os números múltiplos de 6 são: " + multiploDeSeis)
        if (num % 6 == 0){
            multiploDeSeis++
        }
        num++
    }
}

function exercicio18(){
    let num = 1

    while (num <= 30){
        if (num % 4 == 0){
            alert ("Pula")
        }else{
            alert ("O número é: " + num)
        }
        num++
    }
}

function exercicio19(){
    let num = 1
    let soma = 0

    while (num <= 100){
        soma += num
        alert ("A soma dos números de 1 a 100 é: " + soma)
        num++

        if (soma >= 400){
            alert ("A soma ultrapassou 400, o loop será encerrado.")
            break
        }
    }
}

function exercicio20(){
    let senha = "12345"
    let senhaDigitada = ""
    let tentativas = 0
    let maxTentativas = 3

    while (senhaDigitada != senha && tentativas < maxTentativas){
        senhaDigitada = prompt("Digite a senha: ")
        tentativas++

        if (senhaDigitada == senha){
            alert ("Senha correta!")
        }else{
            alert ("Senha incorreta! Você tem " + (maxTentativas - tentativas) + " tentativas restantes.")
        }
    }
}

function exercicio21(){
    let numero = 1
    while (numero <= 50){
        alert ("O número é: " + numero)
        numero++
        if (numero === 30){
            alert ("O número 30 foi encontrado, o loop será encerrado.")
            break
        }
    }
}

function exercicio22(){
    let numero = 1

    while (numero <= 100){
        alert ("O número é: " + numero)
        numero++
        if (numero === 50){
            alert ( "O numero é: " + numero +"Tamo contando, tamo contando")
        }
    }
}

function exercicio23(){
    let contagem = 10

    while (contagem >= 1){
        alert ("Contagem regressiva: " + contagem)
        contagem--
        if (contagem === 0){
            alert ("Lançamento!")
        }
    }
}

function exercicio24(){
    let numero = 1

    while (numero <= 30){
        if (numero % 7 == 0){
            alert ("O número " + numero + " Pulando!")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function exercicio25(){
    let numero = 1

    while (numero <= 20){
        if (numero % 2 == 0 && numero % 3 == 0){
            alert ("O número " + numero + " Especial!")
        }else{
            alert ("O número é: " + numero)
        }
        numero++
    }
}

function exercicio26(){
    let numero = 1

    while (numero <= 10){
        if (numero >= 5){
            alert ("O número " + numero + " é maior ou igual a 5")
    }else{
            alert ("O número " + numero + " é menor que 5")
        }
       numero++
    }
}

function exercicio27(){
    let numero = 1
    let limite = Math.floor(Math.random() * 10) + 1

    while (numero <= limite){
        alert ("O número é: " + numero)
        numero++
    }
}

function exercicio28(){
    let divnumero = Number(prompt("Digite um número para saber seus divisores: "))
    

}