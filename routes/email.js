//require('dotenv').config();
const express = require("express");
const router = express.Router();
const mailgun = require("mailgun-js");
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({ apiKey: process.env.API_KEY, domain: DOMAIN });

// POST ROUTES FOR MAILGUN:
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    from: email,
    name,
    to: "bruce@urmyattorney.com",
    subject: subject,
    text: message
  };

  try {
    await mg.messages().send(data, (error, body) => {
      console.log(body);
      req.flash("success", "Email has been sent!");
      res.redirect("/contact#contact");
    });
  } catch (error) {
    console.log(error);
    req.flash(
      "error",
      "Something went wrong with the request, please try again."
    );
    res.redirect("/contact#contact");
  }
});

router.post("/survey", async (req, res) => {
  const { question, name, email } = req.body;
  //need to return the value of the question and which question
  console.log(question.map(q => q.value));
  const data = {
    from: email,
    name,
    to: "alexshiresroth@alexshiresroth.com",
    subject: "Survey Form Information",
    text: `${question.map(q => q.value)}`
  };

  try {
    await mg.messages().send(data, (error, body) => {
      console.log(body);
      req.flash("success", "The questionnaire has been submitted, thank you.");
      res.redirect("/contact#contact");
    });
  } catch (error) {
    console.log(error);
    req.flash(
      "error",
      "Something went wrong with the request, please try again."
    );
    res.redirect("/contact#contact");
  }
});

module.exports = router;
