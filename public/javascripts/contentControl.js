

(() => {
    
    //titles for the services navbar
    const Titles = {
      serviceTitles: [
          'Wills, Trusts & Estates Law',
          'Real Estate Law',
          'Probate Law',
          'Estate Litigation',
          'Business Law',
          'Bankruptcy Law'
         ]
    };
    
    const Content = {
         wills: [
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
                ],
            bankruptcy: [
               `At Rothenberg Law Office, PLLC, our philosophy is that bankruptcy lawyers in Bohemia, 
               NY, should engage clients on a personalized, individual basis, rather than simply treating 
               people like case files. This practice will help you to complete this stressful, intimidating 
               process and to create your best future on the other side.`,
               
               `No matter what your circumstances may be, there is always a way to lay groundwork for a better and more stable future. We are 
               happy to help you do just that by providing knowledgeable legal counsel. Call us today to 
               speak about the following types of bankruptcy:`,
                
               `<ul>
                    <li><ion-icon name="checkmark"></ion-icon>Chapter 7</li>
                    <li><ion-icon name="checkmark"></ion-icon>Chapter 11</li>
                    <li><ion-icon name="checkmark"></ion-icon>Chapter 13</li>
                </ul>`,
               
               `When you need personal bankruptcy attorneys that are competent, attentive, and ready to 
               fight for your best interest, you can rely on anyone in our firm to do the job right. 
               Your future is important to us, and we know that the events and legal decisions 
               surrounding your bankruptcy can affect you and your family for many years to come. 
               That’s why you can contact us any time to discuss the details of how our dedicated 
               firm is ready to support you in this difficult time.`,
               ],
            business: [
                `Do you find yourself facing legal troubles in regards to your 
                commercial enterprise? The longer you run a business, the more 
                likely it becomes that you'll need the help of a knowledgeable 
                commercial litigation firm such as ours. Address any problems
                you might face by turning to Rothenberg Law Office, PLLC, the firm 
                that Bohemia, NY, has trusted for years. Call us today for help managing
                the following legal aspects of your company:`,
                
                `<ul>
                    <li><ion-icon name="checkmark"></ion-icon>Forming Contracts</li>
                    <li><ion-icon name="checkmark"></ion-icon>Defending Lawsuits</li>
                    <li><ion-icon name="checkmark"></ion-icon>Addressing Copyright Infringement</li>
                    <li><ion-icon name="checkmark"></ion-icon>Forming LLCs</li>
                </ul>`,
                
                `Running a business is difficult enough without having to 
                constantly worry about whether or not you are legally protected.
                There are many rewarding aspects of being a business owner, but when
                it comes to dealing with competitors, employee issues, and contract breaches,
                you have your hands full. Turn to our business law practice for help taking
                the burden off of these areas of your operation.`,
                
                `We are here to provide you withthe legal counsel and representation 
                you need both in and out of the courtroom. Our attorneys keep you 
                informed about any changes in your situation or the laws 
                concerning your business even when there are no legal issues currently being 
                contested. Call today to set up an appointment so that we can go over all of
                the important issues together.`,             
                ],
                estate: [
                    `Are you involved in a legal battle regarding the estate of a loved one?
                    Are certain assets being withheld from you while you wait for proceedings 
                    to play out? When it comes to matters of estate litigation, you need a 
                    knowledgeable lawyer on your side to represent your best interests and 
                    that of the estate in question. That’s where the team at 
                    Rothenberg Law Office, PLLC comes in.`,
                    
                    `The professionals at Rothenberg Law Office, PLLC in Bohemia,
                    NY offer a wide range of estate litigation services. 
                    When you work with the team at Rothenberg Law Office, PLLC, 
                    you can expect thorough, personal, and compassionate 
                    service every step of the way.`,
                    
                    `With convenient hours and easy appointment scheduling, 
                    the team at Rothenberg Law Office, PLLC aims to make it 
                    easy to get the legal help you need. Call today 
                    to schedule your consultation. `,
                    
                    `<img src="./stylesheets/img/willandtest.jpg" alt="Last Will and Testament" style="width:100%; height:100%;filter:grayScale(80%);">`
                    ],
                probate: [
                    `When you need legal representation for the settlement of your estate,
                    call Rothenberg Law Office, PLLC. Our probate law firm in Bohemia,
                    NY, specializes in the administration of asset distribution. Whether
                    or not there is a will, our law firm has the years of experience and
                    the deep familiarity with probate law necessary to bring your case to
                    successful resolution. From real estate probate to probate litigation
                    in the courtroom, we apply our expertise to all cases in which clients 
                    seek an equitable estate settlement. As part of our usual probate duties,
                    our services include:`,
                    
                    `<ul>
                        <li><ion-icon name="checkmark"></ion-icon>Mediating Disputes over Assets between Beneficiaries</li>
                        <li><ion-icon name="checkmark"></ion-icon>Validating the Will</li>
                        <li><ion-icon name="checkmark"></ion-icon>Settling Outstanding Debts</li>
                        <li><ion-icon name="checkmark"></ion-icon>Paying Taxes</li>
                        <li><ion-icon name="checkmark"></ion-icon>Making an Inventory of Assets</li>
                        <li><ion-icon name="checkmark"></ion-icon>Distributing Remaining Assets on Behalf of the Decedent</li>
                        <li><ion-icon name="checkmark"></ion-icon>Preparing and Filing the Necessary Paper Work</li>
                    </ul>`,
                    
                    `We understand that estate settlement can be a sensitive, emotionally 
                    charged process. Our mission is to bring your case to a successful 
                    close while minimizing the stress and burden on you and your family.
                    However straightforward or convoluted your case may be, we provide
                    compassionate and considerate probate administration.`,
                    
                    `Our services are designed to streamline and facilitate probate 
                    administration. Estate settlement can become a contested process,
                    but we ensure your peace of mind by working diligently to resolve 
                    all necessary matters.`
                    ],
                    realestate: [
                        `Acquiring real estate is a major investment, and you want 
                        to ensure that all contractual details are consistent with 
                        the agreed upon terms. To protect your investment and guarantee
                        that you’re entering into the contract you want, trust Rothenberg
                        Law Office, PLLC. We are the experienced real estate transaction 
                        lawyers in Bohemia, NY, who make sure the deal is finalized to your
                        satisfaction. Real estate law and contracts can be dense and easy 
                        to misconstrue. However, our law firm is here to see that your contract
                        reflects your best interests. `,
                        
                        `Over the years, our legal expertise and attention to detail have
                        earned us our reputation as the real estate lawyers trusted by local
                        residents. Safeguard your property transaction by leaving the fine
                        print to us. In addition to our standard transaction and contract
                        services, we specialize in:`,
                        
                        `<ul>
                            <li><ion-icon name="checkmark"></ion-icon>Resolution of Landlord/Tenant Disputes</li>
                            <li><ion-icon name="checkmark"></ion-icon>Transfer of Title and Ownership</li>
                            <li><ion-icon name="checkmark"></ion-icon>Title Dispute Representation</li>
                            <li><ion-icon name="checkmark"></ion-icon>Contract Disputes</li>
                            <li><ion-icon name="checkmark"></ion-icon>Breach of Contract</li>
                            <li><ion-icon name="checkmark"></ion-icon>Boundary Dispute Representation</li>
                            <li><ion-icon name="checkmark"></ion-icon>Property Liens</li>
                            <li><ion-icon name="checkmark"></ion-icon>Easements, Right Of Way, and Access Issues</li>
                            <li><ion-icon name="checkmark"></ion-icon>Buying and Selling Property</li>
                            <li><ion-icon name="checkmark"></ion-icon>Commercial Leases</li>
                            <li><ion-icon name="checkmark"></ion-icon>Lease Drafting</li>
                         </ul>`,
                         
                         `<img src="./stylesheets/img/sign.jpg" alt="Deed" style="width:100%; height:100%;filter:grayScale(80%);">`
                        ]
        };
        
    
    const selectors = {
        willsTrustsAndEstatesButton: document.querySelector('#wills'),
        bankruptcyButton: document.querySelector('#bankruptcy'),
        boxesTitle: document.querySelector('.box h6'),
        boxes: document.querySelectorAll('.box p')
    };
    
    //get services nodelist
    let getServicesList = () => {
        let servicesList = document.querySelector('.services');
        let serviceLis = servicesList.querySelectorAll('li');
        return serviceLis;
    };
    getServicesList();
    
    //render services list array to page
    let renderServicesList = () => {
        let serviceList = getServicesList();
        
        for(let title = 0; title < serviceList.length; title++){
          serviceList[title].textContent = Titles.serviceTitles[title];
        }
    };
    renderServicesList();

    //render content to service list
    let getContent = (arr, text, title) => {
        for(let i = 0; i < arr.length; i++) {
            selectors.boxesTitle.innerHTML = title;
            arr[i].innerHTML = text[i];
        }
    };
    
    
    
    
    
    //add active class to content select links in services section
   let addActiveClass = () => {
       
       let services = getServicesList();
       //cycle through services nav lis
        for(let li of services){
            li.addEventListener('click', () => {
                let current = document.getElementsByClassName('active');
                
                 current[0].className = current[0].className.replace('active', '');
                 li.classList.add('active');
        
            });
        }
   };
   
    addActiveClass();

    //add content to services boxes by calling to API 
    let addContent = () => {
        
        let servicesList = getServicesList();
        //nodelist of services boxes
        let boxArr = selectors.boxes;
        
        for(let item of servicesList){
            //fix this to match the string in titles to 
            
                item.addEventListener('click', function(){
                if(this.textContent === Titles.serviceTitles[0]){
                    return getContent(boxArr,Content.wills,Titles.serviceTitles[0]);
                }
                if(this.textContent === Titles.serviceTitles[1]){
                    return getContent(boxArr,Content.realestate, Titles.serviceTitles[1]);
                }
                if(this.textContent === Titles.serviceTitles[2]){
                    return getContent(boxArr,Content.probate, Titles.serviceTitles[2]);
                }
                if(this.textContent === Titles.serviceTitles[3]){
                    return getContent(boxArr,Content.estate, Titles.serviceTitles[3]);
                }
                if(this.textContent === Titles.serviceTitles[4]){
                    return getContent(boxArr,Content.business, Titles.serviceTitles[4]);
                }
                if(this.textContent === Titles.serviceTitles[5]){
                    return getContent(boxArr,Content.bankruptcy, Titles.serviceTitles[5]);
                }
                else {
                    console.log(`no match`);
                }
            });
        }
    };
    addContent();
   
})();

//scrolling page module
(() => {
    
    const Selectors = {
        sections: document.querySelectorAll('section'),
        anchors: [
            {
                aboutAnchor: document.querySelector('#nav--about'),
                servicesAnchor: document.querySelector('#nav--services'),
                contactAnchor: document.querySelector('#nav--contact')
                
            }
        ]
    };
    //scroll function
    let scrollToSection = (event) => {
                event.scrollIntoView({
                block:'start',
                behavior:'smooth'
            });  
        };
    //refactor this to be DRY
    Selectors.anchors[0].aboutAnchor.addEventListener('click', () => {
        scrollToSection(Selectors.sections[0]);
    });
    Selectors.anchors[0].servicesAnchor.addEventListener('click', ()=> {
        scrollToSection(Selectors.sections[1]);
    });
    Selectors.anchors[0].contactAnchor.addEventListener('click', () => {
        scrollToSection(Selectors.sections[3]);
    });
   
    
})();

//Navbar module
(() => {
     
       const mobileNav = document.querySelector('.mobile-nav');
       const navAppear = document.querySelector('.main-nav');
       //figure out why toggling between two classes doesn't work
       let slideToggleNav = () => {
         mobileNav.addEventListener("click", () => {
             navAppear.classList.toggle('visible');
         });
       };
       slideToggleNav();
})();

