let elements = require("../items.js");
let filterFunction = require("../filter.js");
const callBack = (item, index, array) => item >= 4;
const results = filterFunction(elements, callBack);
console.log(results);