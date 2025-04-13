programa {
  funcao inicio() {
    
    // Declaração de variáveis
    real notaUm , notaDois , media , pesoNotaUm = 3.5 , pesoNotaDois = 7.5, somaPesos = 11

    // Entrada de dados
    escreva ("Digite a primeira nota: ")
    leia (notaUm)

    escreva ("Digite a segunda nota: ")
    leia (notaDois)

    // Processamento
    media = (notaUm * pesoNotaUm + notaDois * pesoNotaDois) / somaPesos

    // Saída de dados
    escreva ("Média = ", media)

  }
}
