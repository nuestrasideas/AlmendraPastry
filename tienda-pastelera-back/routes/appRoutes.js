const express = require('express');
const router = express.Router();
const healtController = require('../controller/healthController');
const productController = require('../controller/productController');

router.get('/ping', healtController.ping);

router.get('/productos', productController.obtenerTodosLosProductos);

module.exports = router;