function prepararCafe(tipoCafe = "Expreso") {
    //Puedo definir un parametro sin necesidad de que sea obligatorio pasar un argumento(valor).
    //Puedo definir un valor por defencto
    console.log(`Preparando un buen cafe ${tipoCafe}`);
}

// Escenario 1: Solicito un cafe especifico
let pedidoCafe = "Capuchino"
prepararCafe (pedidoCafe)

// Escenario 2: Solicito un cafe, me da igual el tipo de cafe
prepararCafe ()
