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

	const data = {
		from: name,
		to: 'alex@alexshiresroth.com',
		subject: 'Survey Form Information',
		text: `
    ${text}

    <p>submitted by:<h3>${email}</h3></p>`,
	};

	try {
		await mg.messages().send(data, (error, body) => {
			console.log(body);
			error
				? res.status(500).json({ msg: 'Internal Server Error, Please Resubmit Survey' })
				: res.status(200).json({ msg: 'Survey Submitted, someone will be in touch soon.' });
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Internal Server Error, Please Resubmit Survey' });
	}
});

module.exports = router;
