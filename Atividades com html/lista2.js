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

let contador = 0
function exercicio5Clique (){
   contador++
}

function exercicio5Mostrar (){
    alert ("O botão foi clicado " + contador + " vezes.")
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

function gerarSenha(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const numeroAleatorio = Math.floor(Math.random() * caracteres.length)

    return caracteres.charAt(numeroAleatorio)
}

function exercicio7(){

    let quantidade = Number(prompt ("Quantos caracteres você quer na senha? "))
    let senha = ""
    while (quantidade > 0){
        senha = senha + gerarSenha()
        quantidade = quantidade - 1
    }

    alert ("Senha gerada: " + senha)
}

function exercicio8(){

}

function exercicio9(){
    let pergunta1 = prompt ("Qual a capital do Brasil? A) Brasília B) São Paulo C) Rio de Janeiro D) Salvador")
    let pergunta2 = prompt ("Qual o maior oceano do mundo? A) Atlântico B) Índico C) Pacífico D) Ártico")
    let pergunta3 = prompt ("Qual o continente mais populoso? A) América B) Europa C) Ásia D) África")
    let pergunta4 = prompt ("Qual a montanha mais alta do mundo? A) K2 B) Everest C) Kilimanjaro D) Aconcágua")
    let pergunta5 = prompt ("Qual o maior país do mundo? A) China B) Rússia C) Canadá D) Estados Unidos")
    let pergunta6 = prompt ("Qual o maior animal terrestre? A) Elefante B) Girafa C) Hipopótamo D) Rinoceronte")
    let repostasCorretas = 0
    let resposta1 = "A"
    let resposta2 = "C"
    let resposta3 = "C"
    let resposta4 = "B"
    let resposta5 = "B"
    let resposta6 = "A"

    if (pergunta1 === resposta1){
        repostasCorretas++
    }else if (pergunta1 === resposta2 || pergunta1 === resposta3 || pergunta1 === resposta4 || pergunta1 === resposta5 || pergunta1 === resposta6){
        alert ("Resposta incorreta! A resposta correta é A) Brasília.")
    }else if (pergunta2 === resposta2){
        repostasCorretas++
    }else if (pergunta2 === resposta1 || pergunta2 === resposta3 || pergunta2 === resposta4 || pergunta2 === resposta5 || pergunta2 === resposta6){
        alert ("Resposta incorreta! A resposta correta é C) Pacífico.")
    }else if (pergunta3 === resposta3){
        repostasCorretas++
    }else if (pergunta3 === resposta1 || pergunta3 === resposta2 || pergunta3 === resposta4 || pergunta3 === resposta5 || pergunta3 === resposta6){
        alert ("Resposta incorreta! A resposta correta é C) Ásia.")
    }else if (pergunta4 === resposta4){
        repostasCorretas++
    }else if (pergunta4 === resposta1 || pergunta4 === resposta2 || pergunta4 === resposta3 || pergunta4 === resposta5 || pergunta4 === resposta6){
        alert ("Resposta incorreta! A resposta correta é B) Everest.")
    }else if (pergunta5 === resposta5){
        repostasCorretas++
    }else if (pergunta5 === resposta1 || pergunta5 === resposta2 || pergunta5 === resposta3 || pergunta5 === resposta4 || pergunta5 === resposta6){
        alert ("Resposta incorreta! A resposta correta é B) Rússia.")
    }else if (pergunta6 === resposta6){
        repostasCorretas++
    }else if (pergunta6 === resposta1 || pergunta6 === resposta2 || pergunta6 === resposta3 || pergunta6 === resposta4 || pergunta6 === resposta5){
        alert ("Resposta incorreta! A resposta correta é A) Elefante.")
    }

    alert ("Você acertou " + repostasCorretas + " perguntas de 6.")
    
}

function exercicio10(){
    let mensagem1 = "Você é uma pessoa incrível!"
    let mensagem2 = "Hoje é um ótimo dia para começar algo novo."
    let mensagem3 = "Acredite em você mesmo e vá em frente!"
    let mensagem4 = "Você é capaz de conquistar seus sonhos."
    let mensagem5 = "A vida é cheia de oportunidades, aproveite-as!"
    let mensagem6 = "Você é amado e valorizado."
    let mensagem7 = "Hoje é um dia perfeito para sorrir!"
    let numero = Math.floor(Math.random() * 7) + 1

    if (numero === 1){
        alert (mensagem1)
    }else if (numero === 2){
        alert (mensagem2)
    }else if (numero === 3){
        alert (mensagem3)
    }else if (numero === 4){
        alert (mensagem4)
    }else if (numero === 5){
        alert (mensagem5)
    }else if (numero === 6){
        alert (mensagem6)
    }else if (numero === 7){
        alert (mensagem7)
    }
}

function exercicio11(){
    let pergunta = prompt("Faça uma pergunta de sim, não ou talvez:")
    let resposta1 = "Sim"
    let resposta2 = "Não"
    let resposta3 = "Talvez"
    let numero = Math.floor(Math.random() * 3) + 1
    let resposta

    if (numero === 1){
        resposta = resposta1
    }else if (numero === 2){
        resposta = resposta2
    }else if (numero === 3){
        resposta = resposta3
    }

    alert (resposta)
}

function exercicio12(){
    let emoji = prompt ("Escolha um emoji: ")
    
    alert ("Você está se sentindo " + emoji + " hoje!")
}

function exercicio13(){
}