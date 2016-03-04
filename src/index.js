var uniqueRandomArray = require('unique-random-array');

module.exports = {
  isArray: isArray
}

function isArray (value) {
    return value && 
        typeof value === 'object' && 
        typeof value.length === 'number' && 
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'))
}