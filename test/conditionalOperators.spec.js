describe('Should cover conditionalOperators file', function () {

    it('Task 1 : if a is even count a * b, otherwise a + b', function () {
        expect(getNumber(20, 10)).to.be.equal(200);
        expect(getNumber(15, 10)).to.be.equal(25);
    });

    it('Task 1(ternar) : if a is even count a * b, otherwise a + b ', function () {
        expect(getNumberTernar(20, 10)).to.be.equal(200);
        expect(getNumberTernar(15, 10)).to.be.equal(25);
    });

    it('Task 2 : determine which quarter the point with coordinates belongs to (х,у)', function () {
        expect(getCoordinate(5, 5)).to.be.equal('1 четверть')
        expect(getCoordinate(-5, 5)).to.be.equal('2 четверть')
        expect(getCoordinate(-5, -5)).to.be.equal('3 четверть')
        expect(getCoordinate(5, -5)).to.be.equal('4 четверть')
        expect(getCoordinate(0, 5)).to.be.equal('Точка лежит на оси')
    })

    it('Task 3 : should return the sums of only positives of three numbers ', function () {
        expect(positiveNum(-7, -2, -1)).to.be.equal(0)
        expect(positiveNum(-7, -2, 1)).to.be.equal(1)
        expect(positiveNum(-7, 2, -1)).to.be.equal(2)
        expect(positiveNum(7, -2, -1)).to.be.equal(7)
        expect(positiveNum(-7, 2, 1)).to.be.equal(3)
        expect(positiveNum(7, -2, 1)).to.be.equal(8)
        expect(positiveNum(7, 2, -1)).to.be.equal(9)
        expect(positiveNum(7, 2, 1)).to.be.equal(10)
    })

    it('Task 4 : should calculate the expression (max (a * b * c, a + b + c)) + 3', function () {
        expect(maxExpression(5, 4, 3)).to.be.equal(63);
        expect(maxExpression(1, 1, 1)).to.be.equal(6);
    });

    it('Task 5 : should return a program for determining a students grade by his rating', function () {
        expect(getGradeWithSwitch(5)).to.equal('F');
        expect(getGradeWithSwitch(23)).to.equal('E');
        expect(getGradeWithSwitch(45)).to.equal('D');
        expect(getGradeWithSwitch(60)).to.equal('C');
        expect(getGradeWithSwitch(76)).to.equal('B');
        expect(getGradeWithSwitch(95)).to.equal('A');
        expect(getGradeWithSwitch(115)).to.equal('Число вне диапозона');

    });
});

