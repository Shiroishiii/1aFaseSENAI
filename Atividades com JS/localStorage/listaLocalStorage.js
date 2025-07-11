let contador = parseInt(localStorage.getItem("cont")) || 0;

document.getElementById("cont").textContent = contador

function alterarCont(valor){
    contador += valor

    document.getElementById("cont").textContent = contador;
    localStorage.setItem ("cont", contador)
}

const textarea = document.getElementById ("meuTexto");
textarea.value = localStorage.getItem ("texto") || '';

textarea.addEventListener('input', () =>{
    localStorage.setItem ('texto', textarea.value)
})

const ids = ["tarefa1", "tarefa2", "tarefa3"];

ids.forEach(id => {
  const checkbox = document.getElementById(id)

  if (!checkbox) {
    console.warn(`Checkbox com ID "${id}" não encontrado.`)
    return;
  }


  checkbox.checked = localStorage.getItem(id) === "true"


  checkbox.addEventListener("change", () => {
    localStorage.setItem(id, checkbox.checked)
  })
})

let nome = localStorage.getItem("nomeUsuario")

if (!nome) {
    nome = prompt("Qual é o seu nome?")
    localStorage.setItem("nomeUsuario", nome)
}

document.getElementById("mensagem").textContent = `Olá, ${nome}!`

    window.addEventListener('DOMContentLoaded', () => {
      const corSalva = localStorage.getItem('corFundo')
      if (corSalva) {
        document.body.style.backgroundColor = corSalva
      }
    })

    function mudarCor(cor) {
      document.body.style.backgroundColor = cor
      localStorage.setItem('corFundo', cor)
    }

window.addEventListener("DOMContentLoaded", () => {
  let modoSalvo = localStorage.getItem("modo")
  console.log("Modo salvo no localStorage:", modoSalvo)
  if (modoSalvo !== "claro" && modoSalvo !== "escuro") {
    modoSalvo = "claro"
  }
  aplicarModo(modoSalvo)
})

function aplicarModo(modo) {
    document.body.classList.remove("modo-claro", "modo-escuro")
    document.body.classList.add(`modo-${modo}`)
    document.body.style.backgroundColor = "" 
    localStorage.setItem("modo", modo)
}

function alternarModo() {
    const modoAtual = localStorage.getItem("modo") === "escuro" ? "claro" : "escuro"
    aplicarModo(modoAtual)
}

const hoje = new Date().toDateString()
const ultimaVisita = localStorage.getItem("ultimaVisita");

    if (ultimaVisita === hoje) {
      document.getElementById("msg").textContent = "Bem-vindo de volta!";
    } else {
      document.getElementById("msg").textContent = "Saudades de você!";
      localStorage.setItem("ultimaVisita", hoje);
    }


const agora = new Date().toLocaleString();
const ultima = localStorage.getItem("ultimaVisita");
if (ultima) {
    document.getElementById("ultimaVisita").textContent = `Última visita: ${ultima}`
}else {
    document.getElementById("ultimaVisita").textContent = "Esta é sua primeira visita!"
}
localStorage.setItem('ultimaHora', agora)

const input = document.getElementById("mensagemInput")
const mensagem = localStorage.getItem("mensagemBoasVindas") 
if (mensagem) {
    document.getElementById("mensagemTopo").textContent = mensagem
}

input.addEventListener("input", () => {
    document.getElementById("mensagemTopo").textContent = input.value
    localStorage.setItem("mensagemBoasVindas", input.value)
})

let numero = localStorage.getItem("numeroSecreto")
if (!numero) {
    numero = Math.floor(Math.random() * 10) + 1;
    localStorage.setItem("numeroSecreto", numero);
}

function adivinharNumero() {
    const palpite = parseInt(document.getElementById("palpite").value);
    let numero = localStorage.getItem("numeroSecreto");

    if (palpite === parseInt(numero)) {
        resposta.textContent = "Parabéns! Você acertou o número! O número era " + numero + ". Um novo número será gerado."
        numero = Math.floor(Math.random() * 10) + 1;
        localStorage.setItem("numeroSecreto", numero);
    } else {
        resposta.textContent = "Errou! Tente novamente!"
    }
}