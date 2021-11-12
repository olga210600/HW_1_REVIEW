describe('Should cover function file', function () {
    describe('1 : Get the string name of the day of the week by day number.', function () {
        it('should return Monday', function () {
            expect(getWeekName(1)).to.be.eql('Понедельник');
        });
        it('should return Tuesday', function () {
            expect(getWeekName(2)).to.be.eql('Вторник');
        });
        it('should return Wednesday', function () {
            expect(getWeekName(3)).to.be.eql('Среда');
        });
        it('should return Thursday', function () {
            expect(getWeekName(4)).to.be.eql('Четверг');
        });
        it('should return Friday', function () {
            expect(getWeekName(5)).to.be.eql('Пятница');
        });
        it('should return Saturday', function () {
            expect(getWeekName(6)).to.be.eql('Суббота');
        });
        it('should return Sunday', function () {
            expect(getWeekName(7)).to.be.eql('Воскресенье');
        });
        it('should return Wrong day of the week', function () {
            expect(getWeekName(88)).to.be.equal('Неверный день недели');
        });
    });

    describe('2 : Find the distance between two points in 2D cartesian space', function () {
        it('should return distance between two points', function () {
            expect(getDistanceBetweenPoints(1, 5, 8, 8)).to.eql('Расстояние между двумя точками: 8');
        });
    });

    // describe('Three task : Enter the number (0-999), we get a line with the words of the number', function () {
    //     it('should return line with the words of the number', function () {
    //         expect(convert_thousands(1000)).to.be.equel('one thousand');
    //     });
    // });

});