const express = require('express');
const routes = express.Router();
const homePagina = require('./src/controllers/homePage');



// ROTAS DA HOME


routes.get('/', homePagina.index);


module.exports = routes;