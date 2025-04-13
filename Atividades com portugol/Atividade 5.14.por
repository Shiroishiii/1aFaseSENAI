//5.14// Crie um programa para ler as medidas dos lados de um triângulo e
//descobrir se ele é equilátero, isóceles ou escaleno. Sendo que:
//- Triângulo equilátero: tem os 3 lados iguaizinhos;
//- Triângulo isóceles: possui dois lados iguais, o outro é diferentão;
//- Triângulo escaleno: todos os lados são diferentes.

programa {
  funcao inicio() {
    
    real ladoUm, ladoDois, ladoTres

    escreva ("Digite a medida em (cm) do primeiro lado do triângulo: ")
    leia (ladoUm)

    escreva ("Digite a medida em (cm) do segundo lado do triângulo: ")
    leia (ladoDois)

    escreva ("Digite a medida em (cm) do terceiro lado do triângulo: ")
    leia (ladoTres)

    se (ladoUm == ladoDois e ladoUm == ladoTres){
      escreva (" É um triângulo equilátero")
    }senao{
      se(ladoUm == ladoDois e ladoUm != ladoTres ou ladoUm == ladoTres e ladoUm != ladoDois ou ladoDois == ladoTres e ladoDois != ladoUm ){
        escreva ("É um triângulo isóceles")
      }senao{
        se(ladoUm != ladoDois e ladoUm != ladoTres){
          escreva ("É um triângulo escaleno")
        }
      }
    }
  }
}
