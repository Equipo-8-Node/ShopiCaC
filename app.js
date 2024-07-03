const express = require("express");
const morgan = require("morgan");
const database = require("./back/src/database");
const cors = require("cors")
const path = require('path');

//Configuración inicial
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto " + app.get("port"));

//Middlewares
app.use(cors({
    origin: ["http://127.0.0.1:5501", "http://127.0.0.1:5500"]
}))
app.use(morgan("dev"))
app.use(express.json())

//Rutas
app.get("/productsAll", async (req, res) => {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT p.id, p.titulo, p.precio, p.descripcion, p.imagen, p.valoracion_tasa, p.valoracion_conteo, c.nombre AS nombre_categoria FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id");
    res.json(result)
})

app.get('/productsInicio', async (req, res) => {
    const productIds = [1, 2, 3, 4];

    try {
        const connection = await database.getConnection(); // Get database connection
        const query = 'SELECT p.id, p.titulo, p.precio, p.imagen, c.nombre AS nombre_categoria FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id WHERE p.id IN (?);'; // SQL query to select products by IDs
        const result = await connection.query(query, [productIds]); // Execute query with productIds

        res.json(result); // Send JSON response with the fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Error fetching products' }); // Handle errors gracefully
    }
});

app.post("/carrito/comprar", async (req, res) => {
    if (req.body && req.body.length > 0) {
        return res.sendStatus(200);
    }
    res.sendStatus(400)
})


// Configurar Express para servir archivos estáticos desde la carpeta 'front'
app.use(express.static(path.join(__dirname, 'front')));

// Ruta para servir 'index.html' cuando se accede a '/'
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// Ruta para servir 'products.html' cuando se accede a '/products'
app.get('/products', (req, res) => {
    res.sendFile('products.html');
});

// Ruta para servir 'contact.html' cuando se accede a '/contact'
app.get('/contact', (req, res) => {
    res.sendFile('contact.html');
});

// Ruta para servir 'login.html' cuando se accede a '/login'
app.get('/login', (req, res) => {
    res.sendFile('login.html');
});