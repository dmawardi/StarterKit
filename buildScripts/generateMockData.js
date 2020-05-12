/*
This script generates mock data for local development. 
This way you don't have to point to an actual API,
but you can enjoy realistic, but randomized data,
and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

// Generate a JSON of fake data based on Mock data schema
const json = JSON.stringify(jsf(schema));

// Write the data to a file (db)
fs.writeFile("./src/api/db.json", json, function (err) {
	// If error found,
	if (err) {
		// Log to console
		return console.log(chalk.red(err));
	} else {
		console.log(chalk.green("Mock data generated."));
	}
});
