const path = require('path')
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
/*
@app //*es un parámetro de la aplicacion proveniente de express();
*/

module.exports = (app) => {
    app.use(bodyParser.urlencoded({extended:false}));
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(cookieParser('keyboard cat'));
    app.use(session({
        secret: 'key-asd-jkl',
        resave: false,
        saveUninitialized: false
    }));
    app.use(flash());
}