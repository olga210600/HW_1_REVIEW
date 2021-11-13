describe('Should cover arrays file', function () {
    it('Task 1: should return min element of an array', function () {
        expect(getMinNumber([8, 5, 4, 88])).to.be.equal(4);
    });

    it('Task 2 : should return max element of an array ', function () {
        expect(getMaxNumber([8, 5, 4, 88])).to.be.equal(88);
    });

    it('Task 3 :should return min index element of an array', function () {
        expect(minElementIndexOfArray([8, 5, 4, -88])).to.be.equal('Индекс элемента - 3');
    });

    it('Task 4 : should return max index element of an array', function () {
        expect(maxElementIndexOfArray([8, 5, 4, -88, 85])).to.be.equal('Индекс максимального элемента - 4');
    });

    it('Task 5 : should return sum of the elements with odd indices', function () {
        expect(getSumElements([8, 5, 4, -88, 85])).to.be.equal('Сумма элементов - -83');
    });

    it('Task 6 : should return reverse an array', function () {
        const reversed = arrayReverse([1, 2, 3])
        expect(`${reversed}`).to.be.equal('3,2,1');
    });

    it('Task 7 : should return number of odd elements in an array', function () {
        expect(sumOddNumbers([1, 3, 5, 2, 8])).to.be.equal(3);

    });

    it('Task 8 : should return swap the first and second half of the array', function () {
        expect(changePlaceOfArray([1, 2, 3, 4])).to.eql([3, 4, 1, 2]);

    });

    it('Task 9: should return sort the array select, insert, bubble', function () {
        expect(selectionSort([2, 5, 3, 1])).to.eql([1, 2, 3, 5]);
        expect(insertSort([2, 5, 3, 1])).to.eql([1, 2, 3, 5]);
        expect(bubbleSort([2, 5, 3, 1])).to.eql([1, 2, 3, 5]);
    });
});



