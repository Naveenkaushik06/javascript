let elements = require("../items.js");
let eachFunction = require("../each.js");
const callBack = (item) => console.log(item + " Hello");

const results = eachFunction(elements, callBack);
console.log(results);