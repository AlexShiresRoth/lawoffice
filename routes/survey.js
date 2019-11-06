const express = require('express');
const cors = require('cors');
const router = express.Router();
const mailgun = require('mailgun-js');
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

router.use(cors());

router.post('/', async (req, res) => {
	const { text, name, email } = req.query;
	//need to return the value of the question and which question
	console.log(name, email);
	const data = {
		from: name,
		to: 'alexshiresroth@alexshiresroth.com',
		subject: 'Survey Form Information',
		text: `
    ${text}

    <p>submitted by:<h3>${email}</h3></p>`,
	};

	try {
		await mg.messages().send(data, (error, body) => {
			console.log(body);
			req.flash('success', 'The questionnaire has been submitted, thank you.');
			res.redirect('/contact#contact');
		});
	} catch (error) {
		console.log(error);
		req.flash('error', 'Something went wrong with the request, please try again.');
		res.redirect('/contact#contact');
	}
});

module.exports = router;
