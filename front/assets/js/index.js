function createProductosInicio(productos) {
    try {
        productos.forEach(producto => {
            const nuevoProducto = document.createElement("div");
            nuevoProducto.classList.add("producto");

            nuevoProducto.innerHTML = `
          <div class="producto-info">
            <h3 class="producto-titulo">
              <a href="./products.html">${producto.nombre_categoria}</a>
            </h3>
            <img src="${producto.imagen}" alt="${producto.titulo}">
            <a class="producto-btn" href="./products.html">Ver productos</a>
          </div>
        `;
            document.getElementById("cuatroProductos").appendChild(nuevoProducto);
        });

    } catch (error) {
        console.error('Error creating productos:', error);
    }
}


getProductsInicio()
    .then(productos => {
        createProductosInicio(productos);
    })
    .catch(error => {
        console.error('Error:', error);
    });