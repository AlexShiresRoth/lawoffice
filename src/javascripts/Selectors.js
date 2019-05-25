 export const Selectors = {
        willsTrustsAndEstatesButton: document.querySelector('#wills'),
        bankruptcyButton: document.querySelector('#bankruptcy'),
        boxesTitle: document.querySelector('.box h6'),
        boxes: document.querySelectorAll('.box p'),
        sections: document.querySelectorAll('section'),
        mobileNav: document.querySelector('.mobile-nav'),
        navAppear: document.querySelector('.main-nav'),
        anchors: [
            {
                aboutAnchor: document.querySelector('#nav--about'),
                servicesAnchor: document.querySelector('#nav--services'),
                contactAnchor: document.querySelector('#nav--contact')
                
            }
        ]
    };
    
 //get services nodelist
 export let getServicesList = () => {
        let servicesList = document.querySelector('.services');
        let serviceLis = servicesList.querySelectorAll('li');
        return serviceLis;
    };
getServicesList();