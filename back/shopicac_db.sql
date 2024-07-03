drop database if exists shopicac_db;
create database if not exists shopicac_db;
use shopicac_db;

-- Tabla de categorías de productos
CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

INSERT INTO categoria (id, nombre) VALUES
(1, 'Ropa de hombre'),
(2, 'Joyería'),
(3, 'Electrónica'),
(4, 'Ropa de mujer');

-- Tabla de productos
CREATE TABLE producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    descripcion TEXT,
    id_categoria INT,
    imagen TEXT,
    valoracion_tasa DECIMAL,
    valoracion_conteo DECIMAL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id)
);

-- Tabla de clientes
CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    email VARCHAR(100)
);

-- Tabla de pedidos
CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) DEFAULT 'Pendiente',
    FOREIGN KEY (id_cliente) REFERENCES cliente(id)
);

-- Tabla de detalles de pedidos (relación muchos a muchos entre pedidos y productos)
CREATE TABLE detalle_pedido (
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id),
    FOREIGN KEY (id_producto) REFERENCES producto(id)
);

INSERT INTO producto (titulo, precio, descripcion, id_categoria, imagen, valoracion_tasa, valoracion_conteo) VALUES
('Mochila Fjallraven - Foldsack No. 1, Para Portátiles de hasta 15 Pulgadas', 109.95,
 'Tu mochila perfecta para uso diario y paseos por el bosque. Guarda tu portátil (hasta 15 pulgadas) en el compartimento acolchado, tu día a día', 1,
 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 3.9, 120),
('Camisetas Casuales Premium Slim Fit para Hombre', 22.3,
 'Estilo entallado, manga larga raglán de contraste, tapeta de tres botones henley, tela ligera y suave para una mayor transpirabilidad y comodidad. Camisetas sólidas con cuello redondo diseñadas para durabilidad y un buen ajuste para la moda casual y para los fanáticos acérrimos del béisbol. El cuello redondo estilo Henley incluye una tapeta de tres botones.', 1,
 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', 4.1, 259),
('Chaqueta de Algodón para Hombre', 55.99,
 'Excelentes chaquetas exteriores para primavera/otoño/invierno, adecuadas para muchas ocasiones, como trabajar, hacer senderismo, acampar, escalar montañas/rocas, andar en bicicleta, viajar u otras actividades al aire libre. Buena elección de regalo para ti o para algún miembro de tu familia. Un amor cálido para padre, esposo o hijo en este Día de Acción de Gracias o Navidad.', 1,
 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 4.7, 500),
('Camiseta Casual Entallada para Hombre', 15.99,
 'El color podría variar ligeramente entre la pantalla y la realidad. / Ten en cuenta que las constituciones corporales varían de persona a persona, por lo tanto, la información detallada sobre tallas debería revisarse en la descripcion del producto a continuación.', 1,
 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 2.1, 430),
('Pulsera de Cadena de Oro y Plata de Ley Legends Naga para Mujer de John Hardy', 695,
 'De nuestra colección Legends, el Naga fue inspirado por el mítico dragón de agua que protege la perla del océano. Úsalo hacia adentro para ser agraciado con amor y abundancia, o hacia afuera para protección.', 2,
 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 4.6, 400),
('Micro Pavé Sólido de Oro Petite', 168,
 'Satisfacción garantizada. Devolución o cambio de cualquier pedido dentro de los 30 días. Diseñado y vendido por Hafeez Center en Estados Unidos. Satisfacción garantizada. Devolución o cambio de cualquier pedido dentro de los 30 días.', 2,
 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', 3.9, 70),
('Anillo de Compromiso Clásico de Oro Blanco Plateado de Princesa', 9.99,
 'Anillo de compromiso clásico creado para ella. Regalos para consentir aún más a tu amor en compromisos, bodas, aniversarios, Día de San Valentín...', 2,
 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg', 3.0, 400),
('Doble Túnel Tapado de Acero Inoxidable Chapado en Oro Rosa Pierced Owl', 10.99,
 'Pendientes de doble túnel tapado chapados en oro rosa. Hechos de acero inoxidable 316L', 2,
 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', 1.9, 100),
('Disco Duro Externo Portátil WD Elements de 2 TB - USB 3.0', 64,
 'Compatibilidad con USB 3.0 y USB 2.0. Transferencias rápidas de datos. Mejora del rendimiento del PC. Alta capacidad; Compatibilidad formateada en NTFS para Windows 10, Windows 8.1, Windows 7; Puede requerirse reformateo para otros sistemas operativos; La compatibilidad puede variar dependiendo de la configuración de hardware y del sistema operativo del usuario.', 3,
 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 3.3, 203),
('SSD Interno SanDisk PLUS de 1 TB - SATA III 6 Gb/s', 109,
 'Actualización fácil para un arranque más rápido, apagado, carga y respuesta de aplicaciones (en comparación con un disco duro SATA de 2.5” a 5400 RPM; Basado en especificaciones publicadas y pruebas de referencia internas utilizando puntajes de PCMark vantage) Aumenta el rendimiento de escritura en ráfagas, lo que lo hace ideal para cargas de trabajo típicas de PC. El equilibrio perfecto entre rendimiento y fiabilidad. Velocidades de lectura/escritura de hasta 535MB/s/450MB/s (Basado en pruebas internas; El rendimiento puede variar dependiendo de la capacidad del disco, dispositivo host, sistema operativo y aplicación).', 3,
 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', 2.9, 470),
('SSD Silicon Power 256 GB 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 109,
 'Memoria flash 3D NAND aplicada para ofrecer altas velocidades de transferencia. Velocidades de transferencia destacadas que permiten un arranque más rápido y un mejor rendimiento general del sistema. La avanzada tecnología de caché SLC permite un impulso de rendimiento y una vida útil más larga. Diseño delgado de 7mm adecuado para Ultrabooks y portátiles ultradelgados. Compatible con comando TRIM, tecnología de recolección de basura, RAID y ECC (verificación y corrección de errores) para proporcionar un rendimiento optimizado y una mayor fiabilidad.', 3,
 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg', 4.8, 319),
('Disco Duro Externo para Juegos WD de 4 TB Compatible con Playstation 4', 114,
 'Expande tu experiencia de juego en PS4, juega en cualquier lugar. Configuración rápida y fácil. Diseño elegante con alta capacidad, garantía limitada del fabricante de 3 años.', 3,
 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg', 3.9, 150),
('Vestido para Mujer de Casual con Manga Larga O Cuello', 27.95,
 'Complemento perfecto para este elegante vestido para mujeres elegantes y modernas. El material es muy suave y cómodo para vestir. Vestido ideal para uso casual, fiestas, citas y trabajo diario. Tela de alta calidad, transpirable, ligera y de estilo suave. El ajuste es cómodo y bonito. Material de alta calidad, agradable al tacto. Adecuado para cualquier ocasión, como compras, calle, oficina, playa, etc. Vestido perfecto para mujer moderna, elegante y con estilo. Vestido ideal para mujer. Elige tu estilo favorito y ponte cómodo. ¡Estos vestidos te harán lucir más hermosa y moderna!', 4,
 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', 3.9, 372),
('Mujer sin mangas de verano informal de espalda abierta Camiseta sin mangas sin mangas en blanco y negro', 12.99,
 '¡Bienvenido a MEEYA Store, MEEYA es un vendedor profesional de Amazon de China! Usted puede pedir aquí los mejores vestidos de la última moda de China. Esta es la nueva colección de ropa de verano de MEEYA. MEEYA también está vendiendo zapatos, camisas, pantalones, camisetas, suéteres, chaquetas, vestidos, bikinis, prendas de lencería, prendas de abrigo, ropa deportiva, etc. Todas las prendas de MEEYA son extremadamente duraderas y no se deforman ni se arrugan fácilmente. ¡Únase a nosotros ahora y disfrute de una experiencia de compra sin problemas! Ofrecemos a nuestros clientes productos de alta calidad y servicios de primera clase. Le prometemos que no lo defraudaremos. Tenemos la intención de ofrecerle a usted y a su familia un servicio de calidad superior. Nos disculpamos sinceramente por cualquier inconveniente que esto pueda causar. Tenga en cuenta que debido a las limitaciones en la fotografía y las inevitables diferencias en la configuración del monitor, los colores que se muestran en la fotografía pueden no corresponder 100% a los elementos. Puede haber desviaciones de 1 a 2 cm debido a la medición manual. Nota: debido a la diferente configuración del monitor y la luz, el color puede ser ligeramente diferente de las imágenes. Gracias por su comprensión! Deseo que tengas un buen día. Te deseo una feliz compra.', 4,
 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UX679_.jpg', 3.9, 580),
 ('Chaqueta de Snowboard 3-en-1 para Mujer BIYLACLESEN Abrigos de Invierno', 56.99,
 'Nota: Las chaquetas son de tamaño estándar de EE. UU., Por favor, elige la talla que normalmente uses. Material: 100% poliéster; Forro de forro polar cálido. Forro funcional desmontable: piel amigable, ligera y cálida. Chaqueta con cuello alto desmontable, te mantiene caliente en climas fríos. Bolsillos con cremallera: 2 bolsillos con cremallera en las manos, 2 bolsillos con cremallera en el pecho (suficientes para guardar tarjetas o llaves) y 1 bolsillo oculto en el interior. Los bolsillos con cremallera en las manos y el bolsillo oculto mantienen tus cosas seguras. Diseño humanizado: Capucha ajustable y desmontable y puño ajustable para evitar el viento y el agua, para un ajuste cómodo. Diseño desmontable 3 en 1 proporciona más comodidad, puedes separar el abrigo y el interior según sea necesario, o llevarlo juntos. Es adecuado para diferentes estaciones y te ayuda a adaptarte a diferentes climas', 4,
 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', 2.6, 235),
('Chaqueta Motociclista de Cuero Sintético con Capucha Desmontable para Mujer Lock and Love', 29.95,
 '100% POLIURETANO (capa exterior) 100% POLIÉSTER (forro) 75% POLIÉSTER 25% ALGODÓN (SUÉTER), Material de cuero sintético para estilo y comodidad / 2 bolsillos en la parte delantera, chaqueta de cuero sintético estilo denim con capucha desmontable 2-en-1, Detalle de botones en la cintura / Costuras detalladas en los costados, LAVADO A MANO ÚNICAMENTE / NO BLANQUEAR / SECAR AL AIRE / NO PLANCHAR', 4,
 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg', 2.9, 340),
('Impermeable para Mujer Cortaviento Rayado para Escalar Rain Jacket', 39.99,
 'Ligero, perfecto para viajes o uso casual --- Manga larga con capucha, diseño ajustable de cintura con cordón. Chaqueta impermeable con cierre de botones y cremallera, completamente forrada de rayas y La chaqueta impermeable tiene 2 bolsillos laterales de buen tamaño para guardar todo tipo de cosas, cubre las caderas y la capucha es generosa pero no exagerada. Capucha adjunta con forro de algodón y cordones ajustables le dan un aspecto real.', 4,
 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg', 3.8, 679),
('Camiseta de Cuello Barco Sólido de Manga Corta para Mujer MBJ', 9.85,
 '95% RAYÓN 5% SPANDEX, Hecho en EE. UU. o importado, No usar lejía, Tejido ligero con gran elasticidad para mayor comodidad, Acanalado en mangas y cuello / Dobladillo inferior con doble costura', 4,
 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', 4.7, 130),
('Camiseta de Manga Corta para Mujer Opna con Humedad', 7.95,
 '100% Poliéster, Lavable a máquina, 100% poliéster catiónico interlock, Lavado a máquina y preencogido para un ajuste perfecto, Tejido ligero, espacioso y altamente transpirable con tejido que absorbe la humedad que ayuda a mantener la humedad alejada, Tejido suave y ligero con cuello en V cómodo y un ajuste más delgado, ofrece una silueta elegante y más femenina y Comodidad adicional', 4,
 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', 4.5, 146),
('Camiseta de Algodón Casual de Manga Corta para Mujer DANVOUY', 12.99,
 '95% Algodón, 5% Spandex, Características: Casual, Manga Corta, Estampado de Letras, Cuello en V, Camisetas de Moda, La tela es suave y tiene algo de elasticidad., Ocasión: Casual/Oficina/Playa/Escuela/Hogar/Calle. Temporada: Primavera, Verano, Otoño, Invierno.', 4,
 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 3.6, 145);
