const file = require('./keys')

function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    let keyList = file.keys(obj)
    let returningValue = []
    if (!obj || Array.isArray(obj)) {
        return returningValue
    }
    for (let x of keyList) {
        returningValue.push(obj[x])
    }
    return returningValue
}

module.exports = { values }