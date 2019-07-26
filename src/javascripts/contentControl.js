import { Selectors } from "./Selectors.js";
import { surveyMarkup, questionnaires } from "./Content";

//figure out how to extract survey info to email,
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
        if (btnText === questionnaires[0].title.toLowerCase().trim()) {
          const markup = getMarkup[0];
          Selectors.surveyForm.innerHTML = renderMarkup(markup());
          e.target.classList.add('active--button');
          removeActiveClass.call(this);
        }
        if (btnText === questionnaires[1].title.toLowerCase().trim()) {
          const markup = getMarkup[1];
          Selectors.surveyForm.innerHTML = renderMarkup(markup());
          e.target.classList.add('active--button');
          removeActiveClass.call(this);
        } else {
          return null;
        }
      });
    });
  };

  const removeActiveClass = function() {
    console.log(this)
    !this.classList.contains("active--button")
      ? this.classList.remove("active--button")
      : null;
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
