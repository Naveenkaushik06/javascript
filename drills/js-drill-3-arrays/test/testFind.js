let elements = require("../items.js");
let findFunction = require("../find.js");
const callBack = (item) => item >= 4
const results = findFunction(elements, callBack);
console.log(results);