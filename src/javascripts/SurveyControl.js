import axios from "axios";
import { Selectors } from "./Selectors";

//toggle sub level checkboxes depending on if the higher was selected
//there should only be at most 4 levels of questions
export const checkInput = () => {
  const subQuestionLvlOneCheck = document.querySelector("#sub-q-1");
  const subQuestionLvlTwoCheck = document.querySelector("#sub-q-2");
  const subQuestionLvlThreeCheck = document.querySelector("#sub-q-3");
  const subQuestionLvlFourCheck = document.querySelector("#sub-q-4");
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
  const subInputsLvlFour = [
    ...document.querySelectorAll(".sub-input-level-four")
  ];
  const subLabelsLvlFour = [
    ...document.querySelectorAll(".sub-label-level-four")
  ];

  if (subQuestionLvlOneCheck) {
    subQuestionLvlOneCheck.addEventListener("click", () => {
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
  if (subQuestionLvlThreeCheck) {
    subQuestionLvlThreeCheck.addEventListener("click", () => {
      if (subQuestionLvlThreeCheck.checked) {
        subLabelsLvlThree.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlThree.map(input => {
          input.classList.toggle("hidden");
        });
      } else if (!subQuestionLvlThreeCheck.checked) {
        subLabelsLvlThree.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlThree.map(input => {
          input.classList.toggle("hidden");
        });
      }
    });
  }
  if (subQuestionLvlFourCheck) {
    subQuestionLvlFourCheck.addEventListener("click", () => {
      if (subQuestionLvlFourCheck.checked) {
        subLabelsLvlFour.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlFour.map(input => {
          input.classList.toggle("hidden");
        });
      } else if (!subQuestionLvlFourCheck.checked) {
        subLabelsLvlFour.map(label => {
          label.classList.toggle("hidden");
        });
        subInputsLvlFour.map(input => {
          input.classList.toggle("hidden");
        });
      }
    });
  }
};

//Todo setup axios post request to the email api to send checkbox questions and values
export const formSubmit = () => {
  const formCheckBoxes = [
    ...document.querySelectorAll("input[type='checkbox']")
  ];
  const formLabels = [...document.querySelectorAll("label")];
  const name = document.querySelector("#survey-email");
  const email = document.querySelector("#survey-name");

  const checkInputs = () => {
    //check to make sure survey has rendered to dom
    const survey = [];

    if (Selectors.surveyForm) {
      //check if the checkboxes and labels have rendered
      if (formCheckBoxes && formLabels) {
        //check if checkbox amount equals label amount
        if (formCheckBoxes.length === formLabels.length) {
          for (let i = 0; i < formCheckBoxes.length; i++) {
            const emailMarkup = ` ${formLabels[i].textContent} ${
              formCheckBoxes[i].checked ? "yes" : "no"
            }`;
            survey.push(emailMarkup);
          }
        }
      }
    }
    return survey;
  };

  //email template form
  const createEmailSubmit = () => {
    if (checkInputs().length > 0) {
      const emailTemp = ` ${checkInputs()} `;
      return emailTemp;
    }
  };
  //send the post request to the mailgun api in the router
  const postSurvey = async () => {
    const Email = email.value;
    const Name = name.value;
    return await axios({
      method: "post",
      url: `http://localhost:3000/api/send-survey?&email=${Email}&name=${Name}&text=${createEmailSubmit()}`,
      data: {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }
    })
      .then(res => {
        //need to create a modal for email response
        alert(
          "Thank You, your answers have been submitted and someone will be in contact with you soon."
        );
        Selectors.surveyForm.classList.add("hidden");
      })
      .catch(error => {
        alert(
          `Uh oh, ${
            error.status
          } something happened with your request, please submit again.`
        );
      });
  };

  return [checkInputs, createEmailSubmit, postSurvey];
};

//if survey form exists in dom
if (Selectors.surveyForm) {
  //get all the info from  checkboxes/labels and submit the survey info
  Selectors.surveyForm.addEventListener("submit", e => {
    const submitForm = formSubmit();
    const submitSurvey = submitForm[2];
    e.preventDefault();
    submitSurvey();
  });
}
