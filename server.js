require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes');
const helmet = require('helmet');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// arquivos estaticos nos permite acessar directamente, exp: assets, css, js
app.use(express.static(path.resolve(__dirname, 'public')));


//  EJS CONFIGS
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// Nossos proprios middlewares
app.use(middlewareGlobal);



app.use(routes);


    app.listen(8888, () =>{
        console.log('Acessar http://localhost:8888');
        console.log('Servidor executando na porta 8888');
});
