const findFunction = function(array, callBack) {
    if (Array.isArray(array)) {
        let output = [];
        for (let index = 0; index < array.length; index++) {
            if (callBack(array[index])) {
                output.push(array[index]);
            }
        }
        return output;
    } else {
        return [];
    }
}
module.exports = findFunction;