let edadUsuario=15
let tienePaseVip=false


// Crea un bloque if / else. Si la edad es estrictamente mayor o igual a 18
// (>=), imprime en consola "Puedes pasar al bar". Si no, imprime "Acceso
// denegado, ve a casa".

if (edadUsuario>=18) {
    console.log("Puedes pasar al bar")
} else {
    console.log("Acceso denegado, ve a casa")
}


// El giro de tuerca (Uso del OR ||): Modifica el if de la línea anterior. Ahora
// la regla es: Si es mayor a 18 O tiene un pase VIP, puede pasar. Ejecuta tu
// código. ¿Pudo pasar el usuario de 15 años? (Debería haber fallado porque
// ambas son falsas)
edadUsuario=15
tienePaseVip=true

if (edadUsuario>=18 || tienePaseVip) {
    console.log("Puedes pasar al bar")
} else {
   console.log("Acceso denegado, ve a casa")
}