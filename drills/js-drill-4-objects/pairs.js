const keyFile = require('./keys')
const valueFile = require('./values')


function pairs(obj) {
    let returningArray = []
    if (!obj || Array.isArray(obj)) {
        return returningArray
    }

    let keysArray = keyFile.keys(obj)
    let valueArray = valueFile.values(obj)

    for (let index = 0; index < keysArray.length; index++) {
        let tempArray = []
        tempArray.push(keysArray[index])
        tempArray.push(valueArray[index])
        returningArray.push(tempArray)
    }
    return returningArray
}

module.exports = { pairs }