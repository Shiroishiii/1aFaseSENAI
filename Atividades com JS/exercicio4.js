let fruta = prompt ("Qual fruta deseja? (Laranja, uva ou morango)")

if (fruta === "laranja"){
    console.log ("Preparando suco de laranja")
}else{
    if (fruta === "uva"){
        console.log ("Preparando suco de uva")
    }else{
        if (fruta === "morango"){
            console.log ("Preparando suco de morango")
        } else {
            console.log ("Essa fruta não está disponível")
        }
    }
}
