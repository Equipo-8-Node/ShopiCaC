const express = require('express');
const router = express.Router();
const productosService = require('./');

router.get('/', productosController.getAllProductos);
router.get('/:id', productosController.getProductoById);
router.get('/', productosController.createProducto);
router.get('/:id', productosController.updateProducto);
router.get('/:id', productosController.deleteProducto);

module.exports = router;