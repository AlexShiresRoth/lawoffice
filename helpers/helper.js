const nodemailer = require('nodemailer');
 
exports.getServicesInfo = (req,res,next) => {
    res.render('home', {
        services: [
              { title: 'Wills, Trusts & Estates Law', content: [
              `Trust the planning of your estate with our reputable law firm. 
               Our extensive experience with estate law in Bohemia, NY, has established 
               us as the area’s preferred provider of estate planning. Rothenberg Law Office, 
               PLLC offers personalized service that meets the individual needs and goals of each client. 
               We help you develop the legally binding plan that best protects your assets and
               your family’s future.`,
               
               `While estate law is often complicated, we make the process straightforward so you
               can be certain that you’ve made the appropriate arrangements. Schedule a consultation
               at our law office to discuss`,
               
               `As your estate planning attorneys, we appreciate that your primary concern is to provide
               for your family’s future. Our services give you the peace of mind that comes from knowing 
               your careful estate planning will help to support your family. Prearranging the course of 
               your financial affairs eases the burden you and your family feel as you face other crucial 
               end-of-life decisions.`,
               
               `Wherever you are in the course of your life or career, 
               it’s never too early to start planning for the future. An estate plan ensures 
               the fair and equitable division of your assets according to your specific wishes. 
               Make sure you are in control of your assets by consulting with our law firm.`
                ]},
               { titles: ['Bankruptcy Law', 'Personal Bankruptcy Attorneys Who Care'],
                 content:[
               `At Rothenberg Law Office, PLLC, our philosophy is that bankruptcy lawyers in Bohemia, 
               NY, should engage clients on a personalized, individual basis, rather than simply treating 
               people like case files. This practice will help you to complete this stressful, intimidating 
               process and to create your best future on the other side.`,
               
               `No matter what your circumstances may be, there is always a way to lay groundwork for a better and more stable future. We are 
               happy to help you do just that by providing knowledgeable legal counsel. Call us today to 
               speak about the following types of bankruptcy:`,
               
               `<ul class="probate-details list">
                    <li><ion-icon name="add"></ion-icon>Chapter 7</li>
                    <li><ion-icon name="add"></ion-icon>Chapter 11</li>
                    <li><ion-icon name="add"></ion-icon>Chapter 13</li>
                </ul>`,
               
               `When you need personal bankruptcy attorneys that are competent, attentive, and ready to 
               fight for your best interest, you can rely on anyone in our firm to do the job right. 
               Your future is important to us, and we know that the events and legal decisions 
               surrounding your bankruptcy can affect you and your family for many years to come. 
               That’s why you can contact us any time to discuss the details of how our dedicated 
               firm is ready to support you in this difficult time.`,
               ] },
               { title: 'Business Law', content: [] },
               { title: 'estate_litigation', content: [] },
               { title: 'probate_law', content: [] },
               { title: 'realestate', content: [] } ,
               { title: 'will_and_trust', content: [] }
            ]
    });
};

exports.sendEmail = (req, res, next) => {
        // send the response -- res.body.sanitized
        
        
        const output = `
             <p> You have a new contact request</p>
             <h3>Contact Details</h3>
                <ul>
                    <li>Name: ${ req.body.name } </li>
                    <li>Email: ${ req.body.email } </li>
                    <li>Subject: ${req.body.subject}</li>
                </ul>
            <h3>Message:</h3>
            <p>${req.body.message }</p>`;
        
        let transporter = nodemailer.createTransport({
        service: 'smtp.office365.com', // true for 465, false for other ports
        secureConnection: false,
        port: 587,
        auth: {
            user: process.env.ACCOUNT_USER, // generated ethereal user
            pass: process.env.ACCOUNT_PASS // generated ethereal password
        },
        tls: {
        ciphers:'SSLv3'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer contact <bruce@urmyattorney.com>"', // sender address
        to: 'bruce@urmyattorney.com', // list of receivers
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