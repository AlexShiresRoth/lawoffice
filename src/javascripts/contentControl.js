import { Selectors } from "./Selectors.js";
import { questionnaires } from "./Content";

//generate a questionnaire for every topic
export const generateQuestionnaire = () => {
  const renderEstateAdmin = () => {
    if (Selectors.surveyForm) {
      const questions = questionnaires[0].questions
        .map((question, i) => {
          return `<div class="question--container--row">
        <p>${question}</p>
        <input name="question${i}" type="checkbox" class="input${i}"></input>
        </div>`;
        })
        .join(" ");
      const markup = `<div class="question--container">${questions}</div>`;
      return markup;
    }
  };
  const renderEstatePlanning = () => {
    if (Selectors.surveyForm) {
      const questions = questionnaires[1].questions
        .map((question, i) => {
          return `<div class="question--container--row">
        <p>${question}</p>
        <input name="question${i}" type="checkbox" class="input${i}"></input>
        <div class="question--container--row--subrow"><p>${
          question.question
        }</p>
          <div class="question--container--row--subrow--questions">
          ${
            question.subQuestions
              ? question.subQuestions.map((subQuestion, i) => {
                  `<p>${subQuestion}</p><input name="subQuestion${i}" type="checkbox" class="subInput${i}"></input>`;
                })
              : null
          }
        </div>`;
        })
        .join(" ");
      const markup = `<div class="question--container">${questions}</div>`;
      return markup;
    }
  };

  const changeSurvey = () => {
    Selectors.surveyBtns.forEach(btn => {
      btn.addEventListener("click", function(e) {
        e.stopPropagation();
        const btnText = this.textContent.toLowerCase().trim();
        btnText === questionnaires[0].title.toLowerCase().trim()
          ? (Selectors.surveyForm.innerHTML = renderEstateAdmin())
          : null;
        btnText === questionnaires[1].title.toLocaleLowerCase().trim()
          ? (Selectors.surveyForm.innerHTML = renderEstatePlanning())
          : null;
      });
    });
  };

  return [renderEstateAdmin, renderEstatePlanning, changeSurvey];
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
