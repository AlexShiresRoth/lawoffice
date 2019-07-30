import {
  scrollToSection,
  generateQuestionnaire
} from "./javascripts/contentControl.js";

import { formSubmit } from "./javascripts/SurveyControl.js";

const genSurvey = generateQuestionnaire();
const renderSurvey = genSurvey[0];
const changeBtns = genSurvey[2];

const subForm = formSubmit();
const callFormSubmit = subForm[0];
const loadFile = () => {
  renderSurvey();

  callFormSubmit();

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
