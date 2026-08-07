//04. SWITCH
//Similar al IF utilizado cuando hay varios condicionesles

let anioNacimiento=1992
//nota: la Ñ no esta permitida usar en codigo.

switch (true) {
    case anioNacimiento>=1920 && anioNacimiento<=1945:
            console.log("Generación Silenciosa")
        break;

    case anioNacimiento>1946 && anioNacimiento<=1964:
            console.log("Baby Boomer")
        break;

    case anioNacimiento>1965 && anioNacimiento<=1979:
            console.log("Generación X")
        break;

    case anioNacimiento>1979 && anioNacimiento<=2000:
            console.log("Generación Y")
        break;

    case anioNacimiento>2000 && anioNacimiento<=2010:
            console.log("Generación Z")
        break;

    default: 
            console.log("De otra generación")
        break;

}


// El switch tradicional está pensado principalmente para valores concretos:

// let dia = 2;

// switch (dia) {
//     case 1:
//         console.log("Lunes");
//         break;

//     case 2:
//         console.log("Martes");
//         break;

//     case 3:
//         console.log("Miércoles");
//         break;
// }
