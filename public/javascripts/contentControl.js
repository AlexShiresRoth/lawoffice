

(() => {
    
    const selectors = {
        boxOneTitle: document.querySelector('.service-title'),
        boxOneContent: document.querySelector('.box-one p'),
        willsTrustsAndEstates: document.querySelector('#wills'),
        realEstate: document.querySelector('#real-estate')
    }
    
    let getUrl = () => {
        const url = '/api/contents';
        return url;
    };
    
    let getWillsAndTrusts =  async () => {
      await axios.get(getUrl())
        .then(response => {
            selectors.boxOneTitle.textContent = response.data[2].title;
            selectors.boxOneContent.textContent = response.data[0].content;
        })
        .catch(err => {
            console.log(err)
            selectors.boxOneTitle.textContent = err;
        });
    };
     let getRealEstate = async () => {
        await axios.get(getUrl())
            .then(res => {
                selectors.boxOneTitle.textContent = res.data[4].title;
                selectors.boxOneContent.textContent = res.data[4].content
            })
            .catch(err => {
                console.log(err)
            })
        }
    
    
    let addContent = () => {
        selectors.willsTrustsAndEstates.addEventListener('click', getWillsAndTrusts)
        selectors.realEstate.addEventListener('click', getRealEstate)
    }
    addContent();
    
   
   
})();

