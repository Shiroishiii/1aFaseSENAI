//5.13// Crie um programa para ler 3 valores inteiros e informar qual é o
//maior deles. Pode considerar que nenhum energúmeno vai digitar valores
//iguais.

programa {
  funcao inicio() {
    
    inteiro numUm, numDois, numTres

    escreva ("Digite o primeiro número: ")
    leia (numUm)

    escreva ("Digite o segundo número: ")
    leia (numDois)

    escreva ("Digite o terceiro número: ")
    leia (numTres)

    se (numUm > numDois e numUm > numTres){
      escreva ("O maior número é ", numUm)
    }senao{
      se(numDois > numUm e numDois > numTres){
        escreva ("O maior número é ", numDois)
      }senao{
        se (numTres > numUm e numTres > numDois){
          escreva ("O maior número é ", numTres)
        }
      }
    }
  }
}
