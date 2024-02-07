const express = require('express');

const router = express.Router();

const productsController = require('../controller/products')

router.get('/',(req, res) => {
    res.send('Hello world');
});

router.get('/products', productsController.getProducts);

module.exports = router;