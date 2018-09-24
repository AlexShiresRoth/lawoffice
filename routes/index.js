require('dotenv').config();

var express = require('express');
var router = express.Router();
var flash = require('connect-flash');
var LocalStrategy = require('passport-local');
var passport = require('passport');
var nodemailer = require('nodemailer');


    router.use(flash());
    
    
    router.use(require("express-session")({
        secret: "Sausage",
        resave: false,
        saveUninitialized: false
    }));

    
    router.use(passport.initialize());
    router.use(passport.session());
    
    router.use(function(req, res, next){
        res.locals.currentUser = req.user;
        res.locals.error = req.flash('error');
        res.locals.success = req.flash('success');
        next();
    });





/* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('home');
    });


 //  Page ROUTES================================

    router.get('/probate_law', function(req, res){
        res.render('probate_law');
    });
    
    router.get("/realestate", function(req, res){
        res.render('realestate');
    });
    
     router.get('/will_and_trust', function(req, res){
        res.render('will_and_trust');
    });
    
    router.get("/wills_trusts_estates", function(req, res){
        res.render('wills_trusts_estates');
    });
     router.get('/estate_litigation', function(req, res){
        res.render('estate_litigation');
    });
    
    router.get("/business_law", function(req, res){
        res.render('business_law');
    });
    router.get("/bankruptcy_law", function(req, res){
        res.render('bankruptcy_law');
    });
    
    
    
    // POST ROUTES FOR NODEMAILER:
    router.post('/send', function(req, res){
        const output = `
         <p> You have a new contact request</p>
         <h3>Contact Details</h3>
        <ul>
            <li>First Name: ${ req.body.name } </li>
            <li>Email: ${ req.body.email } </li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message }</p> 
        `;
        
        let transporter = nodemailer.createTransport({
        service: 'Gmail', // true for 465, false for other ports
        auth: {
            user: process.env.ACCOUNT_USER, // generated ethereal user
            pass: process.env.ACCOUNT_PASS // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer contact <alexroth96@gmail.com>"', // sender address
        to: 'alexroth96@gmail.com', // list of receivers
        subject: 'Client Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info, msg) => {
        if (error) {
             console.log(error);
             req.flash('error', 'Uh Oh, something went wrong!');
             res.redirect("/");
        }
        req.flash('success', 'Email has been sent!');
        res.redirect("/#contact");
    });
    });
    

module.exports = router;
