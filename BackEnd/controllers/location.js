var redis = require("redis"),
	client = redis.createClient();
const { json } = require("body-parser");

var geo = require("georedis").initialize(client);

exports.addLocation = async (req, res) => {
	var lat = req.body.latitude;
	var long = req.body.longitude;
	var _id = req.params._id;
	var time = req.body.timestamp;
	var temp='';
	try {
		client.GEOADD(_id, long, lat, time,
			function(err, reply){
				if(err){
					return res.json({ msg: err });
				}else{
					console.log(reply);
					temp += "Added with timestamp"; 
					
				}
			});
		client.GEOADD("users", long, lat, _id,
			function(err, reply){
				if (err) {
					return res.json({ msg: err });
				} else {
					console.log("added location:", reply);
					temp+=" Geo Done";
					
				}
		});
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
};

exports.getLocation = (req, res) => {
	let _id = req.params._id;
	let temp;
	client.geopos("users", _id, function(err, num){
		if(err){
			return res.send("err");
		}else{
			return res.send(num);
		}
	});
};

exports.getMembersNear =(req, res)=>{	
	var _id = req.params._id;
	console.log(_id);
	client.georadiusbymember("users", _id, 1, "km",
		function(err, reply){
			if (err) {
				return res.json({ msg: err });
			} else {
				return res.send(reply);
			}
		}
	);
}

exports.getPositionsUser=(req, res)=>{
	var _id = req.params._id;
	client.zrange(_id, 0, -1,
		function(err, num){
			if (err|| !num) {
				return res.json({ msg: err });
			} else {
				console.log("added time stamp: ", num);
				return res.send(num);
			}
	});
}