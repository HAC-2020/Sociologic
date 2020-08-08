const express = require("express");
const router = express.Router();
const { addLocation, getLocation } = require("../controllers/location");

const { check } = require("express-validator");
router.post("/addLocation/:_id", addLocation);
router.get("/some", (req, res) => {
	return res.send("Hahahahah");
});
router.get("/getLocation/:_id", getLocation);

module.exports = router;
