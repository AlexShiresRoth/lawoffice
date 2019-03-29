import { 
    renderServicesList, 
    getContent, 
    addActiveClass,
    addContent, 
    scrollToSection,
    slideToggleNav
} 
from './javascripts/contentControl.js';


const loadFile = () => {
    //make sure DOM is loaded
    renderServicesList();
    getContent(); 
    addActiveClass();
    addContent(); 
    scrollToSection();
    slideToggleNav();
};


(() => {
if(document.readyState == "loading"){
        
        console.log(document.readyState);
    
        document.addEventListener("DOMContentLoaded", loadFile);
}
else {
    loadFile();
}
})();
