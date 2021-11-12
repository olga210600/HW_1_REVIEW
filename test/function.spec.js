describe('Should cover function file', function () {
    it('Task 1 : should get the string name of the day of the week by day number', function () {
        expect(getWeekName(1)).to.be.eql('Понедельник');
        expect(getWeekName(2)).to.be.eql('Вторник');
        expect(getWeekName(3)).to.be.eql('Среда');
        expect(getWeekName(4)).to.be.eql('Четверг');
        expect(getWeekName(5)).to.be.eql('Пятница');
        expect(getWeekName(6)).to.be.eql('Суббота');
        expect(getWeekName(7)).to.be.eql('Воскресенье');
        expect(getWeekName(88)).to.be.equal('Неверный день недели');
    });

    it('Task 2 : should find the distance between two points in 2D cartesian space', function () {
        expect(getDistanceBetweenPoints(1, 5, 8, 8)).to.eql('Расстояние между двумя точками: 8');
    });

    // describe('Three task : Enter the number (0-999), we get a line with the words of the number', function () {
    //     it('should return line with the words of the number', function () {
    //         expect(convert_thousands(1000)).to.be.equel('one thousand');
    //     });
    // });

});