
(() => {
   const DOMselectors = {
       apiPost: document.querySelector('.api-post')
   } 
   
    let getUrl = () => {
        let url = '/api/contents'
        return url;
    }
    
   let getAllPosts = async () => {
       
       const res = await axios.get(getUrl())
       
        res.data.map(newData => {
            
            let Title = document.createElement('h2')
            let paragraph = document.createElement('p')
            
            DOMselectors.apiPost.appendChild(Title).append(newData.title)
            DOMselectors.apiPost.appendChild(paragraph).append(newData.content)
        })
   }
   getAllPosts();
})();