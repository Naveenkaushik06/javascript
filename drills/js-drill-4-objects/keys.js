function keys(obj) {
    let returingList = [];
    if (!obj || Array.isArray(obj)) {
        return returingList
    }
    for (let x in obj) {
        returingList.push(x)
    }
    return returingList
}

module.exports = { keys }