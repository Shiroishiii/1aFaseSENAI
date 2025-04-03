//5.11// Crie um programa para ler o número de lados de um polígono
//regular e a medida do lado em cm. Calcular e mostrar o seguinte:
//- Se o número de lados for 3, escrever “TRIÂNGULO” e o valor da área;
//- Se o número de lados for 4, escrever “QUADRADO” e o valor da área;
//- Se o número de lados for 5, escrever “PENTÁGONO”.
programa {
  funcao inicio() {
    inteiro numeroLados, tamanhoLado
    real area
    escreva("Quantos lados: ")
    leia (numeroLados)
    se(numeroLados != 5){
      escreva("Tamanho do lado (cm): ")
    leia(tamanhoLado)
    }
    se(numeroLados == 3){
      area = (tamanhoLado*tamanhoLado) / 2
      escreva ("Triângulo!\n Área: ",area,"cm2" )
    }senao{
      se(numeroLados == 4){
        area = tamanhoLado * tamanhoLado
       escreva ("Quadrado!\n Área: ",area,"cm2" )
      }senao{
        se(numeroLados == 5){
          escreva ("Pentágono!")
        }
      }
    }
  }
}
