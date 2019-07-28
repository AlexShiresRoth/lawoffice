//titles for the services navbar
export const Titles = {
  serviceTitles: [
    "Wills, Trusts & Estates Law",
    "Real Estate Law",
    "Probate Law",
    "Estate Litigation",
    "Business Law",
    "Bankruptcy Law"
  ]
};

export const questionnaires = [
  {
    title: "Estate Administration",
    questions: [
      "1. Have you recently lost someone?",
      "2. Has anyone filed anything with the surrogates courts?",
      "3. Are you seeking to be the estate administrator?",
      "4. Will some object to you becoming the administrator?",
      "5. Are you seeking to challenge the person seeking to be the estate aministrator?",
      "6. Is there a will?",
      "7. Are there other beneficiaries?",
      "8. Do you know what assets the decedent owned?"
    ]
  },
  {
    title: "Estate Planning",
    questions: [
      "1. Are you looking to plan your estate or someone else's?",
      "2. Have you ever planned your estate?",
      "3. Do you have a will?",
      "4. Do you have any trusts?",
      "5. Are you a beneficiary under any trust?",
      "6. Are you married?",
      "7. Do you have any children?"
    ],
    subQuestion: "8. What assets do you own?",
    subQuestions: [
      "-Real Estate",
      "-Business",
      "-Life insurance on yourself or someone else",
      "-Retirement accounts"
    ],
    subQuestionTwo: "9. Financial Accounts?",
    subQuestionsTwo: [
      "-Checking, Savings C/D's",
      "-Brokerage accounts",
      "-Stocks",
      "-Bonds",
      "-Mutual Funds"
    ],
    subQuestionThree: "10. Collectables?",
    subQuestionsThree: [
      "-Antiques",
      "-Coins",
      "-Stamps",
      "-Paintings",
      "-Other"
    ],
    subQuestionFour: "11. Weapons?",
    subQuestionsFour: ["-Pistols", "-Rifles", "-Ammunition", "-Other"]
  },
  {
    title: "Real Estate",
    questions: [
      "1. Are you looking to buy a home?",
      "2. Have you made an offer on a property?"
    ],
    subQuestion: "3. Are you looking to sell a home?",
    subQuestions: ["-Have you listed your property?"],
    subQuestionTwo: "4. Are you looking to buy commercial property?",
    subQuestionsTwo: [
      "-Have you made an offer?",
      "-Have you seen any preliminary documents?"
    ],
    subQuestionThree: "5. Are you a landlord?",
    subQuestionsThree: [
      "-Are you in need of a lease for commercial tenant?",
      "-With a non-paying tenant?",
      "-With a breaching tenant?"
    ],
    subQuestionFour: "6. Are you or other party in breach of a lease?"
  }
];

//create a label element for each p question element

export const surveyMarkup = function() {
  const estateAdminSuveyMarkup = () => {
    let questionTitle = questionnaires[0].title;
    let questions = questionnaires[0].questions
      .map((question, i) => {
        return `
         <div class="section-contact--questionnaire--container--question--container--row">
         <label for="question">${question}</label>
         <input name="question" type="checkbox" class="input${i}"></input>
         </div>`;
      })
      .join(" ");
    let markup = ` <div class="section-contact--questionnaire--container--question--container">
    <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
     ${questions} <div class="section-contact--questionnaire--container--question--container--row">
    <p>Please review the information you selected and then hit submit.</p></div>
    <div class="section-contact--questionnaire--container--question--container--row">
    <input type="text" name="name"></input><input type="email" name="email"></input>
    <button>Submit</button>
    </div></div>`;

    return markup;
  };
  const estatePlanningSurveyMarkup = () => {
    let questionTitle = questionnaires[1].title;
    let questions = questionnaires[1].questions
      .map((question, i) => {
        return `
        <div class="section-contact--questionnaire--container--question--container--row">
        <label for="question">${question}</label>
        <input name="question" type="checkbox" class="input${i}"></input>
        </div>`;
      })
      .join(" ");
    let subQuestion = questionnaires[1].subQuestion;
    let subQuestions = questionnaires[1].subQuestions
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");
    let subQuestionTwo = questionnaires[1].subQuestionTwo;
    let subQuestionsTwo = questionnaires[1].subQuestionsTwo
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");
    let subQuestionThree = questionnaires[1].subQuestionThree;
    let subQuestionsThree = questionnaires[1].subQuestionsThree
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");

    let subQuestionFour = questionnaires[1].subQuestionFour;
    let subQuestionsFour = questionnaires[1].subQuestionsFour
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");

    let markup = `<div class="section-contact--questionnaire--container--question--container">
      <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
       ${questions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestion}</label></div> 
      ${subQuestions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionTwo}</label></div>
      ${subQuestionsTwo} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionThree}</label></div>
      ${subQuestionsThree} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionFour}</label></div>
      ${subQuestionsFour} 
      <div class="section-contact--questionnaire--container--question--container--row">
      <p>Please review the information you selected and then hit submit.</p></div>
      <div class="section-contact--questionnaire--container--question--container--row">
      <input type="text" name="name"></input><input type="email" name="email"></input>
      <button>Submit</button>
      </div></div>`;

    return markup;
  };

  const renderRealEstateSurvey = () => {
    let questionTitle = questionnaires[2].title;
    let questions = questionnaires[2].questions
      .map((question, i) => {
        return `
        <div class="section-contact--questionnaire--container--question--container--row">
        <label for="question">${question}</label>
        <input name="question" type="checkbox" class="input${i}"></input>
        </div>`;
      })
      .join(" ");
    let subQuestion = questionnaires[2].subQuestion;
    let subQuestions = questionnaires[2].subQuestions
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");
    let subQuestionTwo = questionnaires[2].subQuestionTwo;
    let subQuestionsTwo = questionnaires[2].subQuestionsTwo
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");
    let subQuestionThree = questionnaires[2].subQuestionThree;
    let subQuestionsThree = questionnaires[2].subQuestionsThree
      .map((subQ, i) => {
        return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion">${subQ}</label>
      <input name="subquestion" type="checkbox" class="subinput${i}"></input>
      </div>`;
      })
      .join(" ");
    let subQuestionFour = questionnaires[2].subQuestionFour;

    let markup = `<div class="section-contact--questionnaire--container--question--container">
      <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
       ${questions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestion}</label></div> 
      ${subQuestions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionTwo}</label></div>
      ${subQuestionsTwo} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionThree}</label></div>
      ${subQuestionsThree} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionFour}</label></div>
      <div class="section-contact--questionnaire--container--question--container--row">
      <p>Please review the information you selected and then hit submit.</p></div>
      <div class="section-contact--questionnaire--container--question--container--row">
      <input type="text" name="name"></input><input type="email" name="email"></input>
      <button>Submit</button>
      </div></div>`;

    return markup;
  };

  return [
    estateAdminSuveyMarkup,
    estatePlanningSurveyMarkup,
    renderRealEstateSurvey
  ];
};
