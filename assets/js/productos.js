import datos from "./datos.js";

const productos = datos.productos;
let categorias = "";
// resetForm(); //reinicio el formulario (checkboxes y search)

const $cards = document.getElementById("cards");
const $checkboxes = document.getElementById("checkboxes");
const $search = document.querySelector('input[placeholder="buscar"]');

// Creo las cards
const crearCards = (productos) => {
  $cards.innerHTML = "";
  productos.forEach((producto) => {
    $cards.innerHTML += `
      <section class="card h-100 hover my-3 ">
        <img
          src="${producto.imagen}"
          class="card-img-top h-50"
          alt="${producto.titulo} image"
        >

        <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.categoria}</p>
        </div>

        <div class="card-footer d-flex justify-content-between">
          <p class="m-2">$ ${producto.precio}</p>
          <a href="../pages/details.html?id=${producto.id}" class="btn btn-outline-danger">
          Detalles
          </a>
        </div>
      </section>    
    `;
  });
};

// Extraigo las categorias del array original, y elimino los duplicados
const crearCategorias = (array) => {
  // console.log(array).
  let categorias = array.map((producto) => producto.categoria);
  // console.log(categorias)

  categorias = categorias.reduce((accum, element) => {
    if (!accum.includes(element)) {
      accum.push(element);
    }
    return accum;
  }, []);

  return categorias;
};

const crearCheckbox = (categorias) => {
  categorias.forEach((categoria) => {
    $checkboxes.innerHTML += `
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
    `;
  });
};

// filtro con checkboxes
const filterCheckbox = (array, checked) => {
  const filterCheckboxes = Array.from(checked)
    .filter((checkbox) => checkbox.checked)
    .map((check) => check.value);

  if (filterCheckboxes.length > 0) {
    const filteredArray = array.filter((producto) =>
      filterCheckboxes.includes(producto.categoria.toLowerCase())
    );
    return filteredArray;
  } else {
    const filteredArray = array;
    return filteredArray;
  }
};

// filtro con el search
const filterSearch = (array, value) => {
  let filteredArray = array.filter((element) =>
    element.titulo.toLowerCase().includes(value.toLowerCase())
  );

  return filteredArray;
};

const productoNoEncontrado = () => {
  $cards.innerHTML = "";
  
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

/***************************************************/

crearCards(productos, $cards);
categorias = crearCategorias(productos);
crearCheckbox(categorias, $checkboxes);

const filterAndRender = () => {
  const checked = document.querySelectorAll('input[type="checkbox"]:checked');
  let dataFiltered = filterCheckbox(productos, checked);

  dataFiltered = filterSearch(dataFiltered, $search.value);

  dataFiltered.length === 0
    ? productoNoEncontrado($cards)
    : crearCards(dataFiltered, $cards);
  // crearCards(dataFiltered, $cards);
};

$checkboxes.addEventListener("change", () => {
  filterAndRender();
});

$search.addEventListener("input", (e) => {
  filterAndRender();
});
