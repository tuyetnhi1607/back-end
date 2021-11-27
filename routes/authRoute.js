const express = require('express');
const {register, login, logout} = require('../controllers/authController')

const Router = express.Router();

Router.route('/register').post(register);
Router.route('/login').post(login);
Router.route('/logout').post(logout);

module.exports = Router;