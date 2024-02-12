const express = require('express');
const productsRouter = require('../controller/products')

const router = express.Router();


router.get('/',(req, res) => {
    res.send('Hello world');
});

router.get('/products', productsRouter.getProducts);
// router.post('/backfill-products', productsRouter.backFillProduct);
router.post('/add-product', productsRouter.addProduct);
router.get('/products-priciest', productsRouter.getProductsByPriciest);

module.exports = router;