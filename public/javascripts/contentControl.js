

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
    
    //api url
    let getUrl = () => {
        const url = '/api/contents';
        return url;
    };
    
    //get content for first link in services section
    let getWills =  async () => {
      await axios.get(getUrl())
        .then(response => {
                selectors.boxesTitle.textContent = response.data[0].title;
                selectors.boxes[0].textContent = response.data[0].content[0];
                selectors.boxes[1].textContent = response.data[0].content[1];
                selectors.boxes[2].textContent = response.data[0].content[2];
                selectors.boxes[3].textContent = response.data[0].content[3];
            
        })
        .catch(err => {
            console.log(err);
            selectors.boxOneTitle.textContent = err;
        });
    };
   

//call api for content to the bankruptcy section
let getBankruptcy = async () => {
    await axios.get(getUrl())
        .then(response => {
            if(response.data[1].title === Titles.serviceTitles[5]){
                selectors.boxesTitle.textContent = response.data[1].title;
                selectors.boxes[0].textContent = response.data[1].content[0];
                selectors.boxes[1].textContent = response.data[1].content[1];
                selectors.boxes[2].textContent = response.data[1].content[2];
                selectors.boxes[3].textContent = response.data[1].content[3];
            }
        })
        .catch(err => {
            console.log(err);
            selectors.boxes[0].textContent = err;
        });
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
        
        for(let item of servicesList){
            //fix this to match the string in titles to 
            
                item.addEventListener('click', function(){
                if(this.textContent === Titles.serviceTitles[0]){
                    getWills();
                }
                if(this.textContent === Titles.serviceTitles[5]){
                    getBankruptcy();
                }
                else {
                    console.log('No Match Found!')
                }
            });
        }
    };
    addContent();
   
})();

