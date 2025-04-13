programa {
  funcao inicio() {
    
    inteiro qtndMacas, qtndLaranja, qtndBergamota, qtndBanana, qtndPera
    real precoMaca, precoLaranja, precoBergamota, precoBanana, precoPera, valorFinal

    escreva ("Digite a quantidade de Maças que colheu: ")
    leia (qtndMacas)

    escreva ("Digite a quantidade de Laranjas que colheu: ")
    leia (qtndLaranja)

    escreva ("Digite a quantidade de Bergamotas que colheu: ")
    leia (qtndBergamota)

    escreva ("Digite a quantidade de Bananas que colheu: ")
    leia (qtndBanana)

    escreva ("Digite a quantidade de Peras que colheu: ")
    leia (qtndPera)

    se(qtndMacas >= 0){
      precoMaca = qtndMacas * 1.50
    }senao {
      precoMaca = 0
    }
    se(qtndLaranja >= 1){
      precoLaranja = qtndLaranja * 2.00
    }senao {
      precoLaranja = 0
    }
    se(qtndBergamota >= 1){
      precoBergamota = qtndBergamota * 1.00
    }senao {
      precoBergamota = 0
    }
    se(qtndBanana >= 1){
      precoBanana = qtndBanana * 1.20
    }senao {
      precoBanana = 0
    }
    se(qtndPera >= 1){
      precoPera = qtndPera * 0.50
    }senao {
      precoPera = 0
    }

    valorFinal = precoBanana + precoBergamota + precoLaranja + precoMaca + precoPera

    escreva("====================================================================")
    escreva ( "\n", qtndMacas , " Maças = R$ ", precoMaca, "\n")
    escreva ( qtndLaranja , " Laranjas = R$ ", precoLaranja, "\n" )
    escreva ( qtndBergamota , " Bergamotas = R$ ", precoBergamota, "\n" )
    escreva ( qtndBanana , " Bananas = R$ ", precoBanana, "\n" )
    escreva ( qtndPera , " Peras = R$ ", precoPera, "\n" )
    escreva ("====================================================================")
    escreva (" \nO valor total da sua colheita é de: R$ ", valorFinal)
    escreva ("\n====================================================================")

  }
}
