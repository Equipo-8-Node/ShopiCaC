// Conexion a BD
const mysql = require('promise-mysql');
const dotenv = require('dotenv')
dotenv.config();

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

// Conectar a la base de datos
const getConnection = async () => await connection;

module.exports = {
    getConnection
}