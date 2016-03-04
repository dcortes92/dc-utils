var uniqueRandomArray = require('unique-random-array');

module.exports = {
  isArray: isArray,
  sortArray: sortArray
}

function isArray (value) {
    return value && 
        typeof value === 'object' && 
        typeof value.length === 'number' && 
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'))
}

function sortArray (arr) {
    return arr.sort(sortArrHandler)
}

function sortArrHandler (a, b) {
    if (a === b) {
        return 0
    }
    if (typeof a === typeof b) {
        a = typeof a === 'string'? a.toLowerCase() : a
        b = typeof b === 'string'? b.toLowerCase() : b
        return a < b ? -1 : 1
    }
    return typeof a < typeof b ? -1 : 1 
}