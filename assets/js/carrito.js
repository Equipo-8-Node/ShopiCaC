import datos from "./datos.js";

// Seleccionar elementos del DOM
const $productsContainer = document.getElementById("products-container"); // Contenedor de productos
const $totalNumberOfItems = document.getElementById("total-items"); // Elemento que muestra el total de elementos en el carrito
const $cartTotal = document.getElementById("total"); // Elemento que muestra el total del carrito

const productos = datos.productos;

// Clase ShoppingCart para manejar el carrito de compras
export class ShoppingCart {
  constructor() {
    this.items = this.loadCart() || []; // Array de items en el carrito
    this.total = 0; // Total del carrito
    this.updateCartUI();
  }

  // Método para agregar un item al carrito
  addItem(id, products) {
    // console.log(id);
    // console.log(products)
    const product = products.find((item) => item.id === id);
    // console.log(product.id)
    // console.log(product);

    const { titulo, precio, imagen } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((producto) => {
      totalCountPerProduct[producto.id] =
        (totalCountPerProduct[producto.id] || 0) + 1;
    });

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(
      `product-count-for-id${id}`
    );

    if (currentProductCount > 1) {
      currentProductCountSpan.textContent = `${currentProductCount}x `;
    } else {
      $productsContainer.innerHTML += `
      <li id=producto${id} class="list-group-item list-group-item-action list-group-item-success">
        <img
            src="${imagen}"
            class="cart-img"
            alt="${titulo} image"
          >
          <p>
          <span class="product-count" id=product-count-for-id${id}>${currentProductCount}x </span>${titulo}
        </p>
          <p>$${precio}</p>
      </li>
      `;
    }

    // alert("Producto agregado al carrito");
    this.saveCart();
    this.updateCartUI();
  }

  // Método para obtener el número de items en el carrito
  getCounts() {
    return this.items.length;
  }

  // Método para vaciar el carrito
  clearCart() {
    if (!this.items.length) {
      alert("Tu carrito de compras ya está vacío");
      return;
    }

    const isCartCleared = confirm(
      "¿Está seguro de que desea borrar todos los artículos de su carrito de compras?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      $productsContainer.innerHTML = "";
      $totalNumberOfItems.textContent = 0;
      $cartTotal.textContent = 0;
      this.saveCart();
    }
  }

  // Método para calcular el total del carrito
  calculateTotal() {
    this.total = this.items.reduce((total, item) => total + item.precio, 0);
    $cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }

  // Método para guardar el carrito en localStorage
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  // Método para cargar el carrito desde localStorage
  loadCart() {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : null;
  }

  // Método para actualizar la interfaz de usuario del carrito
  updateCartUI() {
    $productsContainer.innerHTML = "";
    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] =
        (totalCountPerProduct[dessert.id] || 0) + 1;
    });

    for (const id in totalCountPerProduct) {
      const producto = productos.find((item) => item.id == id);
      const currentProductCount = totalCountPerProduct[id];
      $productsContainer.innerHTML += `
      <li id="producto${producto.id}" class="list-group-item list-group-item-action list-group-item-success">
        <img
            src="${producto.imagen}"
            class="cart-img"
            alt="${producto.titulo} image"
          >
          <p>
          <span class="product-count" id=product-count-for-id${producto.id}>${currentProductCount} x </span>${producto.titulo}
        </p>
          <p>$${producto.precio}</p>
          <div class="d-flex gap-1 mt-2">
            <button type="button" class="btn btn-sm btn-success increase-item w-25" data-id="${producto.id}">+</button>
            <button type="button" class="btn btn-sm btn-warning text-white decrease-item w-25" data-id="${producto.id}">-</button>
            <button type="button" class="btn btn-sm btn-danger remove-item w-50" data-id="${producto.id}">Eliminar</button>
          </div>
      </li>
      `;
    }

    $totalNumberOfItems.textContent = this.getCounts();
    this.calculateTotal();
  }

  // Método para incrementar en 1 la cantidad de un producto en el carrito
  increaseItem(id) {
    const producto = productos.find((item) => item.id === id);
    if (!producto) return;

    this.items.push(producto);
    this.saveCart();
    this.updateCartUI();
  }

  // Método para disminuir en 1 la cantidad de un producto en el carrito
  decreaseItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return;

    this.items.splice(index, 1);
    this.saveCart();
    this.updateCartUI();
  }

  // Método para eliminar por completo un producto del carrito
  removeItem(id) {
    if (!this.items.length) return;

    this.items = this.items.filter((item) => item.id !== id);
    this.saveCart();
    this.updateCartUI();
  }

  // Método para mostrar notificaciones al agregar un producto al carrito
  mostrarNotificacion() {
    const toastTrigger = document.querySelector('.add-to-cart-btn');
    const toast = document.getElementById("toast");

    if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast);
      toastBootstrap.show();
    }
  }
}
