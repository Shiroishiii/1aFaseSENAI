programa {
  funcao inicio() {
    inteiro  numero
    escreva ("Digite um número: ")
    leia (numero)
    se(numero % 3 == 0){
      escreva ("É múltiplo de 3")
      se(numero % 5 == 0){
        escreva (" é de 5 também!")
        se(numero % 9 == 0){
          escreva (" é de 9 também!!!!!!!!!!! ;D")
        }
      }
    }
    senao{
      escreva ("Não é múltiplo de 3")
    }
    
  }
}
