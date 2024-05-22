function footer() {
  document.getElementById("idfooter").innerHTML =
    `
      <div class="container footer-container">
        <div class="py-2"  style="text-align: center;">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item btn-width border-2">
              <a href="../index.html" class="nav-link px-2 text-white-50">Inicio</a>
            </li>
            <li class="nav-item btn-width border-2">
              <a href="../pages/products.html" class="nav-link px-2 text-white-50">Productos</a>
            </li>
            <li class="nav-item btn-width border-2">
              <a href="../pages/contact.html" class="nav-link px-2 text-white-50">Contacto</a>
            </li>
            <li class="nav-item btn-width border-2">
              <a href="../pages/login.html" class="nav-link px-2 text-white-50">Login</a>
            </li>
          </ul>
          <p class="text-center text-white-50">© 2024 ShopiCaC, Inc</p>
        </div>
      </div>
      `;
}

footer();