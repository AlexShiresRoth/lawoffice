const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contentRouter = require('./routes/contents');

const app = express();

//mongoose setup

mongoose.set('debug', true);
const url = process.env.DATABASEURL || 'mongodb://localhost/law-api-v1';
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true});
mongoose.connect(url, { useNewUrlParser: true});

mongoose.Promise = Promise;

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
app.use('/api/contents', contentRouter);



module.exports = app;
