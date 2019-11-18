//titles for the services navbar
export const Titles = {
	serviceTitles: [
		'Estate Administration',
		'Estate Planning',
		'Real Estate',
		'Rental Property Management',
		'Commercial Transaction',
	],
};

export const questionnaires = [
	{
		title: 'Estate Administration',
		questions: [
			'1. Have you recently lost someone?',
			'2. Has anyone filed anything with the surrogates courts?',
			'3. Are you seeking to be the estate administrator?',
			'4. Will some object to you becoming the administrator?',
			'5. Are you seeking to challenge the person seeking to be the estate aministrator?',
			'6. Is there a will?',
			'7. Are there other beneficiaries?',
			'8. Do you know what assets the decedent owned?',
		],
	},
	{
		title: 'Estate Planning',
		questions: [
			"1. Are you looking to plan your estate or someone else's?",
			'2. Have you ever planned your estate?',
			'3. Do you have a will?',
			'4. Do you have any trusts?',
			'5. Are you a beneficiary under any trust?',
			'6. Are you married?',
			'7. Do you have any children?',
		],
		subQuestion: '8. What assets do you own?',
		subQuestions: [
			'-Real Estate',
			'-Business',
			'-Life insurance on yourself or someone else',
			'-Retirement accounts',
		],
		subQuestionTwo: '9. Financial Accounts?',
		subQuestionsTwo: ["-Checking, Savings C/D's", '-Brokerage accounts', '-Stocks', '-Bonds', '-Mutual Funds'],
		subQuestionThree: '10. Collectables?',
		subQuestionsThree: ['-Antiques', '-Coins', '-Stamps', '-Paintings', '-Other'],
		subQuestionFour: '11. Weapons?',
		subQuestionsFour: ['-Pistols', '-Rifles', '-Ammunition', '-Other'],
	},
	{
		title: 'Real Estate',
		questions: ['1. Are you looking to buy a home?', '2. Have you made an offer on a property?'],
		subQuestion: '3. Are you looking to sell a home?',
		subQuestions: ['-Have you listed your property?'],
		subQuestionTwo: '4. Are you looking to buy commercial property?',
		subQuestionsTwo: ['-Have you made an offer?', '-Have you seen any preliminary documents?'],
		subQuestionThree: '5. Are you a landlord?',
		subQuestionsThree: [
			'-Are you in need of a lease for commercial tenant?',
			'-With a non-paying tenant?',
			'-With a breaching tenant?',
		],
		subQuestionFour: '6. Are you or other party in breach of a lease?',
	},
	{
		title: 'Rental Property Management',
		questions: [
			'1. Do you have property you want to rent out?',
			'2. Do you need someone to manage your property?',
			'3. Are you an absentee landlord in need of someone to oversee your property?',
		],
	},
	{
		title: 'Commercial Transaction',
		questions: ['1. Are you buying a business?'],
		subQuestion: '2. Are you selling a business?',
		subQuestions: ['-Do you have any offer?', '-Have you put together documentation for the sale?'],
		subSubQuestions: ['1. Due Diligence', '2. Leases', '3. Financial Statements'],
	},
];

//generate survey html per practice area
export const surveyMarkup = function() {
	const inputContainer = () => {
		const markup = `<div class="section-contact--questionnaire--container--question--container--row">
      <div class="section-contact--questionnaire--container--question--container--row--input-icon-row">
      <div class="section-contact--questionnaire--container--question--container--row--input-icon-row--icon-container">
      <i class="user outline icon"></i></div>
      <input class="section-contact--questionnaire--container--question--container--row--input-icon-row--input" id="survey-name" type="text" name="name" placeholder="Jane Birch"required>
      </div>
      <div class="section-contact--questionnaire--container--question--container--row--input-icon-row">
      <div class="section-contact--questionnaire--container--question--container--row--input-icon-row--icon-container">
      <i class="envelope outline icon"></i></div>
      </input><input class="section-contact--questionnaire--container--question--container--row--input" id="survey-email" type="email" name="email" placeholder="jane@gmail.com" required>
      </input></div>
      <button class="survey--button">Submit</button>
      </div>`;
		return markup;
	};

	const estateAdminSuveyMarkup = () => {
		let questionTitle = questionnaires[0].title;
		let questions = questionnaires[0].questions
			.map((question, i) => {
				return `
         <div class="section-contact--questionnaire--container--question--container--row">
         <label for="question-${i}" class="input-label">${question}</label>
         <input name="question-${i}" type="checkbox" class="input-box"></input>
         </div>`;
			})
			.join(' ');
		let markup = `<div class="section-contact--questionnaire--container--question--container">
    <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
     ${questions} <div class="section-contact--questionnaire--container--question--container--row">
    <p>Please review the information you selected and then hit submit.</p></div>
    ${inputContainer()}
    </div>`;

		return markup;
	};

	const estatePlanningSurveyMarkup = () => {
		let questionTitle = questionnaires[1].title;
		let questions = questionnaires[1].questions
			.map((question, i) => {
				return `
        <div class="section-contact--questionnaire--container--question--container--row">
        <label for="question-${i}" class="input-label">${question}</label>
        <input name="question-${i}" type="checkbox" class="input-box"></input>
        </div>`;
			})
			.join(' ');
		let subQuestion = questionnaires[1].subQuestion;
		let subQuestions = questionnaires[1].subQuestions
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion-${i}" class="sub-label-level-one hidden">${subQ}</label>
      <input name="subquestion-${i}" type="checkbox" class="sub-input-level-one hidden"></input>
      </div>`;
			})
			.join(' ');
		let subQuestionTwo = questionnaires[1].subQuestionTwo;
		let subQuestionsTwo = questionnaires[1].subQuestionsTwo
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestionTwo-${i}" class="sub-label-level-two hidden">${subQ}</label>
      <input name="subquestionTwo-${i}" type="checkbox" class="sub-input-level-two hidden"></input>
      </div>`;
			})
			.join(' ');
		let subQuestionThree = questionnaires[1].subQuestionThree;
		let subQuestionsThree = questionnaires[1].subQuestionsThree
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestionThree-${i}" class="sub-label-level-three hidden">${subQ}</label>
      <input name="subquestionThree-${i}" type="checkbox" class="sub-input-level-three hidden"></input>
      </div>`;
			})
			.join(' ');

		let subQuestionFour = questionnaires[1].subQuestionFour;
		let subQuestionsFour = questionnaires[1].subQuestionsFour
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestionFour-${i}" class="sub-label-level-four hidden">${subQ}</label>
      <input name="subquestionFour-${i}" type="checkbox" class="sub-input-level-four hidden"></input>
      </div>`;
			})
			.join(' ');

		let markup = `<div class="section-contact--questionnaire--container--question--container">
      <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
       ${questions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestion}</label>
      <input name="subquestion" type="checkbox" id="sub-q-1"></input></div> 
      ${subQuestions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionTwo}</label>
      <input name="subquestion" type="checkbox" id="sub-q-2"></input></div>
      ${subQuestionsTwo} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionThree}</label>
      <input name="subquestion" type="checkbox" id="sub-q-3"></input></div>
      ${subQuestionsThree} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionFour}</label>
      <input name="subquestion" type="checkbox" id="sub-q-4"></input></div>
      ${subQuestionsFour} 
      <div class="section-contact--questionnaire--container--question--container--row">
      <p>Please review the information you selected and then hit submit.</p></div>
      ${inputContainer()}</div>`;

		return markup;
	};

	const renderRealEstateSurvey = () => {
		let questionTitle = questionnaires[2].title;
		let questions = questionnaires[2].questions
			.map((question, i) => {
				return `
        <div class="section-contact--questionnaire--container--question--container--row">
        <label for="question-${i}" >${question}</label>
        <input name="question-${i}" type="checkbox" class="input-box"></input>
        </div>`;
			})
			.join(' ');
		let subQuestion = questionnaires[2].subQuestion;
		let subQuestions = questionnaires[2].subQuestions
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestion-${i}" class="sub-label-level-one hidden">${subQ}</label>
      <input name="subquestion-${i}" type="checkbox" class="sub-input-level-one hidden"></input>
      </div>`;
			})
			.join(' ');
		let subQuestionTwo = questionnaires[2].subQuestionTwo;
		let subQuestionsTwo = questionnaires[2].subQuestionsTwo
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestionTwo-${i}" class="sub-label-level-two hidden">${subQ}</label>
      <input name="subquestion-${i}" type="checkbox" class="sub-input-level-two hidden"></input>
      </div>`;
			})
			.join(' ');
		let subQuestionThree = questionnaires[2].subQuestionThree;
		let subQuestionsThree = questionnaires[2].subQuestionsThree
			.map((subQ, i) => {
				return `
      <div class="section-contact--questionnaire--container--question--container--row--sub-row">
      <label for="subquestionThree-${i}" class="sub-label-level-three hidden">${subQ}</label>
      <input name="subquestionThree-${i}" type="checkbox" class="sub-input-level-three hidden"></input>
      </div>`;
			})
			.join(' ');
		let subQuestionFour = questionnaires[2].subQuestionFour;

		let markup = `<div class="section-contact--questionnaire--container--question--container">
      <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
       ${questions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestion}</label>
      <input name="subquestion" type="checkbox"  id="sub-q-1"></input></div> 
      ${subQuestions}
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionTwo}</label>
      <input name="subquestion" type="checkbox"  id="sub-q-2"></input></div>
      ${subQuestionsTwo} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionThree}</label>
      <input name="subquestion" type="checkbox"  id="sub-q-3"></input></div>
      ${subQuestionsThree} 
      <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestionFour}</label>
      <input name="subquestion" type="checkbox"  id="sub-q-4"></input></div>
      <div class="section-contact--questionnaire--container--question--container--row">
      <p>Please review the information you selected and then hit submit.</p></div>
      ${inputContainer()}</div>`;

		return markup;
	};

	const rentalManagementSurvey = () => {
		let questionTitle = questionnaires[3].title;
		let questions = questionnaires[3].questions
			.map((question, i) => {
				return `
         <div class="section-contact--questionnaire--container--question--container--row">
         <label for="question-${i}" class="input-label">${question}</label>
         <input name="question-${i}" type="checkbox" class="input-box"></input>
         </div>`;
			})
			.join(' ');
		let markup = ` <div class="section-contact--questionnaire--container--question--container">
    <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
     ${questions} <div class="section-contact--questionnaire--container--question--container--row">
    <p>Please review the information you selected and then hit submit.</p></div>
    ${inputContainer()}</div>`;

		return markup;
	};

	const commercialTransactionSurvey = () => {
		let questionTitle = questionnaires[4].title;
		let questions = questionnaires[4].questions
			.map((question, i) => {
				return `
         <div class="section-contact--questionnaire--container--question--container--row">
         <label for="question-${i}" class="input-label">${question}</label>
         <input name="question-${i}" type="checkbox" class="input-box"></input>
         </div>`;
			})
			.join(' ');
		let subQuestion = questionnaires[4].subQuestion;
		let subQuestions = questionnaires[4].subQuestions
			.map((subQ, i) => {
				return `
        <div class="section-contact--questionnaire--container--question--container--row--sub-row">
        <label for="subquestion-${i}" class="sub-label-level-one hidden">${subQ}</label>
        <input name="subquestion-${i}" type="checkbox" class="sub-input-level-one hidden" ></input>
        </div>`;
			})
			.join(' ');
		let subSubQuestions = questionnaires[4].subSubQuestions
			.map((subQ, i) => {
				return `
        <div class="section-contact--questionnaire--container--question--container--row--sub-row--deep">
        <label for="subquestion-${i}" class="sub-sub-label-level-two hidden">${subQ}</label>
        <input name="subquestion-${i}" type="checkbox" class="sub-sub-input-level-two hidden"></input>
        </div>`;
			})
			.join(' ');
		let markup = `<div class="section-contact--questionnaire--container--question--container">
        <div class="section-contact--questionnaire--container--question--container--row"><h4>${questionTitle}</h4></div>
         ${questions}
        <div class="section-contact--questionnaire--container--question--container--row"><label for="subquestion">${subQuestion}</label>
        <input name="subquestion" type="checkbox" id="sub-q-1"></input></div>
        ${subQuestions} 
        <div class="section-contact--questionnaire--container--question--container--row">
        <p>Please review the information you selected and then hit submit.</p></div>
        ${inputContainer()}</div>`;

		return markup;
	};

	return [
		estateAdminSuveyMarkup,
		estatePlanningSurveyMarkup,
		renderRealEstateSurvey,
		rentalManagementSurvey,
		commercialTransactionSurvey,
	];
};
