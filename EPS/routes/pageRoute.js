const express = require("express");
const router = express.Router();
const pageController = require("../controller/pageController");

router.get("/", pageController.homePage);
router.get("/add", pageController.addEmployeePage);
router.get("/edit/:id", pageController.editEmployeePage);

module.exports = router;