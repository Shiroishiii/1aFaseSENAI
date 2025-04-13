//5.10// Na feira da rua do Mano Juca, as maçãs custam R$0,30 se ele
//comprar menos de uma dúzia, mas se comprar 12 ou mais cada uma custa
//apenas R$0,25. Crie um programa para ler o número de maçãs que ele vai
//comprar e informar quanto será o total da compra.

programa {
  funcao inicio() {
    
    inteiro numMacas
    real valorMaca, total

    escreva ("Digite a quantidade de maças que pegou: ")
    leia (numMacas)

    se(numMacas >= 12){
      valorMaca = 0.25
      total = numMacas * valorMaca

      escreva ("Total: R$ ", total)
    }senao{
      valorMaca = 0.30
      total = numMacas * valorMaca

      escreva ("Total: R$ ", total)
    }
  }
}
