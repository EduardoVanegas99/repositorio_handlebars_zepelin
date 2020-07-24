exports.inicioUsuario = (req, res)=>{
    res.render('index', {
        nombrePagina: 'Inicio',
        carrusel: true, 
        navegacion: true 
    });
    
}