export const Selectors = {
	willsTrustsAndEstatesButton: document.querySelector('#wills'),
	bankruptcyButton: document.querySelector('#bankruptcy'),
	boxesTitle: document.querySelector('.box h6'),
	boxes: document.querySelectorAll('.box p'),
	sections: document.querySelectorAll('section'),
	mobileNav: document.querySelector('.mobile-nav'),
	navIcon: document.querySelector('.nav-icon-container'),
	navAppear: document.querySelector('.main-nav'),
	dropDown: document.querySelector('.main-nav__dropdown'),
	serviceUl: document.querySelector('.main-nav__dropdown--service-list'),
	surveyForm: document.querySelector('.section-contact--questionnaire--container'),
	surveyBtns: [...document.querySelectorAll('.section-contact--questionnaire--buttons--button')],
	surveyButton: document.querySelector('.survey--button'),
	anchors: [
		{
			aboutAnchor: document.querySelector('#nav--about'),
			servicesAnchor: document.querySelector('#nav--services'),
			contactAnchor: document.querySelector('#nav--contact'),
		},
	],
};

export const createSelectors = function() {
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

	return [
		subQuestionLvlOneCheck,
		subQuestionLvlTwoCheck,
		subQuestionLvlThreeCheck,
		subQuestionLvlFourCheck,
		subInputsLvlOne,
		subLabelsLvlOne,
		subInputsLvlTwo,
		subLabelsLvlTwo,
		subInputsLvlThree,
		subLabelsLvlThree,
		subInputsLvlFour,
		subLabelsLvlFour,
	];
};
