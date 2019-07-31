import {
  scrollToSection,
  generateQuestionnaire
} from "./javascripts/contentControl.js";

const genSurvey = generateQuestionnaire();
const renderSurvey = genSurvey[0];
const changeBtns = genSurvey[2];

const loadFile = () => {
  renderSurvey();

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
