const express = require("express");
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3000

const productRouter = require('./routes/productRoutes')
const contactRouter = require('./routes/contactsRoutes')

const app = express();


app.use(cors())
app.use(express.json())

app.use(productRouter);
app.use(contactRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

