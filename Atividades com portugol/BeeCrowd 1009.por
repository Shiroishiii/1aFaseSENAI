programa {
  funcao inicio() {

    // Declaração de variáveis
    cadeia nome
    real salarioFixo, totalVendas, comissao = 15/100, salarioTotal

    // Entrada de dados
    escreva ("Qual seu nome? : ")
    leia (nome)

    escreva ("Qual seu salário fixo? : ")
    leia (salarioFixo)

    escreva ("Qual o total de vendas? : ")
    leia (totalVendas)

    // Processamento
    salarioTotal = salarioFixo + (totalVendas * comissao)

    // Saída de dados
    escreva ("Total = R$ ", salarioTotal)

  }
}
