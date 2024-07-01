const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});