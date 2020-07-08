const express = require("express");
const routes = require("./routes/index");
const mongodbsetup = require("./mongodbsetup");
const app = express();

var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	if (process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});

var db = mongoose.connection;

app.use(express.json());
app.use("/api/", routes);

app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.listen(8000, () => {
	console.log("Web Engineering backend listening on port 8000!");
});