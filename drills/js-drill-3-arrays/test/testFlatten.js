let elements = require("../nestedArray.js");
let flattenFunction = require("../flatten.js");

const depth = 2;

const results = flattenFunction(elements, depth);
console.log(results);