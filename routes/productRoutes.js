const express = require('express');
const productsRouter = require('../controller/products')

const router = express.Router();


router.get('/',(req, res) => {
    res.send('Hello world');
});

router.get('/products', productsRouter.getProducts);
// router.post('/post-product', productsRouter.addProduct);

module.exports = router;