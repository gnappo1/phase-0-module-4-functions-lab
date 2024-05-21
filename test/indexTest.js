const { assert, js } = require('./helpers.js')

describe('index.js', function () {
    describe('fibChecker', function () {
        it('returns null when no argument is provided', function () {
            assert.equal(fibChecker(), null)
        })

        it('calculates the correct Fibonacci number for a given position', function () {
            assert.equal(fibChecker(0), 0)
            assert.equal(fibChecker(1), 1)
            assert.equal(fibChecker(2), 1)
            assert.equal(fibChecker(3), 2)
            assert.equal(fibChecker(4), 3)
            assert.equal(fibChecker(5), 5)
            assert.equal(fibChecker(6), 8)
            assert.equal(fibChecker(7), 13)
        })
    })

    describe('printFib', function () {
        it('prints the correct sentence with the name and position', function () {
            const name = "Matteo";
            const n = 5;
            const expectedOutput = 'Hello Matteo, the number in position 5 in the Fibonacci sequence is 5';
            assert.equal(printFib(name, n), expectedOutput);
        })
    })
})

