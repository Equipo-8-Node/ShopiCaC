const express = require('express');
const path = require('path');

const app = express();

// Configurar el motor de plantillas EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para archivos estáticos en la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Mi Proyecto Express' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Conexion a BD
const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'usuario_db',
    password: 'contraseña_db',
    database: 'nombre_db'
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Exportar la conexión para usarla en otros módulos
module.exports = connection;