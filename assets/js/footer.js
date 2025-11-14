function footer() {
  document.getElementById("idfooter").innerHTML = `
    <div class="container py-4">
      <div class="row gy-4 align-items-start">
        <div class="col-12 col-md-4 text-center text-md-start">
          <div class="d-flex flex-column align-items-center align-items-md-start">
            <img src="../assets/img/logo_ShopiCaC.png" alt="shopicac logo" width="60" class="mb-2">
            <h5 class="text-white mb-1">ShopiCaC</h5>
            <p class="text-white-50 mb-0">Tu tienda online para encontrar lo mejor en electrónica, ropa y accesorios.</p>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <h6 class="text-white text-uppercase small mb-3">Navegación</h6>
          <ul class="nav flex-column small">
            <li class="nav-item mb-1"><a href="../index.html" class="nav-link p-0 text-white-50">Inicio</a></li>
            <li class="nav-item mb-1"><a href="../pages/products.html" class="nav-link p-0 text-white-50">Productos</a></li>
            <li class="nav-item mb-1"><a href="../pages/contact.html" class="nav-link p-0 text-white-50">Contacto</a></li>
            <li class="nav-item mb-1"><a href="../pages/login.html" class="nav-link p-0 text-white-50">Login</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h6 class="text-white text-uppercase small mb-3">Contacto</h6>
          <ul class="list-unstyled small text-white-50 mb-2">
            <li class="mb-1"><i class="bi bi-geo-alt-fill me-1"></i>Buenos Aires, Argentina</li>
            <li class="mb-1"><i class="bi bi-envelope-fill me-1"></i>soporte@shopicac.com</li>
            <li class="mb-1"><i class="bi bi-telephone-fill me-1"></i>+54 11 0000-0000</li>
          </ul>
          <div class="d-flex gap-2">
            <a href="#" class="text-white-50 fs-5"><i class="bi bi-instagram"></i></a>
            <a href="#" class="text-white-50 fs-5"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-white-50 fs-5"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <div class="col-12 col-md-3 mt-3 mt-md-0">
          <h6 class="text-white text-uppercase small mb-3">Medios de pago</h6>
          <p class="text-white-50 small mb-2">Hasta 3 cuotas sin interés con tarjetas seleccionadas.</p>
          <div class="d-flex flex-wrap gap-2">
            <span class="badge rounded-pill text-bg-light text-dark">Visa</span>
            <span class="badge rounded-pill text-bg-light text-dark">Mastercard</span>
            <span class="badge rounded-pill text-bg-light text-dark">Mercado Pago</span>
          </div>
        </div>
      </div>
      <hr class="border-secondary border-opacity-50 my-4">
      <p class="text-center text-white-50 small mb-0"> 2024 ShopiCaC. Todos los derechos reservados.</p>
    </div>
  `;
 }

 footer();