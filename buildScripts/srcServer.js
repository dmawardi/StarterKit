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

app.get("/users", function (req, res) {
	res.json([
		{ id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
		{
			id: 2,
			firstName: "Tammy",
			lastName: "Norton",
			email: "tnorton@yahoo.com",
		},
		{
			id: 3,
			firstName: "Tina",
			lastName: "Lee",
			email: "lee.tina@hotmail.com",
		},
	]);
});

// Run Server and listen to port
app.listen(port, function (err) {
	if (err) {
		console.log(err); // eslint-disable-line no-console
	} else {
		open("http://localhost:" + port);
	}
});
