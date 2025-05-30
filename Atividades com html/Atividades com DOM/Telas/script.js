inicializar()

let usuario = {
    nome: '',
    email: '',
    senha: ''
}

function cadastrar(){
    usuario.nome =document.getElementById('inpCadNome').value
    usuario.email = document.getElementById('inpCadEmail').value
    usuario.senha = document.getElementById('inpCadSenha').value

    alert("Cadastrado com sucesso!! ;D")

    limparInputs()
    mostrarLogin()
}

function logar(){
    let nome = document.getElementById('inpLogNome').value
    let senha = document.getElementById('inpLogSenha').value

    if(nome === usuario.nome && senha === usuario.senha){
        alert ("Login efetuado com sucesso!")

        limparInputs()
        mostrarProdutos()
    }else{
        alert ("Login ou senha incorretos")
    }
}

function mostrarLogin(){
    esconderTodas()
    document.getElementById ('login').style.display = "flex"
    document.getElementById('inpLogNome').focus()
}

function mostrarCadastro(){
    esconderTodas()
    document.getElementById('cadastro').style.display = "flex"
    document.getElementById('inpCadNome').focus()
}

function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = "flex"
}

function esconderTodas(){
    document.getElementById('cadastro').style.display = "none"
    document.getElementById('login').style.display = "none"
    document.getElementById('produtos').style.display = "none"
}

function limparInputs(){
    document.getElementById('inpCadNome') = ''
    document.getElementById('inpCadEmail') = ''
    document.getElementById('inpCadSenha')  = ''

    document.getElementById('inpLogNome') = ''
    document.getElementById('inpLogSenha') = ''
}

function inicializar(){
    mostrarLogin()
}