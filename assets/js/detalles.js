import datos from "./datos.js";

const $container = document.getElementById("card-detalles");
const $volver = document.getElementById("botonVolver");

const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const producto = datos.productos.find((producto) => producto.id == id);
console.log(producto)

const detalleProducto = (producto) => {
  $container.innerHTML = "";
  $container.innerHTML = 
  `
		<div class="row g-0">
			<div class="col-md-4">
				<img src="${producto.imagen}" class="img-fluid rounded-start h-100" alt="${producto.imagen} image">
			</div>
			
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">${producto.titulo}</h5>
					<ul class="list-group list-group-flush">	
						<li class="list-group-item">${producto.descripcion}</li>
						<li class="list-group-item">Categoria: ${producto.categoria}</li>
						<li class="list-group-item">Precio: ${producto.precio}</li>
						<li class="list-group-item">Valoracion: ${producto.valoracion.tasa}</li>
						<li class="list-group-item">Cantidad disponible: ${producto.valoracion.conteo}</li>	
					</ul>
				</div>
			</div>
		</div>
	`;
};


detalleProducto(producto)

$volver.addEventListener('click', () => {
	window.history.back();
});