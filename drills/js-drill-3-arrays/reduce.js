const reduceFunction = function(array, callBack, intialValueOfAccumulater) {
    if (array === undefined) {
        return [];
    }
    let accumulater;
    if (Array.isArray(array)) {
        if (intialValueOfAccumulater === undefined) {
            intialValueOfAccumulater = array[0];
            accumulater = intialValueOfAccumulater;
            for (let index = 1; index < array.length; index++) {
                accumulater = callBack(accumulater, array[index], index, array);
            }
        } else {
            accumulater = intialValueOfAccumulater;
            for (let index = 0; index < array.length; index++) {
                accumulater = callBack(accumulater, array[index], index, array);
            }
        }
        return accumulater;
    } else {
        return [];
    }
}
module.exports = reduceFunction;