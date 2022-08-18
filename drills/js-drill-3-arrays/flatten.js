const flattenFunction = function(array, depth) {
    if (Array.isArray(array)) {
        if (depth === undefined) {
            depth = 1;
        }
        let output = [];
        for (let index = 0; index < array.length; index++) {
            if (Array.isArray(array[index]) && depth > 0) {
                output = output.concat(flattenFunction(array[index], depth - 1));
            } else if (array[index] === undefined) {
                continue;
            } else {
                output.push(array[index]);
            }
        }
        return output;
    } else {
        return [];
    }
}
module.exports = flattenFunction;