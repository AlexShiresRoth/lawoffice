import {
  renderServicesList,
  addActiveClass,
  addContent,
  scrollToSection,
  slideToggleNav,
  toggleDropDown
} from "./javascripts/contentControl.js";

const loadFile = () => {
  //make sure DOM is loaded

  renderServicesList();

  addActiveClass();

  addContent();

  scrollToSection();

  slideToggleNav();

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
