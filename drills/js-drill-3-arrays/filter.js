const filterFunction = function(array, callBack) {
    if (Array.isArray(array) && callBack !== undefined) {
        let output = [];
        for (let index = 0; index < array.length; index++) {
            if (callBack(array[index], index, array) == true) {
                output.push(array[index]);
            }
        }
        return output;
    } else {
        return [];
    }
}
module.exports = filterFunction;