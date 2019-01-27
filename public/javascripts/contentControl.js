

(() => {
    
    //titles for the services navbar
    const Titles = {
        willsTitle: `Wills, Trusts and Estates Law`,
        bankruptcyTitle: `Bankruptcy Law`
    }
    
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
    
    let getUrl = () => {
        const url = '/api/contents';
        return url;
    };
    
    //get content for first link in services section
    let getWills =  async () => {
      await axios.get(getUrl())
        .then(response => {
            if(response.data[0].title === Titles.willsTitle){
                selectors.boxesTitle.textContent = response.data[0].title;
                selectors.boxes[0].textContent = response.data[0].content[0];
                selectors.boxes[1].textContent = response.data[0].content[1];
                selectors.boxes[2].textContent = response.data[0].content[2];
                selectors.boxes[3].textContent = response.data[0].content[3];
            }
        })
        .catch(err => {
            console.log(err);
            selectors.boxOneTitle.textContent = err;
        });
    };
    
let getBankruptcy = async () => {
    await axios.get(getUrl())
        .then(response => {
            if(response.data[1].title === Titles.bankruptcyTitle){
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
        selectors.willsTrustsAndEstatesButton.addEventListener('click', getWills);
        selectors.bankruptcyButton.addEventListener('click', getBankruptcy);
    };
    addContent();
   
})();

