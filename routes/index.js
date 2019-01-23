//require('dotenv').config();
const express = require('express');
const router = express.Router();
const flash = require('connect-flash');
const passport = require('passport');
const helper = require('../helpers/helper');

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
router.get('/', helper.getServicesInfo);

/* Get Api Posts */
router.get('/posts', helper.getApiPosts);

// POST ROUTES FOR NODEMAILER:
router.post('/send', helper.sendEmail);
    

module.exports = router;
