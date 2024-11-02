const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

/* 
   Reemplace `document.getElementsByName` por `getElementById` 
   para seleccionar el contenedor usando su ID.
*/
const listaDeProductos = document.getElementById("lista-de-productos");

/* 
   Tambien use el `getElementById` en lugar de `querySelector('.input')` para 
   seleccionar el campo de texto del filtro y mejorar la especificidad.
*/
const inputFiltro = document.getElementById("input-filtro");

/* 
   Seleccionar el botón de filtro. 
*/
const botonDeFiltro = document.querySelector("button");


/* 
   Esta función es  para mostrar los productos en pantalla.
   Simplifica el código y permite reutilizarlo para mostrar productos filtrados.
*/
function displayProductos(productosAMostrar) {
    // Limpia el contenido del contenedor de productos para evitar duplicaciones.
  listaDeProductos.innerHTML = "";

  productosAMostrar.forEach(producto => {
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto");

    const titulo = document.createElement("p");
    titulo.classList.add("titulo");
    titulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

     // Añadí el título e imagen al contenedor del producto.
    productoDiv.appendChild(titulo);
    productoDiv.appendChild(imagen);

    // Añadi el contenedor del producto a la lista de productos
    listaDeProductos.appendChild(productoDiv);
  });
}

// Mostrar todos los productos 
displayProductos(productos);


botonDeFiltro.onclick = function () {
  const texto = inputFiltro.value.toLowerCase();
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
};

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};