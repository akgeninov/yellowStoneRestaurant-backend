const http = require('http')
const PORT = process.env.PORT || 3000
const express = require('express');

const app = express();
const mainRouter = require('./routes/index')
const dbConnection = require('./config/database')

app.use('/', mainRouter);

dbConnection.sync({alter: true})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})
.catch(err => {
    console.error(err);
})