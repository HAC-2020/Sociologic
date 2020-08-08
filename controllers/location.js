var redis = require("redis"),
	client = redis.createClient();
const { json } = require("body-parser");

var geo = require("georedis").initialize(client);

exports.addLocation = async (req, res) => {
	var lat = req.body.latitude;
	var long = req.body.longitude;
	var _id = req.params._id;
	console.log(`${lat}`);
	try {
		await geo.addLocation(_id, { latitude: lat, longitude: long }, function (
			err,
			reply
		) {
			console.log(`err=${err}`);
			console.log(`reply=${reply}`);

			if (err) {
				res.json({ msg: err });
			} else {
				console.log("added location:", reply);
				res.send("Done");
			}
		});
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

exports.getLocation = (req, res) => {
	let _id = req.params._id;
	geo.location(_id, function (err, location) {
		if (err || !location) {
			return res.send("err");
		} else return res.send(location);
	});
};
