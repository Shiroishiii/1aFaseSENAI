//Mano Juca enfrenta o rodízio de carros de São Paulo;
//Faça um algoritmo que leia o último número da placa do carro e mostre o
//dia em que ele não pode rodar pela cidade de São Paulo.
//Final 0 ou 1: não pode rodar na segunda-feira;
//Final 2 ou 3: não pode rodar na terça-feira;
//Final 4 ou 5: não pode rodar na quarta-feira;
//Final 6 ou 7: não pode rodar na quinta-feira;
//Final 8 ou 9: não pode rodar na sexta-feira.

programa {
  funcao inicio() {

    cadeia numPlaca

    escreva ("Digite o último número da placa do veículo: ")
    leia (numPlaca)

    se(numPlaca == 0 ou numPlaca == 1){
      escreva ("Não pode rodar na Segunda-feira")
    }
    se(numPlaca == 2 ou numPlaca == 3){
      escreva ("Não pode rodar na Terça-feira")
    }
    se(numPlaca == 4 ou numPlaca == 5){
      escreva ("Não pode rodar na Quarta-feira")
    }
    se(numPlaca == 6 ou numPlaca == 7){
      escreva ("Não pode rodar na Quinta-feira")
    }
    se(numPlaca == 8 ou numPlaca == 9){
      escreva ("Não pode rodar na Sexta-feira")
    }
  }
}
