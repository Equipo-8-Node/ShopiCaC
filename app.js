const express = require('express');
const morgan = require("morgan");
const app = express();
const database = require('./database');

// Configurar el motor de plantillas EJS
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Escuchando comunicaciones al puerto " + app.get("port"));

//middlewares
app.use(morgan("dev"))


//Rutas
app.get('../productos', (req, res) => {
    const connection = await database.getConnection();
    const result = await connection.query("SELECT * FROM producto");
    console.log(result);
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

