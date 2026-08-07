// Bucle --> Repetición de una acción
// Condicion --> (Hace que funcione) --> Controla el funcionamiento
// Punto de corte -_> (Hace que se frene) --> Controla hasta cuando funciona
// Acción --> BLoque de código que se ejecuta repetidamente

// 5. BUCLES DE REPETICION

// 5.1. BUCLE FOR

// 5.1.1 --> Iterando de a uno index++
let cantidad=20
for (let index = 0; index < cantidad; index++) {
    console.log(index);
}

// 5.1.2 --> Iterando de a dos index+=2 (index=index+2)
for (let index = 0; index < cantidad; index+=2) {
    console.log(index);
}

// 5.1.3 --> Iterando de a dos index-=2 pero decreciendo (index=index-2)
cantidad =0
for (let index = 20; index >= cantidad; index-=2) {
    console.log(index);
}

// 5.2. BUCLE WHILE (No tan recomendado)
// Opera mientras se cumpla condicion
// Basicamente la diferencia es que naturalmente no tiene codicion de corte
let contador=20
while (contador > 0) {
    console.log("Cuenta regresiva", contador)
    contador--
}

// 5.3. BUCLE DO WHILE 
// Parecido al while. El bloque de repeticiòn se ejecuta al monos una vez.
// La condicion se evalua luego de la primera iteraciòn
let n = 0

do {
    console.log("Esto se ejecuta al menos una vez")
    n++
    console.log(n)
} while (n<0);


n =-20

do {
    console.log("Esto se ejecuta al menos una vez")
    n++
    console.log(n)
} while (n<0);

// 5.4. ALTERNATIVAS MODERNAS - FOR OF
// Se utiliza para arrays 
const nombres = ["Gustavo", "Andrea", "Luciano"]

for (const nombre of nombres) {
    console.log(`Hola ${nombre}`)
}

// 5.5. ALTERNATIVAS MODERNAS - MAP
// El MAP a cada elemento lo utiliza dentro de una funcion.
// No es un bucle como tal.
// genera un array nuevo con los resultados
// No altera el array original

// Ejemplo. Quiero obtener el doble del precio de un listado
//Nuevo Concepto: CALLBACK (CB) es una funcion que se pasa como parametro en otra funcion
const precios = [100, 200, 300]

const preciosAlDoble = precios.map(function(precio){
    return precio * 2
})
console.log(precios)
console.log(preciosAlDoble)
