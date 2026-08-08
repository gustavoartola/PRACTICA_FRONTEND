// 5 CALLBACK Y HOF (Higher-Order Function)

 
// 5.1. Declaramos la funcion CALLBACK 
// Callback: Es una función que tú le pasas a otra función como si fuera un
// ingrediente, con la promesa de que la "llame después".
const saludarAmigo = (nombre) => {   
console.log(`¡Qué tal, ${nombre}!`);
};

// 5.2. Declaramos la funcion HOF (Higher-Order Function)
// Esta es la función principal (HOF) que acepta una función intrusa como parámetro.
// Otra forma de definirlo, es implemente la función grande que recibe a ese callback. 
function procesarUsuario(nombreUsuario, funcionIntrusa) {
    // Hace cosas...
    console.log("Procesando en base de datos...");
    // Al terminar, ejecuta la función que le pasaron por parámetro
    funcionIntrusa(nombreUsuario);
}

// 5.3. Ejecutamos
/* Le inyectamos la función 'saludarAmigo' (Sin paréntesis, porque no
queremos ejecutarla todavía, solo se la entregamos) */
procesarUsuario("Lucas", saludarAmigo);