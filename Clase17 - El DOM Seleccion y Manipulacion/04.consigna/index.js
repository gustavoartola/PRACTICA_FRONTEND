// # 🛒 Consigna: Sistema de Registro y Liquidación de Compras
// ## 📋 Descripción
// Se solicita crear un programa en JavaScript que simule un **punto de venta interactivo** mediante DOM y cuadros de diálogo (`prompt`).
// El objetivo es registrar los productos que un cliente desea comprar, validar cuáles están disponibles en la tienda, calcular el monto total de la compra y **mostrar todos los resultados en la página**.

//0. Capturar los elementos del DOM

const catalogoBody = document.querySelector("#catalogo-body");
const catalogoCantidad = document.querySelector("#catalogo-cantidad");
const iniciar = document.querySelector("#iniciar");
const reiniciar = document.querySelector("#reiniciar");
const listaAceptados = document.querySelector("#lista-aceptados");
const listaNoAceptados = document.querySelector("#lista-no-aceptados");
const total = document.querySelector("#total");
const resultados = document.querySelector("#resultados");

// 0. Mensaje de prueba por medio de PROMP
// let mensaje = prompt("Ingrese su nombre");
// console.log(mensaje);

// 1. Crear una estructura de datos `productos` que contenga el catálogo de la tienda con sus respectivos precios de referencia.
// Cada producto es un objeto con dos claves: `nombre` y `precio`.

const productosAlmacen = [
  { nombre: "Arroz", precio: 1200 },
  { nombre: "Fideos", precio: 950 },
  { nombre: "Aceite", precio: 1850 },
  { nombre: "Azúcar", precio: 1100 },
  { nombre: "Harina", precio: 800 },
  { nombre: "Leche", precio: 1050 },
  { nombre: "Tomate", precio: 650 },
  { nombre: "Sal", precio: 500 },
  { nombre: "Café", precio: 3200 },
  { nombre: "Galletitas", precio: 750 },
];

// 2. Función registrarProductos(productos)
// Implementar una función que le pida al usuario ingresar los productos uno a uno mediante prompt().

// Ejemplo Rapido de prompt
// const mensaje = prompt("Ingresa tu nombre:")
// console.log(mensaje);

// * Si se selecciona Cancelar --> Retorna null
// * Si se sekecciona Aceptar --> Retorna lo quese escribió en el input del prompt
// * Se puede ingresar un producto (existente o no), se puede dejar vacio o ingresar un punto (en la consigna significa que se cierra la compra)

function registrarProductos(productosAlmacen) {
  // Simula carrito de cliente
  const productosCliente = [];

  // Productos no encontrados
  const productosNoEncontrados = [];

  // Obtengo listado de nombres de los productos del almacen
  const nombresProductos = productosAlmacen.map((producto) => producto.nombre);

  console.log(nombresProductos);

  // El cliente tiene que añadir productos hasta que no desee agrear mas  (Compra de productos)
  let agregarProductos = true;

  while (agregarProductos) {
    const entrada = prompt(
      "Ingresa el producto. Para finalizar la compra escribí un punto",
    );

    // validaciones

    if (entrada === null) {
      alert("Para terminar la compra, ingresar un punto: .");
      continue; // vuelve al while y continua
    }

    // Normalizacion
    const productoNormalizado = entrada.trim();

    //Valido Si se el cliente desa finalizar la compra.
    if (productoNormalizado === ".") {
      agregarProductos = false;
      continue; // Salimos sin procesar el "." dado que se termina la compra
    }

    //Valida si el cliemte mo ingreso clave del producto
    if (productoNormalizado === "") {
      alert("Por favor ingresa un producto válido");
      continue;
    }

    // Busco si tengo el producto deseado por el cliente en mi almacen.
    const nombreEncontrado = nombresProductos.find(
      (nombre) => nombre === productoNormalizado,
    );

    if (nombreEncontrado !== undefined) {
      productosCliente.push(productoNormalizado);
      console.log(
        `El producto ${productoNormalizado} fue agregado a la compra.`,
      );
    } else {
      productosNoEncontrados.push(productoNormalizado);
      console.log(`El producto ${productoNormalizado} no fue encontrado.`);
    }
  }

  //Listar Productos de la Compra
  console.log(productosCliente);

  mostrarLista(
    listaAceptados,
    productosCliente,
    "Aun no hay elementos registrados en la compra",
  );

  //Listar Productos No Encontrados
  console.log(productosNoEncontrados);

  mostrarLista(
    listaNoAceptados,
    productosNoEncontrados,
    "Aun no hay elementos no encontrados",
  );

  total.textContent = calcularTotal(productosCliente, productosAlmacen);

  iniciar.classList.add("oculto");

  return (productosCliente, productosNoEncontrados);
}

// 3. Implementar una función que reciba la lista de productos válidos del cliente y la lista base de precios:

// Recorrer la lista de productos comprados con .forEach().
// Buscar con .find() el precio unitario correspondiente a cada producto en el catálogo.
// Acumular y calcular el total a pagar.
// Retorno: el monto total acumulado.

function calcularTotal(productosCliente, productosAlmacen) {
  let totalAPager = 0;

  productosCliente.forEach((producto) => {
    const productoEncontrado = productosAlmacen.find(
      (item) => item.nombre === producto,
    );

    if (productoEncontrado !== undefined) {
      const precio = productoEncontrado.precio;

      totalAPager += precio;

      console.log(
        `Producto: ${producto}, Precio: ${precio}, subtotal ${totalAPager}`,
      );
    }
  });

  return totalAPager;
}

// 4.Función mostrarCatalogo()
// Dibujar en la página la tabla del catálogo a partir del array productos.

// ⚠️ El listado no se escribe a mano en el HTML. En el HTML sólo va la estructura vacía (<thead> y un <tbody> con id); las filas las genera JavaScript.

// Paso	Detalle
// Vaciar	contenedor.innerHTML = "" antes de dibujar.
// Recorrer	.forEach() sobre productos, desestructurando { nombre, precio }.
// Crear	Una fila <tr> por producto, con sus celdas <td> (número, nombre, precio).
// Insertar	appendChild() de las celdas en la fila, y de la fila en el <tbody>.
// Pie	Mostrar la cantidad total de productos del catálogo (productos.length).

function mostrarCatalogo() {

  catalogoBody.innerHTML = "";
  let contador = 1;

  productosAlmacen.forEach((producto) => {
    const { nombre, precio } = producto;
    const productoTR = document.createElement("tr");
    const numeroTD = document.createElement("td");
    const nombreTD = document.createElement("td");
    const precioTD = document.createElement("td");
    numeroTD.textContent = contador;
    nombreTD.textContent = nombre;
    precioTD.textContent = precio;
    precioTD.classList.add("precio");
    productoTR.appendChild(numeroTD);
    productoTR.appendChild(nombreTD);
    productoTR.appendChild(precioTD);
    catalogoBody.appendChild(productoTR);
    catalogoCantidad.textContent = contador;
    contador++;
  });
}

// 5. Función mostrarLista(contenedor, elementos, mensajeVacio)
// Función reutilizable que dibuja un array de strings dentro de un <ul>. Se usa dos veces: para los productos aceptados y para los no encontrados.

// Parámetro	Qué recibe
// contenedor	El elemento <ul> donde hay que dibujar.
// elementos	El array de strings a mostrar.
// mensajeVacio	El texto a mostrar si el array está vacío.
// Comportamiento:

// Vaciar el contenedor antes de dibujar.
// Si el array está vacío → mostrar un único <li> con mensajeVacio y cortar la función.
// Si tiene elementos → crear un <li> por cada uno e insertarlo con appendChild().

function mostrarLista(contenedor, elementos, mensajeVacio) {

  contenedor.innerHTML = "";

  //Si el listado de <elementos> está vacio.
  if (elementos.length === 0) {
    // ⚠️ hay crear un elemento HTML tipo <li>
    const li = document.createElement("li");

    li.textContent = mensajeVacio;
    li.classList.add("vacio");

    // appendChild --> similar al push
    // incorpora el <li> en el contenedor <ul>
    contenedor.appendChild(li);

    return;
  }

  // Por cada item del listado
  elementos.forEach((elemento) => {
    // ⚠️ hay crear un elemento HTML tipo <li>
    const li = document.createElement("li");

    li.textContent = elemento;
    contenedor.appendChild(li);
  });
}

// 6. Función iniciarCompra()
// Es la función que orquesta todo el proceso. Se ejecuta al hacer click en el botón Iniciar compra.

function iniciarCompra() {

  resultados.classList.remove("oculto");
  reiniciar.classList.remove("oculto");

  ReiniciarCompra();

  registrarProductos(productosAlmacen);
  
}


function ReiniciarCompra() {

  const productosCliente = [];
  const productosNoEncontrados = [];

  //Listar Productos de la Compra
  console.log(productosCliente);

  mostrarLista(
    listaAceptados,
    productosCliente,
    "Aun no hay elementos registrados en la compra",
  );

  //Listar Productos No Encontrados
  console.log(productosNoEncontrados);

  mostrarLista(
    listaNoAceptados,
    productosNoEncontrados,
    "Aun no hay elementos no encontrados",
  );

  total.textContent = calcularTotal(productosCliente, productosAlmacen);

  iniciar.classList.remove("oculto");
}

// Invocar registrarProductos() capturando el resultado con desestructuración de objetos:
// const { productosCliente, productosNoEncontrados } = registrarProductos(productos);

// Invocar calcularTotal() con los productos válidos.
// Mostrar los resultados por consola (console.log).
// Mostrar los resultados en la página, usando mostrarLista() y actualizando el total.
// Revelar la sección de resultados con classList.

// Eventos

iniciar.addEventListener("click", function () {
  iniciarCompra();
});

reiniciar.addEventListener("click", function () {
  ReiniciarCompra();
  reiniciar.classList.add("oculto");
  resultados.classList.add("oculto");
});

document.addEventListener("DOMContentLoaded", function () {
  mostrarCatalogo();
});
