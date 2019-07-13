require("dotenv").config();
const express = require("express");
const router = express.Router();
const helper = require('../helper/helper');

router.get("/", helper.getServicesInfo);

module.exports = router;
