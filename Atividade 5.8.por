//5.8// Crie um programa que leia a idade de uma pessoa e diga se ela pode
//votar em uma eleição ou não. As possibilidades são:
//- Menores de 16 anos: não podem votar;
//- Com 16 e 17: voto facultativo;
//- De 18 a 65 anos: voto obrigatório;
//- Maiores de 65: voto facultativo.

programa {
  funcao inicio() {
    
    inteiro idade 

    escreva ("Digite sua idade: ")
    leia (idade)

    se(idade < 16){
      escreva ("Não pode votar")
    }
    se(idade >= 16 e idade <= 17){
      escreva ("Voto facultativo")
    }
    se(idade >= 18 e idade <= 65){
      escreva ("Voto obrigatório")
    }
    se(idade > 65){
      escreva ("Voto facultativo")
    }
  }
}
