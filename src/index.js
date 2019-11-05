import { generateQuestionnaire } from './javascripts/contentControl.js';
import { scrollToSection } from './javascripts/menu';

const genSurvey = generateQuestionnaire();
const renderSurvey = genSurvey[0];

const loadFile = () => {
	renderSurvey();

	scrollToSection();
};

(() => {
	if (document.readyState == 'loading') {
		console.log(loadFile());
		document.addEventListener('DOMContentLoaded', loadFile);
	} else {
		console.log(loadFile());
		loadFile();
	}
})();
