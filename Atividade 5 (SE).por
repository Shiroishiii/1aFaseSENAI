//Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), 
//faça a média e caso a média seja igual ou maior que 7, mostre uma mensagem "Aprovado!".

programa {
  funcao inicio() {
    
    real notaUm, notaDois, notaTres, media

    escreva ("Digite a primeira nota: ")
    leia (notaUm)

    escreva ("Digite a segunda nota: ")
    leia (notaDois)

    escreva ("Digite a terceira nota: ")
    leia (notaTres)

    media = (notaUm + notaDois + notaTres) / 3

    se(media >= 7){
      escreva ("Aprovado!")
    }senao{
      escreva ("Reprovado! ;D")
    }
  }
}
