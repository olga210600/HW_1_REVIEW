describe('Should cover cycles file', function () {
    it('Task 1 : should return sum of even numbers and their number in the range', function () {
        expect(quantityAndNumber()).to.eql('Сумма чисел - 2450, количество чисел - 50');
    });

    it('Task 2 : should check if a prime number', function () {
        expect(simpleNum(1)).to.be.equal('Число 1 - составное');
        expect(simpleNum(7)).to.be.equal('Число 7 - простое');
    });

    it('Task 3 : should find the root of a natural number up to an integer', function () {
        expect(naturalNumber(25)).to.be.equal(5);
        expect(binarySearch(25)).to.be.equal(6);
    });

    it(' Task 4 : should calculate the factorial of the number n', function () {
        expect(factorial(3)).to.be.equal(6);
    });

    it('Task 5 : should calculate the sum of the digits of a given number', function () {
        expect(getNumberSum(12354)).to.be.equal(15);
    });

    it('Task 6 : should print a number that is a mirror image of a sequence of digits of a given number', function () {
        expect(getNumberReverse(123)).to.be.equal(321);
    });
});