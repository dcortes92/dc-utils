var expect = require('chai').expect
var dc = require('./index.js')

describe('dc', function () {
    describe('isArray', function () {
        it('should return true if the argument passed is an array', function () {
            expect(dc.isArray(['a', 2, 'r'])).to.be.true;
        })
        it('should return false if the argument passed is not an array', function () {
            expect(dc.isArray(42)).to.be.false;
        })
    })
    
    describe('sort', function () {
        it('should return an array with the same length if the argument passed is an array', function () {
            var arr = [7, 5, 3, 10, 6, 1 ,8];
            expect(dc.sort(arr)).to.have.lengthOf(arr.length)
        })
        it('should return an empty array if the argument passed is not an array', function () {
            expect(dc.sort(42)).to.have.lengthOf(0)
        })
        it('should return an ordered array if the argument passed is an array', function () {
            var sorted = [1, 2, 3]
            var sortTest = dc.sort([3, 1, 2])
            expect(sortTest).to.satisfy(isArraySorted)
            function isArraySorted(arr) {
                return arr.some(function(element, index) {
                    return element === sorted[index]
                })
            }
        })
    })
    
    describe('by', function () {
        it('should return a comparison function that can be used to sort an array of objects', function () {
            var arr = [
                { first: 'daniel', last: 'cortes' },
                { first: 'tim', last: 'drake' },
                { first: 'bruce', last: 'wayne' },
                { first: 'kate', last: 'kane'}
            ]
            
            var sortedByFirst = [
                { first: 'bruce', last: 'wayne' },
                { first: 'daniel', last: 'cortes' },
                { first: 'kate', last: 'kane'},
                { first: 'tim', last: 'drake' }
            ]
            
            expect(arr.sort(dc.by('first'))).to.satisfy(isArraySorted)
            
            function isArraySorted(arr) {
                return arr.some(function(element, index) {
                    return element.first === sortedByFirst[index].first
                })
            }
        })
    })
})