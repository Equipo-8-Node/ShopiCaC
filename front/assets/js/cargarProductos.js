const $cards = document.getElementById("cards");

// cargar productos desde el backend
function crearTarjetasProductos(productos) {
    productos.forEach(producto => {
        const nuevoProducto = document.createElement("div");
        nuevoProducto.classList = "card hover";

        nuevoProducto.innerHTML = `
        <img src="${producto.imagen}" class="card-img-top h-50" alt="${producto.titulo} image">
  
        <div class="card-body d-flex flex-column justify-content-between p-2">
  
        <p class="card-title">${producto.titulo}</p>
        <p class="card-text">${producto.nombre_categoria}</p>
        </div>
        <div class="card-footer">
              <p>$${producto.precio}</p>
              <div>
                <a href="./detail.html?id=${producto.id}" class="btn btn-outline-danger btn-sm">
                  Detalles
                </a>  
                <button id="${producto.id}" class="btn btn-outline-danger add-to-cart-btn btn-sm">
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
      `
        $cards.appendChild(nuevoProducto);
        nuevoProducto.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto))
    });
}

getAllProducts().then(productos => {
    crearTarjetasProductos(productos);
})
