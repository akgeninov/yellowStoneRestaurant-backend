const users = require('../model/userModel');
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const argon2 = require('argon2');

//signup
const register = async (req, res) => {
    const {username, email, password} = req.body;

    const hashPassword = await argon2.hash(password);

    try{
        await users.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.status(201).json({
            msg: "Register success"
        })
    } catch (error){
        res.status(400).json({
            msg: error.message
        })
    }
}

function getUsers(req, res, next){
    users.findAll()
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        res.status(500).json({
            error: `Error get users: ${err.message}`
        })
    })
}

module.exports = {
    register,
    getUsers
}

