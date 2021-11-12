describe('Should cover conditionalOperators file', function () {
    describe('1 : If a is even count a * b, otherwise a + b ', function () {
        it('should return mult for two numders', function () {
            expect(getNumber(20, 10)).to.be.equal(200);
        });
        it('should return sum for two numders', function () {
            expect(getNumber(15, 10)).to.be.equal(25);
        });
    });

    describe('1.ternar : If a is even count a * b, otherwise a + b ', function () {
        it('should return mult for two numders', function () {
            expect(getNumberTernar(20, 10)).to.be.equal(200);
        });
        it('should return sum for two numders', function () {
            expect(getNumberTernar(15, 10)).to.be.equal(25);
        });
    });

    describe('2 : Determine which quarter the point with coordinates belongs to (х,у)', function () {
        it('should return quarter for x: 5 y: 5', function () {
            expect(getCoordinate(5, 5)).to.be.equal('1 четверть')
        })
        it('should return quarter for x: -5 y: 5', function () {
            expect(getCoordinate(-5, 5)).to.be.equal('2 четверть')
        })
        it('should return quarter for x: -5 y: -5', function () {
            expect(getCoordinate(-5, -5)).to.be.equal('3 четверть')
        })
        it('should return quarter for x: 5 y: -5', function () {
            expect(getCoordinate(5, -5)).to.be.equal('4 четверть')
        })
    })

    describe('3 : Find the sums of only positives of three numbers ', function () {
        it('should return only sum posive numbers(all numbers negative) ', function () {
            expect(positiveNum(-7, -2, -1)).to.be.equal(0)
        })
        it('should return only sum posive numbers (3 number pisitive)', function () {
            expect(positiveNum(-7, -2, 1)).to.be.equal(1)
        })
        it('should return only sum posive numbers (2 number pisitive) ', function () {
            expect(positiveNum(-7, 2, -1)).to.be.equal(2)
        })
        it('should return only sum posive numbers (1 number pisitive) ', function () {
            expect(positiveNum(7, -2, -1)).to.be.equal(7)
        })
        it('should return only sum posive numbers (2,3 numbers pisitive) ', function () {
            expect(positiveNum(-7, 2, 1)).to.be.equal(3)
        })
        it('should return only sum posive numbers (1,3 numbers pisitive) ', function () {
            expect(positiveNum(7, -2, 1)).to.be.equal(8)
        })
        it('should return only sum posive numbers (1,2 numbers pisitive)', function () {
            expect(positiveNum(7, 2, -1)).to.be.equal(9)
        })
        it('should return only sum posive numbers (all numbers positive)  ', function () {
            expect(positiveNum(7, 2, 1)).to.be.equal(10)
        })
    })

    describe('4 : Calculate the expression (max (a * b * c, a + b + c)) + 3', function () {
        it('should return multiplied numbers', function () {
            expect(maxExpression(5, 4, 3)).to.be.equal(63);
        });
        it('should return sum of numbers', function () {
            expect(maxExpression(1, 1, 1)).to.be.equal(6);
        });
    });

    describe('5 : Write a program for determining a students grade by his rating ', function () {
        it('should return F', function () {
            expect(getGradeWithSwitch(5)).to.equal('F');
        });
        it('should return E', function () {
            expect(getGradeWithSwitch(23)).to.equal('E');
        });
        it('should return D', function () {
            expect(getGradeWithSwitch(45)).to.equal('D');
        });
        it('should return C', function () {
            expect(getGradeWithSwitch(60)).to.equal('C');
        });
        it('should return B', function () {
            expect(getGradeWithSwitch(76)).to.equal('B');
        });
        it('should return A', function () {
            expect(getGradeWithSwitch(95)).to.equal('A');
        });
        it('should return  Number out of range', function () {
            expect(getGradeWithSwitch(115)).to.equal('Число вне диапозона');
        });
    });
})

