const file = require('../mapObject')

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

console.log(file.mapObject(testObject, file.modifyingKeyValue))