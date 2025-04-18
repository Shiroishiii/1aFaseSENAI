   let brinquedo

    brinquedo = Number (prompt("Digite a quantidade de brinquedos que trouxe: "))

    if (brinquedo === 1){
        console.log ("Você ganhou uma moeda")
     }else{
        if(brinquedo === 2){
            console.log ("Você ganhou duas moedas")
        }else{
            if(brinquedo >= 3){
                console.log ("Você ganhou três moedas")
            }else{
                console.log ("Você nn ganhou moedas")
            }
        }
    }
