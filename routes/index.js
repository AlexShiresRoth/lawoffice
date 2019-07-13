//require("dotenv").config();
const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");

router.get("/", helper.getServicesInfo);
router.get("/about", (req, res) =>
  res.render("about", {
    title: "About Rothenberg Law Offices LLC"
  })
);
router.get("/contact", (req, res) =>
  res.render("contact", {
    title: "Contact"
  })
);
router.get("/bankruptcy", (req, res) =>
  res.render("bankruptcy", {
    title: "Bankruptcy"
  })
);
router.get("/business", (req, res) =>
  res.render("business", {
    title: "Business Law"
  })
);
router.get("/estate", (req, res) => {
  res.render("estate", {
    title: "Estate Planning"
  });
});
router.get("/willsandtrusts", (req, res) => {
  res.render("willsandtrusts", {
    title: "Wills and Trusts Law"
  });
});
router.get("/probate", (req, res) => {
  res.render("probate", {
    title: "Probate Law"
  });
});
module.exports = router;
