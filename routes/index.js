//require("dotenv").config();
const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");

router.get("/", (req, res) => res.render("home", helper.getServicesInfo));
router.get("/about", (req, res) => res.render("about", helper.getServicesInfo));
router.get("/contact", (req, res) =>
  res.render("contact", helper.getServicesInfo)
);
router.get("/bankruptcy", (req, res) =>
  res.render("bankruptcy", helper.getServicesInfo)
);
router.get("/estateadmin", (req, res) =>
  res.render("estateadmin", helper.getServicesInfo)
);
router.get("/estate", (req, res) => {
  res.render("estate", helper.getServicesInfo);
});
router.get("/realestate", (req, res) => {
  res.render("realestate", helper.getServicesInfo);
});
router.get("/rental", (req, res) => {
  res.render("rental", helper.getServicesInfo);
});
router.get("/business", (req, res) => {
  res.render("business", helper.getServicesInfo);
});
module.exports = router;
