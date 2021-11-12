describe('Should cover cycles file', function () {
    describe('1 : Find the sum of even numbers and their number in the range from 1 to 99', function () {
        it('should return sum of even numbers and their number in the range', function () {
            // console.log('dfvdfvdfvdfv', quantityAndNumber())
            expect(quantityAndNumber()).to.eql('Сумма чисел - 2450, количество чисел - 50');;
        });
    });

    describe('2 : Is it a prime number to check', function () {
        it('should return composite number', function () {
            expect(simpleNum(1)).to.be.equal('Число 1 - составное');
        });
        it('should return composite number', function () {
            expect(simpleNum(6)).to.be.equal('Число 6 - составное');
        });
        it('should return prime number', function () {
            expect(simpleNum(7)).to.be.equal('Число 7 - простое');
        });
    });

    describe('3 : Find the root of a natural number up to an integer', function () {
        it('should return the root of a natural number', function () {
            expect(naturalNumber(25)).to.be.equal(5);
        });
    });

    describe('3 : Find the root of a natural number up to an integer(binary)', function () {
        it('should return the root of a natural number(binary)', function () {
            expect(binarySearch(25)).to.be.equal(6);
        });
    });

    describe('4 : Calculate the factorial of the number n', function () {
        it('should return the factorial of the number n', function () {
            expect(factorial(3)).to.be.equal(6);
        });
    });

    describe('5 : Calculate the sum of the digits of a given number', function () {
        it('should return the sum of the digits of a given number', function () {
            expect(getNumberSum(12354)).to.be.equal(15);
        });
    });

    describe('6 : Print a number that is a mirror image of a sequence of digits of a given number', function () {
        it('should return mirroring the number', function () {
            expect(getNumberReverse(123)).to.be.equal(321);
        });
    });
});