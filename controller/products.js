const products = require('../model/products');
const { Op } = require("sequelize");

// function backFillProduct(req, res, next){
//     products.bulkCreate([{
//         name: "Bicuit",
//         description: "This is biscuit",
//         composition: "This biscuit made from corn",
//         storage: "Keep this biscuit in normal temperature",
//         price: 9.00
//     },
//     {
//         name: "Wafer",
//         description: "This is wafer",
//         composition: "This wafer made from starch",
//         storage: "Keep this wafer in normal temperature",
//         price: 8.00
//     },
//     {
//         name: "Crackers",
//         description: "This is crackers",
//         composition: "This crackers made from peanut",
//         storage: "Keep this crackers in normal temperature",
//         price: 10.00
//     }])
//     .then(() => res.json({message: "Succesfully backfilled in"}))
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({
//             error: err
//         })
//     });
// }

// GET ALL PRODUCTS/GET ARTICLE BY CATEGORY
// const getProducts = async (req, res) => {
//   try {
//       let productsData;
//       // Mengambil data artikel
//         articlesData = await articles.findAll()

//       res.json({
//           message: 'Get Article Success',
//           data: articlesData // Mengirim data artikel sebagai respons
//       });

//   } catch (error) {
//       res.status(500).json({
//           message: "Server Error",
//           serverMessage : error
//         })
//       }
//     }
function getProducts(req, res, next){
    products.findAll()
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get products: ${err.message}`
        })
    })
}

const addProduct = async (req, res) => {
    const { body } = req;
    try {
        const product = {
            name: req.body.name,
            description: req.body.description,
            composition: req.body.composition,
            storage: req.body.storage,
            price: req.body.price,
            url_image: req.body.url_image, 
            rate: req.body.rate
        }
  
        await products.create(product);
  
        res.status(201).send({ 
            msg: "Add Product Success",
            data: body 
        });
  
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage : error
          })
        }
}

function getProductsByCheapest(req, res, next) {
    products.findAll({
        order: [['price', 'ASC']]
    })
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get products: ${err.message}`
        });
    });
}

function getProductsByPriciest(req, res, next) {
    products.findAll({
        order: [['price', 'DESC']]
    })
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get products: ${err.message}`
        });
    });
}

function getProductsByNameAsc(req, res, next) {
    products.findAll({
        order: [['name', 'ASC']]
    })
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get products: ${err.message}`
        });
    });
}

function getProductsByNameDesc(req, res, next) {
    products.findAll({
        order: [['name', 'DESC']]
    })
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get products: ${err.message}`
        });
    });
}


module.exports = {
    getProducts, 
    addProduct, 
    getProductsByCheapest,
    getProductsByPriciest,
    getProductsByNameAsc,
    getProductsByNameDesc
};