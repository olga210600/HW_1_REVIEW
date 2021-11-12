describe('Should cover arrays file', function () {
    describe(' 1 : Find the minimum element of an array ', function () {
        it('should return min element', function () {
            expect(getMinNumber([8, 5, 4, 88])).to.be.equal(4);
        });
    });

    describe('2 : Find the maximum element of an array ', function () {
        it('should return max element', function () {
            expect(getMaxNumber([8, 5, 4, 88])).to.be.equal(88);
        });
    });

    describe('3 :Find the index of the minimum element of an array ', function () {
        it('should return min index', function () {
            expect(minElementIndexOfArray([8, 5, 4, -88])).to.be.equal('Индекс элемента - 3');
        });
    });

    describe('4 :Find the index of the maximum element of an array ', function () {
        it('should return max index', function () {
            expect(maxElementIndexOfArray([8, 5, 4, -88, 85])).to.be.equal('Индекс максимального элемента - 4');
        });
    });

    describe('5 :Calculate the sum of the elements of an array with odd indices ', function () {
        it('should return sum of the elements with odd indices', function () {
            expect(getSumElements([8, 5, 4, -88, 85])).to.be.equal('Сумма элементов - -83');
        });
    });

    describe('6 :Reverse an array (array in the opposite direction) ', function () {
        it('should return reverse an array', function () {
            const reversed = arrayReverse([1, 2, 3])
            expect(`${reversed}`).to.be.equal('3,2,1');
        });
    });

    describe('7 :Count the number of odd elements in an array) ', function () {
        it('should return number of odd elements in an array', function () {
            expect(sumOddNumbers([1, 3, 5, 2, 8])).to.be.equal(3);

        });
    });

    describe('8 :Swap the first and second half of the array) ', function () {
        it('should return Swap the first and second half of the array', function () {
            expect(changePlaceOfArray([1, 2, 3, 4])).to.eql([ 3, 4, 1, 2 ]);

        });
    });

    describe('9 :Sort the array select ', function () {
        it('should return sort the array select', function () {
            expect(selectionSort([2, 5, 3, 1])).to.eql([ 1,2,3,5 ]);

        });
    });

    describe('9 :Sort the array insert ', function () {
        it('should return sort the array insert', function () {
            expect(insertSort([2, 5, 3, 1])).to.eql([ 1,2,3,5 ]);

        });
    });

    describe('9 :Sort the array bubble ', function () {
        it('should return sort the array bubble', function () {
            expect(bubbleSort([2, 5, 3, 1])).to.eql([ 1,2,3,5 ]);

        });
    });
});