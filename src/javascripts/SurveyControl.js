import axios from "axios";
import { Selectors } from "./Selectors";

export const checkInput = () => {
  const subQuestionLvlOneCheck = document.querySelector(".sub-q-1");
  const subQuestionLvlTwoCheck = document.querySelector(".sub-q-2");
  const subQuestionLvlThreeCheck = document.querySelector(".sub-q-3");
  const subQuestionLvlFourCheck = document.querySelector(".sub-q-4");
  const subInputsLvlOne = [
    ...document.querySelectorAll(".sub-input-level-one")
  ];
  const subLabelsLvlOne = [
    ...document.querySelectorAll(".sub-label-level-one")
  ];
  const subInputsLvlTwo = [
    ...document.querySelectorAll(".sub-input-level-two")
  ];
  const subLabelsLvlTwo = [
    ...document.querySelectorAll(".sub-label-level-two")
  ];
  const subInputsLvlThree = [
    ...document.querySelectorAll(".sub-input-level-three")
  ];
  const subLabelsLvlThree = [
    ...document.querySelectorAll(".sub-label-level-three")
  ];
  const subInputsLvlFour = [...document.querySelectorAll(".sub-input-level-")];
  const subLabelsLvlFour = [
    ...document.querySelectorAll(".sub-label-level-one")
  ];
  console.log(subQuestionLvlOneCheck);
  if (subQuestionLvlOneCheck) {
    subQuestionLvlOneCheck.addEventListener("click", () => {
      console.log("click");
      if (subQuestionLvlOneCheck.checked) {
        subLabelsLvlOne.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlOne.map(input => {
          input.classList.toggle("hidden");
        });
      } else if (!subQuestionLvlOneCheck.checked) {
        subLabelsLvlOne.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlOne.map(input => {
          input.classList.toggle("hidden");
        });
      }
    });
  }
  if (subQuestionLvlTwoCheck) {
    subQuestionLvlTwoCheck.addEventListener("click", () => {
      console.log("click");
      if (subQuestionLvlTwoCheck.checked) {
        subLabelsLvlTwo.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlTwo.map(input => {
          input.classList.toggle("hidden");
        });
      } else if (!subQuestionLvlTwoCheck.checked) {
        subLabelsLvlTwo.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlTwo.map(input => {
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
      checkInputs();
    });
  };
  const checkInputs = () => {
    if (Selectors.surveyForm) {
      if (surveyCheckBoxes) {
        console.log(
          surveyCheckBoxes,
          questions.map(q => q.textContent),
          subInputs,
          subLabels.map(label => label.textContent)
        );
      }
    }
  };

  return [submitSurvey];
};
