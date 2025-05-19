function exercicio1(){
    let idade = 0
    let carteira = '' 
    
    while (idade < 18 || carteira == "não"){
        idade = Number(prompt("Qual a sua idade?"))
        carteira = prompt("Você tem carteira de motorista? (sim/não)")
        if (idade >= 18 && carteira == "sim"){
            alert ("Você pode dirigir")
        }else{
            alert ("Você não pode dirigir")
        }
    }
}

function exercicio2(){
    let num = 0
    let positivo = false 
    let par = false

    while (num <= 0){
        num = Number(prompt("Digite um número :"))
        if (num > 0 && num % 2 == 0){
            positivo = true
            par = true
            alert ( num +" Número é positivo e par")
        }else if (num > 0 && num % 2 != 0){
            positivo = true
            par = false
            alert ( num +" Número é positivo e ímpar")
        }else if (num < 0 && num % 2 == 0){
            positivo = false
            par = true
            alert ( num +" Número é negativo e par")
        }else if (num < 0 && num % 2 != 0){
            positivo = false
            par = false
            alert ( num +" Número é negativo e ímpar")
        }
    }   
}

function exercicio3(){
    let usuario = prompt("Digite seu usuario:")
    let senha = prompt("Digite sua senha:")
    let usuarioCorreto = "admin"
    let senhaCorreta = "1234"

    if (usuario == usuarioCorreto || senha == senhaCorreta){
        alert("Acesso permitido")
    }else{
        alert("Acesso negado")
    }
}

function exercicio4(){
    let numUm = Number(prompt("Digite o primeiro número:"))
    let numDois = Number(prompt("Digite o segundo número:"))

    if (numUm > 0 && numDois < 0){
        alert("Valores válidos")
    }else if (numUm > 0 || numDois < 0){
        alert("Valores inválidos")
    }
}

function exercicio5(){
    let nota = prompt("Digite a nota do aluno:")

    if (nota > 6 && nota <= 10){
        alert("Aprovado")
    }else{
        alert("Reprovado")
    }
}

function exercicio6(){
    let num = Number(prompt("Digite um número:"))
    
    if (num > 1 && num < 100){
        alert("Número válido")
    }else{
        alert("Número inválido")
    }
}
    
function exercicio7(){
    let idade = Number(prompt("Digite sua idade:"))
    let estudante = prompt("Você é estudante? (sim/não)")

    if (idade < 18 || estudante == "sim"){
        alert("Meia-entrada")
    }else{
        alert("Entrada inteira")
    }
}

function exercicio8(){
    let aceitouTermos = prompt("Você aceitou os termos? (sim/não)")
    let confirmouEmail = prompt("Você confirmou seu email? (sim/não)")
    
    if (aceitouTermos == "sim" && confirmouEmail == "sim"){
        alert("Cadastro concluído")
    }else{
        alert("Cadastro não concluído")
    }
}

function exercicio9(){
    let altura = Number(prompt("Digite sua altura:"))
    let peso = Number(prompt("Digite seu peso:"))

    if (altura > 1.60 && peso > 50 && peso < 90){
        alert("Apto para o esporte")
    }else{
        alert("Não apto para o esporte")
    }
}

function exercicio10(){
    let idade = Number(prompt("Digite sua idade:"))
    let aceitouTermos = prompt("Você aceitou os termos? (sim/não)")

    if (idade < 18 || aceitouTermos == "não"){
        alert("Acesso negado")
    }else{
        alert("Acesso permitido")       
    }
}

function exercicio11(){
    let senha = prompt("Digite sua senha:")
    let senhaCorreta = "abc123"
    let tentativas = 0
    let maxTentativas = 3

    while (senha != senhaCorreta && tentativas < maxTentativas){
        tentativas++
        senha = prompt("Senha incorreta. Tente novamente:")
        if (senha == senhaCorreta && tentativas < maxTentativas){
            alert("Acesso permitido")
        }else{
            alert("Acesso negado. Você excedeu o número de tentativas.")
        }
    }
}

function exercicio12(){
    let idade = 0
    let aceitouTermos = false

    while (idade < 18 || !aceitouTermos){
        idade = Number(prompt("Digite sua idade:"))
        aceitouTermos = prompt("Você aceitou os termos? (sim/não)") == "sim" ? true : false

        if (idade >= 18 && aceitouTermos){
            alert("Acesso permitido")
        }
    }
}

function exercicio13(){
    let numUm = Number(prompt("Digite o primeiro número:"))
    let numDois = Number(prompt("Digite o segundo número:"))

    while (numUm % 2 != 0 || numDois % 2 != 0){
        numUm = Number(prompt("Digite o primeiro número:"))
        numDois = Number(prompt("Digite o segundo número:"))
    }
    
    if (numUm % 2 == 0 && numDois % 2 == 0){
        alert("Os números são pares")
    }
}

function exercicio14(){
    let letra = prompt("Digite uma letra:")

    while (letra == "a" || letra == "b" ){
        letra = prompt("Digite uma letra:")
        if (letra == "a" || letra == "b"){
            alert ("A letra é invalida")
        }else {
            alert ("A letra é valida")
        }
    }
}

function exercicio15(){
    let num = Number(prompt("Digite um número:"))
    
    while (num < 10 && num > 20 || num != 50){
        num = Number(prompt("Digite um número:"))
        if (num > 10 && num < 20 || num == 50){
            alert ("Número válido")
        }else {
            alert ("Número inválido")
            }
    }
}

function exercicio16(){
    let login = prompt("Digite seu login:")
    let senha = prompt("Digite sua senha:")
    let loginCorreto = "admin"
    let senhaCorreta = "1234"

    while (login != loginCorreto || senha != senhaCorreta){
        alert("Login ou senha incorretos. Tente novamente.")
        login = prompt("Digite seu login:")
        senha = prompt("Digite sua senha:")
        if (login == loginCorreto && senha == senhaCorreta){
            alert("Acesso permitido")
        }
    }
}

function exercicio17(){
    let aceitouContinuar = false 

    while (!aceitouContinuar){
        aceitouContinuar = prompt("Você aceitou continuar? (sim/não)") == "sim" ? true : false
        if (aceitouContinuar){
            alert("Você aceitou continuar")
        }
        else {
            alert("Você não aceitou continuar")
        }
    }
}

function exercicio18(){
    let numUm = Number(prompt("Digite o primeiro número:"))
    let numDois = Number(prompt("Digite o segundo número:"))

    while (numUm % 3 != 0 && numDois < 10 || numUm < 10 && numDois % 3 != 0){
        numUm = Number(prompt("Digite o primeiro número:"))
        numDois = Number(prompt("Digite o segundo número:"))
        if (numUm % 3 == 0 && numDois > 10 || numUm > 10 && numDois % 3 == 0){
            alert ("Os números são válidos")
        }else {
            alert ("Os números são inválidos")
        }
    }
}

function exercicio19(){
    let usuario = prompt("Digite seu usuário:")
    let senha = prompt("Digite sua senha:")
    let usuarioCorreto = "admin"
    let senhaCorreta = "321"

    while (usuario != usuarioCorreto || senha != senhaCorreta){
        alert("Usuário ou senha incorretos. Tente novamente.")
        usuario = prompt("Digite seu usuário:")
        senha = prompt("Digite sua senha:")
        if (usuario == usuarioCorreto && senha == senhaCorreta){
            alert("Acesso permitido")
        }
    }
}

function exercicio20(){
    let idade = Number(prompt("Digite sua idade:"))
    let nome = prompt("Digite seu nome:")
    let idadepreenchida = false
    let nomepreenchido = false

    while (!idadepreenchida || !nomepreenchido){
        if (idade >= 1){
            idadepreenchida = true
        }else{
            idade = Number(prompt("Idade inválida. Digite sua idade:"))
        }
        if (nome.length > 0){
            nomepreenchido = true
        }else{
            nome = prompt("Nome inválido. Digite seu nome:")
        }
        if (idadepreenchida && nomepreenchido){
            alert("Cadastro concluído")
        }else{
            alert("Cadastro não concluído")
        }
    }
}

function exercicio21(){
    for(let num = 1; num <= 100; num++){
        if (num % 3 == 0 || num % 2 == 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não é divisível por 3 nem é par")
        }
    }
}

function exercicio22(){
    for(let num = 1; num <= 50; num++){
        if (num % 7 == 0 || num % 2 != 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não é divisível por 7 nem é ímpar")
        }
    }
}

function exercicio23(){
    for(let num = 1; num <= 30; num++){
        if (num % 2 != 0 && num % 3 != 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " é divisível por 2 e 3")
        } 
    }
}

function exercicio24(){
    for(let num = 1; num <= 100; num++){
        if (num >= 10 && num <= 20 || num >= 90 && num <= 100){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não está entre 10 e 20 nem entre 90 e 100")
        }
    }
}

function exercicio25(){
    for (let num = 0; num <= 20; num++){
        if (num % 4 == 0 && num % 8 != 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não é divisível por 4 e não é múltiplo de 8")
        }
    }
}

function exercicio26(){
    for(let num = 1; num <= 50; num++){
        if (num > 30 && num < 40 || num % 10 === 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não está entre 30 e 40 nem é múltiplo de 10")
        }
    }
}

function exercicio27(){
    for( let num = 1; num <= 20; num++){
        if (num % 5 == 0 && num % 2 == 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não é divisível por 5 e não é par")
        }
    }
}

function exercicio28(){
    for (let num = 1; num <= 100; num++){
        if (num % 6 == 0 && num % 9 != 0){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não é divisível por 6 e não é múltiplo de 9")
        }
    }   
}

function exercicio29(){
    for (let num = 1; num <= 50; num++){
        if (num < 10 || num > 40 ){
            alert ("Número: " + num)
        }else{
            alert ("Número: " + num + " não é menor que 10 e nem maior que 40")
        }
    }
}

function exercicio30(){
    for(let num = 1; num <= 30; num++){
        if (num % 3 == 0 && num > 10 && num < 25){
            alert ("Número: " + num + " Especial!!")
        }else{
            alert ("Número: " + num)
        }
    }
}