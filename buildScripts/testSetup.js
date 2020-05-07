// This file contains setup instructions for tests

// Register babel to transpile all code files before Mocha tests run
require("babel-register")();

// Disable webpack import of CSS as Mocha doesn't understand this Webpack feature
require.extensions[".css"] = function () {};
