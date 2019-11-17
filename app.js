require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const logger = require('morgan');
const flash = require('connect-flash');
const passport = require('passport');

const indexRouter = require('./routes/index');
const emailRouter = require('./routes/email');
const surveyRouter = require('./routes/survey');

const app = express();

app.use(
	require('express-session')({
		secret: 'Sausage',
		resave: false,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressSanitizer());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/views')));
app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/src')));

app.use(flash());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	next();
});

app.use('/', indexRouter);
app.use('/api/send-email', emailRouter);
app.use('/api/send-survey', surveyRouter);

module.exports = app;
