const db = require('../config/database');
const { DataTypes } = require('sequelize');

const contacts = db.define("contact", {
    contact_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING, 
    },
    message: {
      type: DataTypes.TEXT,
    }
    }, {
    freezeTableName: true,
  });
  
  //CREATE TABLE
//   db.sync({ alter: true }) // kalo mau menambahkan agar data tidak ke reset semua ganti force jadi alt: true
//   .then(() => {
//       console.log(`contact synced`)
//   })
//   .catch((error) => console.log(`Unable to connect to databse: ${error}`));
  
  module.exports = contacts;