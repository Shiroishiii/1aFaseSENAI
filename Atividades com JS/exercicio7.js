let pedido = prompt ("Qual tipo de café deseja? (café, capuccino ou expresso)")

if (pedido === "café"){
    console.log ("Servindo café ☕")
}else{
    if(pedido === "capuccino"){
        console.log ("Servindo capuccino ☕")
    }else{
        if (pedido === "expresso"){
            console.log ("Servindo expresso ☕")
        }else{
            console.log ("Desculpe, não temos esse tipo de café 😔")
        }
    }
}