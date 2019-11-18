import { generateQuestionnaire } from './javascripts/contentControl.js';
import { scrollToSection } from './javascripts/menu';

const genSurvey = generateQuestionnaire();
const renderSurvey = genSurvey[0];
const renderInitSurvey = genSurvey[1];

const loadFile = e => {
	renderInitSurvey(e);

	renderSurvey();

	scrollToSection();
};

(() => {
	if (document.readyState == 'loading') {
		document.addEventListener('DOMContentLoaded', e => loadFile(e));
	} else {
		loadFile();
	}
})();
