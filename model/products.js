const dbConnection = require('../config/database.js');
const sequelize = require('sequlize');

const products = dbConnection.define('products', {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: sequelize.DataTypes.INTEGER.STRING},
    description: {type: sequelize.DataTypes.STRING},
    composition: {type: sequelize.DataTypes.STRING},
    storage: {type: sequelize.DataTypes.STRING}
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = products;