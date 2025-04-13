//5.9// Tendo como entrada a altura (em metros) e o gênero (1: feminino;
//2: masculino) de uma pessoa, construa um programa que calcule e
//apresente seu peso ideal utilizando as fórmulas abaixo:
//- para mulheres: (62.1 * altura) – 44.7
//- para homens: (72.7 * altura) – 58


programa {
  funcao inicio() {
    
    real altura, pesoIdeal
    inteiro genero

    escreva ("Digite sua altura (em metros): ")
    leia (altura)

    escreva ("Digite 1 para feminino e 2 para masculino: ")
    leia (genero)

    se(genero == 1 ){
      pesoIdeal = (62.1 * altura) - 44.7

      escreva ("Seu peso ideal é ", pesoIdeal )
    }
    se(genero == 2 ){
      pesoIdeal = (72.7 * altura) - 58

      escreva ("Seu peso ideal é ", pesoIdeal)
    }

  }
}
