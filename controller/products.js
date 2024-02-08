function getProducts(req, res, next){
    res.json(
        {name: "Biscuit",
        price: 9.00,
        description: "this is biscuit",
        composition: "this biscuit made form corn",
        storage: "keep this bisvuit in place with normal temperature"
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