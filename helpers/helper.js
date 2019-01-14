
 
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

module.exports = exports;