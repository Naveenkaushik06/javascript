function defaults(obj, defaultProps) {

    if (!obj || !defaultProps || Array.isArray(obj) || Array.isArray(defaultProps)) {
        return {};
    }

    let returningObject = defaultProps

    for (let iterator in obj) {
        returningObject[iterator] = obj[iterator]
    }
    return returningObject
}

module.exports = { defaults }