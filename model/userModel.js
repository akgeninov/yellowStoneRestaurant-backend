const db = require('../config/database.js');
const {DataTypes} = require('sequelize');

const users = db.define("users", {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})

// db.sync({ alter: true }) // kalo mau menambahkan agar data tidak ke reset semua ganti force jadi alt: true
// .then(() => {
//     console.log(`users synced`)
// })
// .catch((error) => console.log(`Unable to connect to databse: ${error}`));

module.exports = users;