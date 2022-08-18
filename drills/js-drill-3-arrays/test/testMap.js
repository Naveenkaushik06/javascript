let elements = require("../items.js");
let mapFunction = require("../map.js");
const callBack = (item, index, array) => item * 2;
const results = mapFunction(elements, callBack);
console.log(results);