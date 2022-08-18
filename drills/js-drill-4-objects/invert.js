function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    let returningObject = {}
    if (!obj || Array.isArray(obj)) {
        return {};
    }
    for (let iterator in obj) {
        let tempValues = obj[iterator]
        if (typeof tempValues === 'object') {
            tempValues = JSON.stringify(tempValues)
        };
        returningObject[tempValues] = iterator;
    }
    return returningObject

}

module.exports = { invert }