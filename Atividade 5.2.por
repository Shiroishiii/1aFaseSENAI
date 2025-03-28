// Mano Juca bateu a cabeça e está com problemas de raciocínio...
//Está analisando dois números há horas e não consegue
//descobrir qual deles é o maior. Vamos ajuda-lo!
//Crie um algoritmo que leia dois números A e B e imprima o
//maior deles

programa {
  funcao inicio() {
    
    inteiro numeroUm, numeroDois

    escreva("Digite o primeiro número: ")
    leia(numeroUm)

    escreva ("Digite o segundo número: ")
    leia(numeroDois)

    se (numeroUm >= numeroDois){
      escreva (numeroUm, " é maior que ", numeroDois)
    }senao{
      escreva(numeroDois, " é maior que ", numeroUm)
    }
  }
}
