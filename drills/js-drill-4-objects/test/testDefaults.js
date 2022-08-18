const defaultsFile = require('../defaults')

let iceCream = { flavor: "chocolate" };
let defaulter = { flavor: "chocolate", sprinkles: "dates" }

console.log(defaultsFile.defaults(iceCream, defaulter))