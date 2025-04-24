function exercicio1 (){
    
}

function exercicio2 (){
    let nome = prompt ("Digite o seu nome: ")
    let numAleatorio = Math.floor(Math.random() * 4) + 1
    let adjetivo1 = "Capitão"
    let adjetivo2 = "Monarca"
    let adjetivo3 = "Imperador"
    let adjetivo4 = "Príncipe"
    let superpoder1 = "Invencível das sombras"
    let superpoder2 = "Mestre da invisibilidade"
    let superpoder3 = "Senhor do tempo"
    let superpoder4 = "Rei dos mares"

    if (numAleatorio === 1){
        alert (adjetivo1 + " " + nome + ", " + superpoder1)
    }else if (numAleatorio === 2){
        alert (adjetivo2 + " " + nome + ", " + superpoder2)
    }else if (numAleatorio === 3){
        alert (adjetivo3 + " " + nome + ", " + superpoder3)
    }else if (numAleatorio === 4){
        alert (adjetivo4 + " " + nome + ", " + superpoder4)
    }
}

function exercicio3 (){
    let signo = prompt ("Digite o seu signo: ")
    let mensagem

    if (signo === "Áries"){
        mensagem = "Você é corajoso e determinado."
        alert (mensagem)
    } else if (signo === "Touro"){
        mensagem = "Você é paciente e confiável."
        alert (mensagem)
    }else if (signo === "Gêmeos"){
        mensagem = "Você é versátil e curioso."
        alert (mensagem)
    }else if (signo === "Câncer"){
        mensagem = "Você é sensível e protetor."
        alert (mensagem)
    }else if (signo === "Leão"){
        mensagem = "Hoje é um ótimo dia para buscar novos desafios, Leão!"
        alert (mensagem)
    }else if (signo === "Virgem"){
        mensagem = "Você é analítico e prático."
        alert (mensagem)
    }else if (signo === "Libra"){
        mensagem = "Você é equilibrado e sociável."
        alert (mensagem)
    }else if (signo === "Escorpião"){
        mensagem = "Você é intenso e apaixonado."
        alert (mensagem)
    }else if (signo === "Sagitário"){
        mensagem = "Você é otimista e aventureiro."
        alert (mensagem)
    }else if (signo === "Capricórnio"){
        mensagem = "Você é disciplinado e responsável."
        alert (mensagem)
    }else if (signo === "Aquário"){
        mensagem = "Você é inovador e independente."
        alert (mensagem)
    }else if (signo === "Peixes"){
        mensagem = "Você é sonhador e intuitivo."
        alert (mensagem)
    }else{
        alert ("Signo não reconhecido, tente novamente.")
    }
}

function exercicio4 (){
    let ParOuImpar = prompt ("Escolha par ou ímpar: ")
    let numero = Number(prompt ("Escolha um número de 1 a 10: "))
    let computador = Math.floor(Math.random() * (1 - 10)) + 1
    let soma = numero + computador

    if (ParOuImpar === "par" && soma % 2 === 0){
        alert ("Você ganhou! O número sorteado foi " + computador + " e a soma é " + soma + ".")
    }else if (ParOuImpar === "impar" && soma % 2 !== 0){
        alert ("Você ganhou! O número sorteado foi " + computador + " e a soma é " + soma + ".")
    }else{
        alert ("Você perdeu! O número sorteado foi " + computador + " e a soma é " + soma + ".")
    }
}

function exercicio5 (){
    
}

function exercicio6 (){
    let numero = Number(prompt ("Digite um número: "))
    let numerosorteado = Math.floor(Math.random() * (1 - 100)) + 1

    if (numero === numerosorteado){
        alert ("Você acertou o número sorteado!")
    }else{
        alert ("Você errou! O número sorteado foi " + numerosorteado + ".")
    }
}