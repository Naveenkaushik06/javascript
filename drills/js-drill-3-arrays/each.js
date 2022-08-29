const eachFunction = function(array, callBack) {
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            callBack(array[index]);
        }
    } else {
    }
}
module.exports = eachFunction;