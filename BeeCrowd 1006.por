programa {
  funcao inicio() {
    
    // Declaração de variáveis
    real notaUm , notaDois , notaTres, media , pesoNotaUm = 2 , pesoNotaDois = 3, pesoNotaTres = 5 ,somaPesos = 10

    // Entrada de dados
    escreva ("Digite a primeira nota: ")
    leia (notaUm)

    escreva ("Digite a segunda nota: ")
    leia (notaDois)

    escreva ("Digite oa terceira nota: ")
    leia (notaTres)

    // Processamento
    media = (notaUm * pesoNotaUm + notaDois * pesoNotaDois + notaTres * pesoNotaTres) / somaPesos

    // Saída de dados
    escreva ("Média = ", media)

  }
}
