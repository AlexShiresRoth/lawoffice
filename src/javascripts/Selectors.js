export const Selectors = {
  willsTrustsAndEstatesButton: document.querySelector("#wills"),
  bankruptcyButton: document.querySelector("#bankruptcy"),
  boxesTitle: document.querySelector(".box h6"),
  boxes: document.querySelectorAll(".box p"),
  sections: document.querySelectorAll("section"),
  mobileNav: document.querySelector(".mobile-nav"),
  navIcon: document.querySelector(".nav-icon-container"),
  navAppear: document.querySelector(".main-nav"),
  dropDown: document.querySelector(".main-nav__dropdown"),
  serviceUl: document.querySelector(".main-nav__dropdown--service-list"),
  surveyForm: document.querySelector(
    ".section-contact--questionnaire--container"
  ),
  surveyBtns: [
    ...document.querySelectorAll(
      ".section-contact--questionnaire--buttons--button"
    )
  ],
  surveyButton: document.querySelector(".survey--button"),
  subQuestionLvlOneCheck: document.querySelector(".sub-q-1"),
  subQuestionLvlTwoCheck: document.querySelector(".sub-q-2"),
  subQuestionLvlThreeCheck: document.querySelector(".sub-q-3"),
  subQuestionLvlfourCheck: document.querySelector(".sub-q-4"),
  subInputsLvlOne: [...document.querySelectorAll(".sub-input-level-one")],
  subLabelsLvlOne: [...document.querySelectorAll(".sub-label-level-one")],
  subInputsLvlTwo: [...document.querySelectorAll(".sub-input-level-two")],
  subLabelsLvlTwo: [...document.querySelectorAll(".sub-label-level-two")],
  subInputsLvlThree: [...document.querySelectorAll(".sub-input-level-three")],
  subLabelsLvlThree: [...document.querySelectorAll(".sub-label-level-three")],
  subInputsLvlFour: [...document.querySelectorAll(".sub-input-level-four")],
  subLabelsLvlFour: [...document.querySelectorAll(".sub-label-level-four")],
  anchors: [
    {
      aboutAnchor: document.querySelector("#nav--about"),
      servicesAnchor: document.querySelector("#nav--services"),
      contactAnchor: document.querySelector("#nav--contact")
    }
  ]
};
