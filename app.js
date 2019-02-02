const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();


app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));

app.use('/', indexRouter);
app.use('/users', usersRouter);




module.exports = app;
