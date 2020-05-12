// Import assertion library
import { expect } from "chai";
// Import JSDOM library for DOM testing
import jsdom from "jsdom";
// Node's File system
import fs from "fs";

// Describe the test being completed
describe("Our first test", () => {
	// Pass requirements
	it("Should pass", () => {
		// Expect value when provided value
		expect(true).to.equal(true);
	});
});

// Test to check the header on Index
describe("index.html", () => {
	// Using variable done to end test as jsdom is asynchronous
	it("should have h1 that says Users", (done) => {
		// Use read file sync to store the contents of our index.html file: index
		const index = fs.readFileSync("./src/index.html", "utf-8");

		// Run jsdom environment using the index file
		jsdom.env(index, function (err, window) {
			// window: represents window of browser
			// Extract all the h1 elements on the page and return the first element to store: h1
			const h1 = window.document.getElementsByTagName("h1")[0];
			// console.log("h1 is: " + h1);
			expect(h1.innerHTML).to.equal("Users");
			// Tells Mocha that the test is done, so it can run the expect
			done();
			window.close();
		});
	});
});
