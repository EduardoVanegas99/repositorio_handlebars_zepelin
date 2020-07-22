const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const rutas = require('./routes/routes');

const port = process.env.PORT || 4000;

app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', 
exphbs({
    defaultLayout: 'layout',
    layoutsDir: path.join(app.set('views'), 'layouts'), 
    partialsDir: path.join(app.get('views'), 'partials'), 
    extname: '.hbs'
}));

app.set('view engine', 'hbs');



//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.use(express.static('files'));
app.use('/public', express.static('public'));


app.use('/', rutas());

app.listen(port);