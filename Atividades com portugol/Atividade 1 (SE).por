//1) Crie um programa onde o usuário digite um número e informe se é positivo.

programa {
  funcao inicio() {

    real numero

    escreva("Digite um número: ")
    leia(numero)
    
    se (numero >= 0){
      escreva("O número é positivo")
    }senao{
      escreva("O número é negativo")
    }
  }
}
