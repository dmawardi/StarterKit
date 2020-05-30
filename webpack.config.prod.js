import path from "path";
import webpack from "webpack";

export default {
	// Enable debug info
	debug: true,

	devtool: "source-map",
	// Display info
	noInfo: false,
	// Good place to inject middleware for hot reloading
	entry: [path.resolve(__dirname, "src/index")],
	// Web, Node or Electron
	target: "web",
	// This doesn't generate physical files. Served from memory
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "bundle.js",
	},
	// Can add Webpack plugins here
	plugins: [
		// Eliminate duplicate packages when generating bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin(),
	],
	module: {
		// Add all types of files here and they will be bundled together
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
			{ test: /\.css$/, loaders: ["style", "css"] },
		],
	},
};
