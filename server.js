const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();

//Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

//Add routes
// app.use(routes);

//Connect to Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
	{
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

//Start API server
app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});