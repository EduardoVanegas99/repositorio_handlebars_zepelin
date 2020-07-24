const express = require('express');

const router = express.Router(); 
const homeController = require('../controller/home.controller');

//Administrador

const ClubesController = require('../controller/registrar-clubes.controller');

module.exports = ()=>{
    router.get('/', homeController.inicioUsuario);


    //Administrador
    router.get('/registrar-clubes', ClubesController.registrarClubes);

    return router;
}