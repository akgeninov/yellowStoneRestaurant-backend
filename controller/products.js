const products = require('../model/products');
const { Op } = require("sequelize");

// POST PRODUCT 
const addProduct = async (req, res) => {
  const { body } = req;
  try {
      const product = {
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          composition: req.body.composition,
          storage: req.body.storage
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
    res.json(
        {name: "Biscuit",
        price: 9.00,
        description: "this is biscuit",
        composition: "this biscuit made form corn",
        storage: "keep this bisvuit in place with normal temperature"
    })
}

module.exports = {getProducts};