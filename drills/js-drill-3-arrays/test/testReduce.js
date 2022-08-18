let elements = require("../items.js");
let reduceFunction = require("../reduce.js");

let callBack = (accumulater, current, index, elements) => {
    accumulater += current;
    return accumulater;
}

const intialValueOfAccumulater = 0;

const results = reduceFunction(elements, callBack, intialValueOfAccumulater);
console.log(results);