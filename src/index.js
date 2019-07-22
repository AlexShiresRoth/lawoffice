import {
  scrollToSection,
  generateQuestionnaire
} from "./javascripts/contentControl.js";

const loadFile = () => {
  //make sure DOM is loaded
  generateQuestionnaire();
  
  scrollToSection();
};

(() => {
  if (document.readyState == "loading") {
    console.log(loadFile());
    document.addEventListener("DOMContentLoaded", loadFile);
  } else {
    console.log(loadFile());
    loadFile();
  }
})();
