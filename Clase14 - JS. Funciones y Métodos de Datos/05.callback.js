// Callback: Es una función que tú le pasas a otra función como si fuera un
// ingrediente, con la promesa de que la "llame después".
 
const saludarAmigo = (nombre) => {
console.log(`¡Qué tal, ${nombre}!`);
};
/* Esta es la función principal (HOF) que acepta una función intrusa como
parámetro */
function procesarUsuario(nombreUsuario, funcionIntrusa) {
// Hace cosas...
console.log("Procesando en base de datos...");
// Al terminar, ejecuta la función que le pasaron por parámetro
funcionIntrusa(nombreUsuario);
}
/* Le inyectamos la función 'saludarAmigo' (Sin paréntesis, porque no
queremos ejecutarla todavía, solo se la entregamos) */
procesarUsuario("Lucas", saludarAmigo);