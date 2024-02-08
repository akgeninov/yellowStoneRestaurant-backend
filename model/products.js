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
    description: {
        type: DataTypes.STRING
    },
    composition: {
        type: DataTypes.STRING
    },
    storage: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})

// db.sync({ alter: true }) // kalo mau menambahkan agar data tidak ke reset semua ganti force jadi alt: true
// .then(() => {
//     console.log(`articles synced`)
// })
// .catch((error) => console.log(`Unable to connect to databse: ${error}`));

module.exports = products;