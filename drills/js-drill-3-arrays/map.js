const mapFunction = function(array, callBack) {
    if (Array.isArray(array)) {
        let output = [];
        for (let index = 0; index < array.length; index++) {
            if (array[index] === undefined) {
                continue;
            } else {
                output.push(callBack(array[index], index, array));
            }
        }
        return output;
    } else {
        return [];
    }
}
module.exports = mapFunction;