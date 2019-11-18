import { Selectors } from './Selectors.js';
import { surveyMarkup, questionnaires } from './Content';
import { checkInput } from './SurveyControl';

//generate a questionnaire for every topic
export const generateQuestionnaire = () => {
	const getMarkup = surveyMarkup();

	const renderMarkup = markup => (Selectors.surveyForm ? markup : null);

	const initialSurvey = e => {
		let markup = getMarkup[0];
		Selectors.surveyForm.innerHTML = renderMarkup(markup());
		checkInput();
		Selectors.surveyBtns[0].classList.add('active--button');
	};

	//toggle between different surveys pertaining to which button is selected
	const changeSurvey = () => {
		Selectors.surveyBtns.forEach(btn => {
			btn.addEventListener('click', function(e) {
				e.stopPropagation();
				removeActiveClass();
				const btnText = this.textContent.toLowerCase().trim();
				let markup = getMarkup[0];
				switch (true) {
					case btnText === questionnaires[0].title.toLowerCase().trim():
						markup = getMarkup[0];
						Selectors.surveyForm.classList.contains('hidden')
							? Selectors.surveyForm.classList.remove('hidden')
							: null;
						Selectors.surveyForm.innerHTML = renderMarkup(markup());
						checkInput();
						this.classList.add('active--button');
						break;
					case btnText === questionnaires[1].title.toLowerCase().trim():
						markup = getMarkup[1];
						Selectors.surveyForm.classList.contains('hidden')
							? Selectors.surveyForm.classList.remove('hidden')
							: null;
						Selectors.surveyForm.innerHTML = renderMarkup(markup());
						checkInput();
						this.classList.add('active--button');
						break;
					case btnText === questionnaires[2].title.toLowerCase().trim():
						markup = getMarkup[2];
						Selectors.surveyForm.classList.contains('hidden')
							? Selectors.surveyForm.classList.remove('hidden')
							: null;
						Selectors.surveyForm.innerHTML = renderMarkup(markup());
						checkInput();
						this.classList.add('active--button');
						break;
					case btnText === questionnaires[3].title.toLowerCase().trim():
						markup = getMarkup[3];
						Selectors.surveyForm.classList.contains('hidden')
							? Selectors.surveyForm.classList.remove('hidden')
							: null;
						Selectors.surveyForm.innerHTML = renderMarkup(markup());
						checkInput();
						this.classList.add('active--button');
						break;
					case btnText === questionnaires[4].title.toLowerCase().trim():
						markup = getMarkup[4];
						Selectors.surveyForm.classList.contains('hidden')
							? Selectors.surveyForm.classList.remove('hidden')
							: null;
						Selectors.surveyForm.innerHTML = renderMarkup(markup());
						checkInput();
						this.classList.add('active--button');
						break;
					default:
						return null;
				}
			});
		});
	};

	//remove active class on services buttons if one exists on a click
	const removeActiveClass = () => {
		const active = document.getElementsByClassName('active--button');
		if (active.length > 0) {
			active[0].className = active[0].className.replace(' active--button', '');
		}
	};

	return [changeSurvey, initialSurvey];
};
