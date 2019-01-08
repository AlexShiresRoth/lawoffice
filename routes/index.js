require('dotenv').config();
const express = require('express');
const router = express.Router();
const flash = require('connect-flash');
const passport = require('passport');
const nodemailer = require('nodemailer');

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
        res.render('probate_law', {
            navDisplay: 'services',
            page_title: 'probate_law',
            headingDisplay: 'Probate Law'
        });
    });
    
    router.get("/realestate", function(req, res){
        res.render('realestate' , {
            navDisplay: 'services',
            page_title: 'realestate',
            headingDisplay: 'Real Estate'
        });
    });
    
     router.get('/will_and_trust', function(req, res){
        res.render('will_and_trust', {
            navDisplay: 'services',
            page_title:'will_and_trust',
            headingDisplay: 'Wills and Trusts Law'
        });
    });
    
    router.get("/wills_trusts_estates", function(req, res){
        res.render('wills_trusts_estates' , {
            navDisplay: 'services',
            page_title:'wills_trusts_estates',
            headingDisplay: 'Wills Trusts and Estates'
        });
    });
     router.get('/estate_litigation', function(req, res){
        res.render('estate_litigation', {
            navDisplay: 'services',
            page_title:'estate_litigation',
            headingDisplay: 'Estate Litigation'
        });
    });
    
    router.get("/business_law", function(req, res){
        res.render('business_law' , {
            navDisplay: 'services',
            page_title:'business_law',
            headingDisplay: 'Business Law'
        });
    });
    router.get("/bankruptcy_law", function(req, res){
        res.render('bankruptcy_law',{
            navDisplay: 'services',
            page_title:'bankruptcy_law',
            headingDisplay: 'Banruptcy Law'
        });
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
