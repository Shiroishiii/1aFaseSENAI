//5.5a Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a
//coisa tem piorado. Não consegue nem saber se passou...
//Crie um algoritmo para ler duas notas no Mano Juca e calcular a média
//dele, coitado...
//Diga também se o malandro passou (a média no mobral dele é 7,0).

programa {
  funcao inicio() {

    real notaUm, notaDois, media, 

    escreva ("Digite a primeira nota: ")
    leia (notaUm)

    escreva ("Digite a segunda nota: ")
    leia (notaDois)

    media = (notaUm + notaDois) / 2

    se(media >= 7){
      escreva ("Você passou com média ", media)
    }senao{
      escerva ("você reprovou com média", media)
    }
  }
}
