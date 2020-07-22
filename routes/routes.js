const express = require('express');

const router = express.Router(); 
const homeController = require('../controller/home.controller');
module.exports = ()=>{
    router.get('/', homeController.inicioUsuario);


    return router;
}