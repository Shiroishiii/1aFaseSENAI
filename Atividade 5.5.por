// Mano Juca é meio tansinho, coitado. Disso vocês já sabem. Mas a
//coisa tem piorado. Um professor inventou de usar o tal do sistema de
//média ponderada, onde cada prova tem um valor (peso) diferente. Nas
//ideia desse professor que não tem pena da ausência de poder de
//processamento mental do Mano Juca cada prova tem o peso:
//- Prova 1: peso 0.4;
//- Prova 2: peso 0.6;
//- Prova 3: peso 1.
//Crie um algoritmo para ler as notas no Mano Juca e calcular a média
//dele, coitado...
//Diga também se o malandro passou (a média no mobral dele é 7,0).

programa {
  funcao inicio() {
    
    real notaUm, notaDois ,notaTres, pesoUm = 0.4, pesoDois = 0.6, pesoTres = 1, media, somaNotas, somaPesos

  escreva ("Digite a primeira nota: ")
  leia (notaUm)

  escreva ("Digite a segunda nota: ")
  leia (notaDois)

  escreva ("Digite a terceira nota: ")
  leia (notaTres)

  somaNotas = (notaUm * pesoUm) + (notaDois * pesoDois) + (notaTres * pesoTres) 
  somaPesos = pesoUm + pesoDois + pesoTres
  media = somaNotas / somaPesos

  se(media >= 7 ){
    escreva ("Parabéns você passou com média = ", media)
  }senao{
    escreva ("Infelizmente você reprovou com média = ", media)
  }


  }
}
