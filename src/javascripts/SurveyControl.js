import axios from "axios";
import { Selectors } from "./Selectors";

export const checkInputCommercial = () => {
  const subQuestionCheck = document.getElementById("commercial-sub-q-1");
  const subInputs = [...document.querySelectorAll(".sub-input")];
  const subLabels = [...document.querySelectorAll(".sub-label")];
  if (subQuestionCheck) {
    subQuestionCheck.addEventListener("click", () => {
      if (subQuestionCheck.checked) {
        subLabels.map(label => {
          label.classList.toggle("hidden");
        });
        subInputs.map(input => {
          input.classList.toggle("hidden");
        });
      } else if (!subQuestionCheck.checked) {
        subLabels.map(label => {
          label.classList.toggle("hidden");
        });
        subInputs.map(input => {
          input.classList.toggle("hidden");
        });
      }
    });
  }
};

//Todo setup axios post request to the email api to send checkbox questions and values
export const formSubmit = () => {
  console.log("form submit");
  const submitSurvey = () => {
    Selectors.surveyForm.addEventListener("submit", e => {
      e.preventDefault();
      checkInput();
    });
  };
  const checkInput = () => {
    const questions = [...document.querySelectorAll(".input-label")]
    const surveyCheckBoxes = [...document.querySelectorAll(".input-box")];
    const subInputs = [...document.querySelectorAll(".sub-input")];
    const subLabels = [...document.querySelectorAll('.sub-label')];
    if (Selectors.surveyForm) {
      if (surveyCheckBoxes) {
        console.log(surveyCheckBoxes, questions.map(q => q.textContent), subInputs, subLabels.map(label => label.textContent));
      }
    }
  };

  return [submitSurvey];
};
