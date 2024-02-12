const express = require('express');
const productsRouter = require('../controller/products')

const router = express.Router();


router.get('/',(req, res) => {
    res.send('Hello world');
});

router.get('/products', productsRouter.getProducts);
// router.post('/backfill-products', productsRouter.backFillProduct);
router.post('/add-product', productsRouter.addProduct);
router.get('/products-cheapest', productsRouter.getProductsByCheapest);
router.get('/products-priciest', productsRouter.getProductsByPriciest);
router.get('/products-name-asc', productsRouter.getProductsByNameAsc);
router.get('/products-name-desc', productsRouter.getProductsByNameDesc);
router.get('/products-recomended', productsRouter.getProductsByRecomended);

module.exports = router;