const db = require('../config/database.js');
const {DataTypes} = require('sequelize');

const products = db.define("products", {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    composition: {
        type: DataTypes.STRING
    },
    storage: {
        type: DataTypes.STRING
    },
    url_image: {
        type: DataTypes.STRING
    },
    rate: {
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true,
    timestamps: false
})

db.sync({ alter: true }) // kalo mau menambahkan agar data tidak ke reset semua ganti force jadi alt: true
.then(() => {
    console.log(`products synced`)
})
.catch((error) => console.log(`Unable to connect to databse: ${error}`));

module.exports = products;