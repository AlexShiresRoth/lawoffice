import { Selectors } from "./Selectors.js";
import { surveyMarkup, questionnaires } from "./Content";

//figure out how to extract survey info to email,
//fix real estate labels to be questions
//TODO fix add active class for buttons

//generate a questionnaire for every topic
export const generateQuestionnaire = () => {
  const getMarkup = surveyMarkup();

  const renderMarkup = markup => (Selectors.surveyForm ? markup : null);

  const changeSurvey = () => {
    Selectors.surveyBtns.forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        const btnText = this.textContent.toLowerCase().trim();
        removeActiveClass();
        if (btnText === questionnaires[0].title.toLowerCase().trim()) {
          const markup = getMarkup[0];
          Selectors.surveyForm.innerHTML = renderMarkup(markup());
          this.classList.add("active--button");
        }
        if (btnText === questionnaires[1].title.toLowerCase().trim()) {
          const markup = getMarkup[1];
          Selectors.surveyForm.innerHTML = renderMarkup(markup());
          this.classList.add("active--button");
        }
        if (btnText === questionnaires[2].title.toLowerCase().trim()) {
          const markup = getMarkup[2];
          Selectors.surveyForm.innerHTML = renderMarkup(markup());
          this.classList.add("active--button");
        } else {
          return null;
        }
      });
    });
  };

  const removeActiveClass = () => {
    const active = document.getElementsByClassName("active--button");
    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active--button", "");
    }
  };

  return [changeSurvey];
};

//scrolling navbar module
export const scrollToSection = event => {
  event.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
};

export const switchNavIcon = () => {
  const icons = [`<i class="bars icon"></i>`, `<i class="x icon"></i>`];
  if (Selectors.navAppear.classList.contains("visible")) {
    Selectors.navIcon.innerHTML = icons[1];
  } else {
    Selectors.navIcon.innerHTML = icons[0];
  }
};

export const toggleDropDown = () => {
  Selectors.dropDown.addEventListener("click", e => {
    e.stopPropagation();
    Selectors.serviceUl.classList.toggle("hidden");
    Selectors.serviceUl.classList.toggle("show");
  });
};
toggleDropDown();

export const closeDropdown = () => {
  document.addEventListener("click", e => {
    e.stopPropagation();
    if (Selectors.serviceUl.classList.contains("show")) {
      Selectors.serviceUl.classList.remove("show");
      Selectors.serviceUl.classList.add("hidden");
    }
  });
};
closeDropdown();

//Mobile navbar slidetoggle

export const slideToggleNav = () => {
  Selectors.mobileNav.addEventListener("click", () => {
    Selectors.navAppear.classList.toggle("invisible");
    Selectors.navAppear.classList.toggle("visible");
    switchNavIcon();
  });
};
slideToggleNav();
