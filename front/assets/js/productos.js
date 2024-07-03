//import datos from "./datos.js";
import { ShoppingCart } from "./carrito.js";

//const productos = datos.productos;
const $cards = document.getElementById("cards");
const $checkboxes = document.getElementById("checkboxes");
const $search = document.querySelector('input[placeholder="buscar"]');
const $clearCartBtn = document.getElementById("clear-cart-btn");

const cart = new ShoppingCart();

/*
const crearCards = (productos) => {
  $cards.innerHTML = productos
    .map(
      (producto) =>
        `
        <section class="card hover">
          <img
            src="${producto.imagen}"
            class="card-img-top h-50"
            alt="${producto.titulo} image"
          >
          <div class="card-body d-flex flex-column justify-content-between p-2">
            <p class="card-title">${producto.titulo}</p>
            <p class="card-text">${producto.categoria}</p>
          </div>
          <div class="card-footer">
            <p>$${producto.precio}</p>
            <div>
              <a href="../pages/detail.html?id=${producto.id}" class="btn btn-outline-danger btn-sm">
                Detalles
              </a>  
              <button id="${producto.id}" class="btn btn-outline-danger add-to-cart-btn btn-sm">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </section>
      `
    )
    .join("");
};
*/

const crearCategorias = (array) => {
  const categoriasUnicas = [
    ...new Set(array.map((producto) => producto.categoria))
  ];
  return categoriasUnicas;
};

const crearCheckbox = (categorias) => {
  $checkboxes.innerHTML = categorias
    .map(
      (categoria) => `
    <input
      type="checkbox"
      class="checkbox-input"
      id="${categoria.toLowerCase()}"
      value="${categoria.toLowerCase()}"
    />
    <label
      for="${categoria.toLowerCase()}"
      class="checkbox-label">
      ${categoria}
    </label>
  `
    )
    .join("");
};

const filterCheckbox = (array, checked) => {
  const filterCheckboxes = Array.from(checked)
    .filter((checkbox) => checkbox.checked)
    .map((check) => check.value);

  if (filterCheckboxes.length === 0) return array;

  return array.filter((producto) =>
    filterCheckboxes.includes(producto.categoria.toLowerCase())
  );
};

const filterSearch = (array, value) => {
  return array.filter((element) =>
    element.titulo.toLowerCase().includes(value.toLowerCase())
  );
};

const productoNoEncontrado = () => {
  $cards.innerHTML = `
    <section class="card h-100 hover">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/miportfoliocab.appspot.com/o/nf.jpg?alt=media&token=e8ff169d-b4c1-4b19-b29f-b67e45da97fd"
        class="card-img-top h-50"
        alt="Event not found">
      <div class="card-body">
        <h5 class="card-title">Producto no encontrado</h5>
        <p class="card-text">Por favor, intente nuevamente</p>
      </div>
    </section>
  `;
};

const filterAndRender = () => {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  let dataFiltered = filterCheckbox(productos, checked);
  dataFiltered = filterSearch(dataFiltered, $search.value);

  if (dataFiltered.length === 0) {
    productoNoEncontrado();
  } else {
    crearCards(dataFiltered);
  }
};

// reinicio del formulario al retroceder con el botón "Volver" en la página details
export const resetForm = () => {
  window.addEventListener("pageshow", () => {
    const form = document.querySelector('.filtros');
    form.reset();
  });
};

/****************************************************************************************************************/

resetForm(); //reinicio el formulario (checkboxes y search)

document.addEventListener("click", (event) => {
  if (event.target.closest(".add-to-cart-btn")) {
    const btn = event.target.closest(".add-to-cart-btn");

    cart.addItem(Number(btn.id), productos);
    cart.updateCartUI();
    cart.mostrarNotificacion();
  }
});

$checkboxes.addEventListener("change", filterAndRender);
$search.addEventListener("input", filterAndRender);

$clearCartBtn.addEventListener("click", () => {
  cart.clearCart();
  cart.updateCartUI();
});

//crearCards(productos);
const categorias = crearCategorias(productos);
crearCheckbox(categorias);

///////////////////////////////////

