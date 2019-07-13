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
      res.redirect("/#contact");
    });
  } catch (error) {
    console.log(error);
    req.flash(
      "error",
      "Something went wrong with the request, please try again."
    );
    res.redirect("/#contact");
  }
});

module.exports = router;