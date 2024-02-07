function getProducts(req, res, next){
    res.json(
        {name: "Biscuit",
        url: "www.example.com"
    })
}

const addProducts = async (req, res) => {
    const { body } = req;
    try {
        const products = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            composition: req.body.category,
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

module.exports = {getProducts};