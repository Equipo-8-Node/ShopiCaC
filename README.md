# ShopiCaC

Tienda online de ejemplo desarrollada para practicar HTML, CSS, JavaScript y Bootstrap. Permite navegar productos, ver información destacada, contactar y simular un flujo de login.

## Tecnologías utilizadas

- **HTML5** para la estructura de las páginas.
- **CSS3** para los estilos (incluye estilos propios y utilidades de Bootstrap).
- **Bootstrap 5** (CSS y JS) para componentes, grilla responsive y helpers.
- **Bootstrap Icons** para iconografía.
- **JavaScript** vanilla para:
  - Botón "ir arriba".
  - Lógica del carrito y filtrado de productos.
  - Generación dinámica de header y footer.

## Estructura del proyecto

```text
ShopiCaC/
├─ index.html               # Página de inicio
├─ pages/
│  ├─ products.html         # Listado de productos, filtros y carrito
│  ├─ contact.html          # Formulario de contacto con captcha simple
│  └─ login.html            # Pantalla de login
├─ assets/
│  ├─ styles/
│  │  ├─ styles.css         # Estilos globales
│  │  ├─ html.css           # Estilos específicos de index
│  │  ├─ productos.css      # Estilos de productos
│  │  ├─ contact.css        # Estilos de contacto
│  │  └─ login.css          # Estilos de login
│  ├─ js/
│  │  ├─ header.js          # Inserta el header común en las páginas internas
│  │  ├─ footer.js          # Inserta el footer común en las páginas internas
│  │  ├─ theme.js           # Cambio de tema (light/dark/auto)
│  │  ├─ btnArriba.js       # Botón de "volver arriba"
│  │  ├─ productos.js       # Lógica de productos y carrito
│  │  ├─ contact.js         # Lógica de captcha en contacto
│  │  └─ login.js           # Validaciones/funciones de login
│  └─ img/                  # Imágenes (logo, banners, etc.)
```

> Nota: Algunos nombres de archivos pueden variar ligeramente; la estructura anterior es una guía general.

## Cómo ejecutar el proyecto

Es un proyecto estático, no requiere backend ni base de datos.

1. Cloná o descargá este repositorio en tu máquina.
2. Abrí la carpeta `ShopiCaC` en tu editor o explorador de archivos.
3. **Opción rápida:** abre `index.html` directamente en el navegador.
4. **Opción recomendada:** levanta un servidor estático (por ejemplo, extensión Live Server en VS Code) apuntando a la carpeta raíz del proyecto para evitar problemas de rutas relativas.

Luego podés navegar normalmente:

- Inicio: `index.html`
- Productos: `pages/products.html`
- Contacto: `pages/contact.html`
- Login: `pages/login.html`

## Navegación y componentes compartidos

- El **header** se genera dinámicamente en las páginas internas (`products.html`, `contact.html`, `login.html`) mediante `header.js`.
- El **footer** se genera dinámicamente en las páginas internas mediante `footer.js` e incluye:
  - Logo y descripción de la tienda.
  - Navegación principal.
  - Datos de contacto y redes sociales.
  - Medios de pago.
- En `index.html` el footer está incluido directamente en el HTML, con el mismo diseño visual.

## Notas adicionales

- Los productos que se muestran provienen de un *fake API* o datos de ejemplo pensados para práctica.
- Los formularios (contacto, login) son demostrativos; no hay autenticación real ni envío de mail en producción.

Este proyecto está pensado como base educativa para practicar maquetado, componentes de Bootstrap y lógica básica en JavaScript para una tienda online.
