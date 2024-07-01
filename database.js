// Conexion a BD
const mysql = require('mysql');

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin1234',
    database: 'shopicac_db'
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