const express = require("express");
const router = express.Router();
const { addLocation, getLocation, getMembersNear, getPositionsUser } = require("../controllers/location");

const { check } = require("express-validator");
router.post("/addLocation/:_id", addLocation);
router.get("/some", (req, res) => {
	return res.send("Hahahahah");
});
router.get("/getLocation/:_id", getLocation);
router.get("/getMembersNear/:_id", getMembersNear);
router.get("/getPositionsUser/:_id", getPositionsUser);

module.exports = router;
