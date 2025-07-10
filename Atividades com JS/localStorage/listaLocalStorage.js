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