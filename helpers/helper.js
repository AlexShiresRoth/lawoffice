
 
exports.getServicesInfo = (req,res,next) => {
    res.render('home', {
        services: [
              { title: 'wills_trusts_estates', content: [
              `Trust the planning of your estate with our reputable law firm. 
               Our extensive experience with estate law in Bohemia, NY, has established 
               us as the area’s preferred provider of estate planning. Rothenberg Law Office, 
               PLLC offers personalized service that meets the individual needs and goals of each client. 
               We help you develop the legally binding plan that best protects your assets and
               your family’s future.`,
               
               `While estate law is often complicated, we make the process straightforward so you
               can be certain that you’ve made the appropriate arrangements. Schedule a consultation
               at our law office to discuss:`,
               
               `As your estate planning attorneys, we appreciate that your primary concern is to provide
               for your family’s future. Our services give you the peace of mind that comes from knowing 
               your careful estate planning will help to support your family. Prearranging the course of 
               your financial affairs eases the burden you and your family feel as you face other crucial 
               end-of-life decisions.`,
               
               ` Wherever you are in the course of your life or career, 
               it’s never too early to start planning for the future. An estate plan ensures 
               the fair and equitable division of your assets according to your specific wishes. 
               Make sure you are in control of your assets by consulting with our law firm.`
                ]},
               { title: 'bankruptcy_law', content: [] },
               { title: 'business_law', content: [] },
               { title: 'estate_litigation', content: [] },
               { title: 'probate_law', content: [] },
               { title: 'realestate', content: [] } ,
               { title: 'will_and_trust', content: [] }
            ]
    });
};

exports.sendEmail = (req, res, next) => {
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
};
module.exports = exports;