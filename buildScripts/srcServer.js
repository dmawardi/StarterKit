import express from "express";
import path from "path";
import open from "open";
// Import webpack and config file
import webpack from "webpack";
import config from "../webpack.config.dev";

// Express setup
const port = 3000;
const app = express();

// Webpack
const compiler = webpack(config);
// Integrate webpack into Express
app.use(
	require("webpack-dev-middleware")(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
	})
);

// Routes
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "../src/index.html"));
});

// Run Server and listen to port
app.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		open("http://localhost:" + port);
	}
});
