//3) Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
//Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

programa {
  funcao inicio() {
    real salario, bonus
    inteiro anosServico

    escreva("Digite seu salário: ")
    leia(salario)
    
    escreva("Digite seus anos de serviço: ")
    leia(anosServico)
    
    se (anosServico >= 5) {
      bonus = salario * 0.05
      salario = salario + bonus
      escreva("Você recebeu um bônus de 5%. Seu novo salário é: ", salario)
    } senao {
      escreva("Você não tem direito a bônus. Seu salário permanece: ", salario)
    }
  }
}
