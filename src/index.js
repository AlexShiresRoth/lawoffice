import {
  scrollToSection,
  generateQuestionnaire
} from "./javascripts/contentControl.js";

const genSurvey = generateQuestionnaire();
const renderEstateAdmin = genSurvey[0];
const changeBtns = genSurvey[2];

const loadFile = () => {
  //make sure DOM is loaded
  renderEstateAdmin();

  changeBtns();
  
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
