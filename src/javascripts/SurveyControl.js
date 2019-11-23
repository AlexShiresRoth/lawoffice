import axios from 'axios';
import { Selectors } from './Selectors';
import Modal from './Modal';

//toggle sub level checkboxes depending on if the main question was selected
//there should only be at most 4 levels of questions
export const checkInput = () => {
	const subQuestionLvlOneCheck = document.querySelector('#sub-q-1');
	const subQuestionLvlTwoCheck = document.querySelector('#sub-q-2');
	const subQuestionLvlThreeCheck = document.querySelector('#sub-q-3');
	const subQuestionLvlFourCheck = document.querySelector('#sub-q-4');
	const subInputsLvlOne = [...document.querySelectorAll('.sub-input-level-one')];
	const subLabelsLvlOne = [...document.querySelectorAll('.sub-label-level-one')];
	const subInputsLvlTwo = [...document.querySelectorAll('.sub-input-level-two')];
	const subLabelsLvlTwo = [...document.querySelectorAll('.sub-label-level-two')];
	const subInputsLvlThree = [...document.querySelectorAll('.sub-input-level-three')];
	const subLabelsLvlThree = [...document.querySelectorAll('.sub-label-level-three')];
	const subInputsLvlFour = [...document.querySelectorAll('.sub-input-level-four')];
	const subLabelsLvlFour = [...document.querySelectorAll('.sub-label-level-four')];

	subQuestionLvlOneCheck
		? subQuestionLvlOneCheck.addEventListener('click', () => {
				subQuestionLvlOneCheck.checked
					? (subLabelsLvlOne.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlOne.map(input => {
							input.classList.toggle('hidden');
					  }))
					: !subQuestionLvlOneCheck.checked
					? (subLabelsLvlOne.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlOne.map(input => {
							input.classList.toggle('hidden');
					  }))
					: null;
		  })
		: null;

	subQuestionLvlTwoCheck
		? subQuestionLvlTwoCheck.addEventListener('click', () => {
				subQuestionLvlTwoCheck.checked
					? (subLabelsLvlTwo.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlTwo.map(input => {
							input.classList.toggle('hidden');
					  }))
					: !subQuestionLvlTwoCheck.checked
					? (subLabelsLvlTwo.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlTwo.map(input => {
							input.classList.toggle('hidden');
					  }))
					: null;
		  })
		: null;

	subQuestionLvlThreeCheck
		? subQuestionLvlThreeCheck.addEventListener('click', () => {
				subQuestionLvlThreeCheck.checked
					? (subLabelsLvlThree.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlThree.map(input => {
							input.classList.toggle('hidden');
					  }))
					: !subQuestionLvlThreeCheck.checked
					? (subLabelsLvlThree.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlThree.map(input => {
							input.classList.toggle('hidden');
					  }))
					: null;
		  })
		: null;

	subQuestionLvlFourCheck
		? subQuestionLvlFourCheck.addEventListener('click', () => {
				subQuestionLvlFourCheck.checked
					? (subLabelsLvlFour.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlFour.map(input => {
							input.classList.toggle('hidden');
					  }))
					: !subQuestionLvlFourCheck.checked
					? (subLabelsLvlFour.map(label => {
							label.classList.toggle('hidden');
					  }),
					  subInputsLvlFour.map(input => {
							input.classList.toggle('hidden');
					  }))
					: null;
		  })
		: null;
};

export const formSubmit = () => {
	const formCheckBoxes = [...document.querySelectorAll("input[type='checkbox']")];
	const formLabels = [...document.querySelectorAll('label')];
	const name = document.querySelector('#survey-email');
	const email = document.querySelector('#survey-name');

	const checkInputs = () => {
		//check to make sure survey has rendered to dom

		return Selectors.surveyForm
			? //check if the checkboxes and labels have rendered
			  formCheckBoxes && formLabels
				? //check if checkbox amount equals label amount
				  formCheckBoxes.map((check, i) => {
						const emailMarkup = ` ${formLabels[i].textContent} ${check.checked ? 'yes' : 'no'}`;
						return emailMarkup;
				  })
				: ''
			: null;
	};

	//email template form
	const createEmailSubmit = () => {
		if (checkInputs().length > 0) {
			const emailTemp = `${checkInputs()}`;
			return emailTemp;
		}
	};

	//send the post request to the mailgun api in the router
	const postSurvey = async () => {
		const Email = email.value;
		const Name = name.value;

		await axios({
			method: 'post',
			url: `http://localhost:3000/api/send-survey?&email=${Email}&name=${Name}&text=${createEmailSubmit()}`,
			data: {
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			},
		})
			.then(res => {
				const createModal = new Modal('succes', res.data);
				createModal.createModal();

				//need to create a modal for email response
				//clear input fields
			})
			.catch(error => {
				const createModal = new Modal('error', error.response);
				createModal.createModal();
				console.error(error.response);
			});
	};

	return [checkInputs, createEmailSubmit, postSurvey];
};

//if survey form exists in dom
if (Selectors.surveyForm) {
	//get all the info from  checkboxes/labels and submit the survey info
	Selectors.surveyForm.addEventListener('submit', e => {
		const submitForm = formSubmit();
		const submitSurvey = submitForm[2];
		e.preventDefault();
		submitSurvey();
	});
}
