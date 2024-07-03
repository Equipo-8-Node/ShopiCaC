
/*
const datos = {
  productos: [
    {
      id: 1,
      titulo:
        "Mochila Fjallraven - Foldsack No. 1, Para Portátiles de hasta 15 Pulgadas",
      precio: 109.95,
      descripcion:
        "Tu mochila perfecta para uso diario y paseos por el bosque. Guarda tu portátil (hasta 15 pulgadas) en el compartimento acolchado, tu día a día",
      categoria: "Ropa de hombre",
      imagen: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      valoracion: { tasa: 3.9, conteo: 120 },
    },
    {
      id: 2,
      titulo: "Camisetas Casuales Premium Slim Fit para Hombre",
      precio: 22.3,
      descripcion:
        "Estilo entallado, manga larga raglán de contraste, tapeta de tres botones henley, tela ligera y suave para una mayor transpirabilidad y comodidad. Camisetas sólidas con cuello redondo diseñadas para durabilidad y un buen ajuste para la moda casual y para los fanáticos acérrimos del béisbol. El cuello redondo estilo Henley incluye una tapeta de tres botones.",
      categoria: "Ropa de hombre",
      imagen:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      valoracion: { tasa: 4.1, conteo: 259 },
    },
    {
      id: 3,
      titulo: "Chaqueta de Algodón para Hombre",
      precio: 55.99,
      descripcion:
        "Excelentes chaquetas exteriores para primavera/otoño/invierno, adecuadas para muchas ocasiones, como trabajar, hacer senderismo, acampar, escalar montañas/rocas, andar en bicicleta, viajar u otras actividades al aire libre. Buena elección de regalo para ti o para algún miembro de tu familia. Un amor cálido para padre, esposo o hijo en este Día de Acción de Gracias o Navidad.",
      categoria: "Ropa de hombre",
      imagen: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      valoracion: { tasa: 4.7, conteo: 500 },
    },
    {
      id: 4,
      titulo: "Camiseta Casual Entallada para Hombre",
      precio: 15.99,
      descripcion:
        "El color podría variar ligeramente entre la pantalla y la realidad. / Ten en cuenta que las constituciones corporales varían de persona a persona, por lo tanto, la información detallada sobre tallas debería revisarse en la descripcion del producto a continuación.",
      categoria: "Ropa de hombre",
      imagen: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      valoracion: { tasa: 2.1, conteo: 430 },
    },
    {
      id: 5,
      titulo:
        "Pulsera de Cadena de Oro y Plata de Ley Legends Naga para Mujer de John Hardy",
      precio: 695,
      descripcion:
        "De nuestra colección Legends, el Naga fue inspirado por el mítico dragón de agua que protege la perla del océano. Úsalo hacia adentro para ser agraciado con amor y abundancia, o hacia afuera para protección.",
      categoria: "Joyería",
      imagen:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      valoracion: { tasa: 4.6, conteo: 400 },
    },
    {
      id: 6,
      titulo: "Micro Pavé Sólido de Oro Petite",
      precio: 168,
      descripcion:
        "Satisfacción garantizada. Devolución o cambio de cualquier pedido dentro de los 30 días. Diseñado y vendido por Hafeez Center en Estados Unidos. Satisfacción garantizada. Devolución o cambio de cualquier pedido dentro de los 30 días.",
      categoria: "Joyería",
      imagen:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      valoracion: { tasa: 3.9, conteo: 70 },
    },
    {
      id: 7,
      titulo: "Anillo de Compromiso Clásico de Oro Blanco Plateado de Princesa",
      precio: 9.99,
      descripcion:
        "Anillo de compromiso clásico creado para ella. Regalos para consentir aún más a tu amor en compromisos, bodas, aniversarios, Día de San Valentín...",
      categoria: "Joyería",
      imagen:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      valoracion: { tasa: 3, conteo: 400 },
    },
    {
      id: 8,
      titulo:
        "Doble Túnel Tapado de Acero Inoxidable Chapado en Oro Rosa Pierced Owl",
      precio: 10.99,
      descripcion:
        "Pendientes de doble túnel tapado chapados en oro rosa. Hechos de acero inoxidable 316L",
      categoria: "Joyería",
      imagen:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      valoracion: { tasa: 1.9, conteo: 100 },
    },
    {
      id: 9,
      titulo: "Disco Duro Externo Portátil WD Elements de 2 TB - USB 3.0",
      precio: 64,
      descripcion:
        "Compatibilidad con USB 3.0 y USB 2.0. Transferencias rápidas de datos. Mejora del rendimiento del PC. Alta capacidad; Compatibilidad formateada en NTFS para Windows 10, Windows 8.1, Windows 7; Puede requerirse reformateo para otros sistemas operativos; La compatibilidad puede variar dependiendo de la configuración de hardware y del sistema operativo del usuario.",
      categoria: "Electrónica",
      imagen: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      valoracion: { tasa: 3.3, conteo: 203 },
    },
    {
      id: 10,
      titulo: "SSD Interno SanDisk PLUS de 1 TB - SATA III 6 Gb/s",
      precio: 109,
      descripcion:
        "Actualización fácil para un arranque más rápido, apagado, carga y respuesta de aplicaciones (en comparación con un disco duro SATA de 2.5” a 5400 RPM; Basado en especificaciones publicadas y pruebas de referencia internas utilizando puntajes de PCMark vantage) Aumenta el rendimiento de escritura en ráfagas, lo que lo hace ideal para cargas de trabajo típicas de PC. El equilibrio perfecto entre rendimiento y fiabilidad. Velocidades de lectura/escritura de hasta 535MB/s/450MB/s (Basado en pruebas internas; El rendimiento puede variar dependiendo de la capacidad del disco, dispositivo host, sistema operativo y aplicación).",
      categoria: "Electrónica",
      imagen: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      valoracion: { tasa: 2.9, conteo: 470 },
    },
    {
      id: 11,
      titulo:
        "SSD Silicon Power 256 GB 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      precio: 109,
      descripcion:
        "Memoria flash 3D NAND aplicada para ofrecer altas velocidades de transferencia. Velocidades de transferencia destacadas que permiten un arranque más rápido y un mejor rendimiento general del sistema. La avanzada tecnología de caché SLC permite un impulso de rendimiento y una vida útil más larga. Diseño delgado de 7mm adecuado para Ultrabooks y portátiles ultradelgados. Compatible con comando TRIM, tecnología de recolección de basura, RAID y ECC (verificación y corrección de errores) para proporcionar un rendimiento optimizado y una mayor fiabilidad.",
      categoria: "Electrónica",
      imagen: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      valoracion: { tasa: 4.8, conteo: 319 },
    },
    {
      id: 12,
      titulo:
        "Disco Duro Externo para Juegos WD de 4 TB Compatible con Playstation 4",
      precio: 114,
      descripcion:
        "Expande tu experiencia de juego en PS4, juega en cualquier lugar. Configuración rápida y fácil. Diseño elegante con alta capacidad, garantía limitada del fabricante de 3 años.",
      categoria: "Electrónica",
      imagen: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      valoracion: { tasa: 4.8, conteo: 400 },
    },
    {
      id: 13,
      titulo:
        "Monitor de Juegos Curvo Acer SB220Q bi de 21.5 pulgadas Full HD (1920 x 1080) IPS Ultra-Delgado",
      precio: 599,
      descripcion:
        "Pantalla IPS Full HD de 21.5 pulgadas (1920 x 1080) y tecnología Radeon Free Sync. No compatible con montaje VESA. Tasa de actualización: 75Hz - Utilizando el puerto HDMI. Diseño sin marco, ultra-delgado, tiempo de respuesta de 4ms, panel IPS. Relación de aspecto - 16:9. Color soportado - 16.7 millones de colores. Brillo - 250 nits. Ángulo de inclinación -5 grados a 15 grados. Ángulo de visión horizontal - 178 grados. Ángulo de visión vertical - 178 grados. 75 hercios",
      categoria: "Electrónica",
      imagen: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      valoracion: { tasa: 2.9, conteo: 250 },
    },
    {
      id: 14,
      titulo:
        "Monitor de Juegos Curvo Samsung CHG90 de 49 pulgadas 144Hz - Pantalla Super Ultra-Ancha QLED",
      precio: 999.99,
      descripcion:
        "MONITOR DE JUEGOS SUPER ULTRA-ANCHO DE 49 PULGADAS 32:9 CURVO con dos pantallas de 27 pulgadas una al lado de la otra. TECNOLOGÍA DE PUNTOS CUÁNTICOS (QLED), soporte HDR y calibración de fábrica que proporciona colores y contrastes sorprendentemente realistas y precisos. TASA DE ACTUALIZACIÓN ALTA DE 144HZ y tiempo de respuesta ultra rápido de 1ms trabajan para eliminar el desenfoque de movimiento, las imágenes fantasma y reducir la latencia de entrada",
      categoria: "Electrónica",
      imagen: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      valoracion: { tasa: 2.2, conteo: 140 },
    },
    {
      id: 15,
      titulo:
        "Chaqueta de Snowboard 3-en-1 para Mujer BIYLACLESEN Abrigos de Invierno",
      precio: 56.99,
      descripcion:
        "Nota: Las chaquetas son de tamaño estándar de EE. UU., Por favor, elige la talla que normalmente uses. Material: 100% poliéster; Forro de forro polar cálido. Forro funcional desmontable: piel amigable, ligera y cálida. Chaqueta con cuello alto desmontable, te mantiene caliente en climas fríos. Bolsillos con cremallera: 2 bolsillos con cremallera en las manos, 2 bolsillos con cremallera en el pecho (suficientes para guardar tarjetas o llaves) y 1 bolsillo oculto en el interior. Los bolsillos con cremallera en las manos y el bolsillo oculto mantienen tus cosas seguras. Diseño humanizado: Capucha ajustable y desmontable y puño ajustable para evitar el viento y el agua, para un ajuste cómodo. Diseño desmontable 3 en 1 proporciona más comodidad, puedes separar el abrigo y el interior según sea necesario, o llevarlo juntos. Es adecuado para diferentes estaciones y te ayuda a adaptarte a diferentes climas",
      categoria: "Ropa de mujer",
      imagen: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      valoracion: { tasa: 2.6, conteo: 235 },
    },
    {
      id: 16,
      titulo:
        "Chaqueta Motociclista de Cuero Sintético con Capucha Desmontable para Mujer Lock and Love",
      precio: 29.95,
      descripcion:
        "100% POLIURETANO (capa exterior) 100% POLIÉSTER (forro) 75% POLIÉSTER 25% ALGODÓN (SUÉTER), Material de cuero sintético para estilo y comodidad / 2 bolsillos en la parte delantera, chaqueta de cuero sintético estilo denim con capucha desmontable 2-en-1, Detalle de botones en la cintura / Costuras detalladas en los costados, LAVADO A MANO ÚNICAMENTE / NO BLANQUEAR / SECAR AL AIRE / NO PLANCHAR",
      categoria: "Ropa de mujer",
      imagen: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      valoracion: { tasa: 2.9, conteo: 340 },
    },
    {
      id: 17,
      titulo:
        "Impermeable para Mujer Cortaviento Rayado para Escalar Rain Jacket",
      precio: 39.99,
      descripcion:
        "Ligero, perfecto para viajes o uso casual --- Manga larga con capucha, diseño ajustable de cintura con cordón. Chaqueta impermeable con cierre de botones y cremallera, completamente forrada de rayas y La chaqueta impermeable tiene 2 bolsillos laterales de buen tamaño para guardar todo tipo de cosas, cubre las caderas y la capucha es generosa pero no exagerada. Capucha adjunta con forro de algodón y cordones ajustables le dan un aspecto real.",
      categoria: "Ropa de mujer",
      imagen: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      valoracion: { tasa: 3.8, conteo: 679 },
    },
    {
      id: 18,
      titulo: "Camiseta de Cuello Barco Sólido de Manga Corta para Mujer MBJ",
      precio: 9.85,
      descripcion:
        "95% RAYÓN 5% SPANDEX, Hecho en EE. UU. o importado, No usar lejía, Tejido ligero con gran elasticidad para mayor comodidad, Acanalado en mangas y cuello / Dobladillo inferior con doble costura",
      categoria: "Ropa de mujer",
      imagen: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      valoracion: { tasa: 4.7, conteo: 130 },
    },
    {
      id: 19,
      titulo: "Camiseta de Manga Corta para Mujer Opna con Humedad",
      precio: 7.95,
      descripcion:
        "100% Poliéster, Lavable a máquina, 100% poliéster catiónico interlock, Lavado a máquina y preencogido para un ajuste perfecto, Tejido ligero, espacioso y altamente transpirable con tejido que absorbe la humedad que ayuda a mantener la humedad alejada, Tejido suave y ligero con cuello en V cómodo y un ajuste más delgado, ofrece una silueta elegante y más femenina y Comodidad adicional",
      categoria: "Ropa de mujer",
      imagen: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      valoracion: { tasa: 4.5, conteo: 146 },
    },
    {
      id: 20,
      titulo: "Camiseta de Algodón Casual de Manga Corta para Mujer DANVOUY",
      precio: 12.99,
      descripcion:
        "95% Algodón, 5% Spandex, Características: Casual, Manga Corta, Estampado de Letras, Cuello en V, Camisetas de Moda, La tela es suave y tiene algo de elasticidad., Ocasión: Casual/Oficina/Playa/Escuela/Hogar/Calle. Temporada: Primavera, Verano, Otoño, Invierno.",
      categoria: "Ropa de mujer",
      imagen: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      valoracion: { tasa: 3.6, conteo: 145 },
    },
  ],
};


export default datos;
*/
