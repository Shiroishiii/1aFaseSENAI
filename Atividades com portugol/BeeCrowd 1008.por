programa {
  funcao inicio() {
    
    // Declaração de variáveis
    inteiro numero , horas
    real salarioPerHora , salario

    // Entrada de dados
    escreva ("Qual o seu número de funcionário? \n: ")
    leia (numero)

    escreva ("Quantas horas você trabalhou? \n: ")
    leia (horas)

    escreva ("Quanto você recebe por hora? \n:")
    leia (salarioPerHora) 

    // Processamento
    salario = horas * salarioPerHora

    // Saída de dados
    escreva ("Número: ", numero, "\nSalário: R$ ", salario)

  }
}
