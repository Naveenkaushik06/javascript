function mapObject(obj, cb) {
    let returningObject = {}
    if (!obj || Array.isArray(obj) || !cb) {
        return returningObject
    }
    for (let key in obj) {
        returningObject[key] = cb(obj[key], key);
    }
    return returningObject
}

const modifyingKeyValue = (value, key) => {
    if (!key || !value) {
        return;
    }
    let returningValue = ("My " + key + " is " + value)
    return returningValue;
}

module.exports = { mapObject, modifyingKeyValue }