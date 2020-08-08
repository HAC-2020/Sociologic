require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const locRoutes = require("./routes/location");
// DataBase Connection
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log(`Connected`);
	})
	.catch((err) => {
		console.log(err);
	});

// Midlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api", authRoutes);
app.use("/loco", locRoutes);
//Port
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
	console.log(`Hi Dudes at ${port}`);
});
// hey should i show it to you now???
