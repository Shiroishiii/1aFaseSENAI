//5.15 Escreva um programa que leia o valor de três ângulos de um
//triângulo e escreva se o triângulo é acutângulo, retângulo ou
//obtusângulo, sendo que:
//- Triângulo retângulo: tem um ângulo reto (90 graus)
//- Triângulo obtusângulo: tem um ângulo obtuso (maior que 90 graus)
//- Triângulo acutângulo: tem 3 ângulos agudos (menor que 90 graus)

programa {
  funcao inicio() {
    
    inteiro anguloUm, anguloDois, anguloTres, soma

    escreva ("Digite o valor do primeiro ângulo: ")
    leia (anguloUm)
    
    escreva ("Digite o valor do segundo ângulo: ")
    leia (anguloDois)

    escreva ("Digite o valor do terceiro ângulo: ")
    leia (anguloTres)

    soma = (anguloUm + anguloDois + anguloTres)

    se(soma == 90){
      escreva ("É um triângulo retângulo")
    }senao{
      se(soma >= 90){
        escreva ("É um triângulo obtusângulo")
      }senao{
        se(soma <= 90){
          escreva ("É um triângulo acutângulo")
        }
      }
    }
  }
}
