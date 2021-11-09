describe('conditionalOperators', function () {
    describe('First task : Если а – четное посчитать а*б, иначе а+б ', function () {
        describe('correct input date', function () {
            it('should return mult for two numders', function () {
                expect(getNumber(20, 10)).to.be.equal(200);
            });
            it('should return sum for two numders', function () {
                expect(getNumber(15, 10)).to.be.equal(25);
            });
        });
    });
});

describe('conditionalOperators', function () {
    describe('First task.ternar : Если а – четное посчитать а*б, иначе а+б ', function () {
        describe('correct input date', function () {
            it('should return mult for two numders', function () {
                expect(getNumberTernar(20, 10)).to.be.equal(200);
            });
            it('should return sum for two numders', function () {
                expect(getNumberTernar(15, 10)).to.be.equal(25);
            });
        });
    });
});


describe('conditionalOperators', function () {
    describe('Second task : Определить какой четверти принадлежит точка с координатами (х,у)', function (){
        describe('should return quarter', function (){
            it('should return quarter for x: 5 y: 5', function (){
                expect(getCoordinate(5,5)).to.be.equal('1 четверть')
            })
            it('should return quarter for x: -5 y: 5', function (){
                expect(getCoordinate(-5,5)).to.be.equal('2 четверть')
            })
            it('should return quarter for x: -5 y: -5', function (){
                expect(getCoordinate(-5,-5)).to.be.equal('3 четверть')
            })
            it('should return quarter for x: 5 y: -5', function (){
                expect(getCoordinate(5,-5)).to.be.equal('4 четверть')
            })
        })
    })
})


describe('conditionalOperators', function () {
    describe('Three task : Найти суммы только положительных из трех чисел', function (){
        describe('should return sums of only positive of three numbers', function (){
            it('should return only sum posive numbers(all numbers negative) ', function (){
                expect(positiveNum(-7, -2,-1 )).to.be.equal(0)
            })
            it('should return only sum posive numbers (3 number pisitive)', function (){
                expect(positiveNum(-7, -2,1 )).to.be.equal(1)
            })
            it('should return only sum posive numbers (2 number pisitive) ', function (){
                expect(positiveNum(-7, 2,-1 )).to.be.equal(2)
            })
            it('should return only sum posive numbers (1 number pisitive) ', function (){
                expect(positiveNum(7, -2,-1 )).to.be.equal(7)
            })
            it('should return only sum posive numbers (2,3 numbers pisitive) ', function (){
                expect(positiveNum(-7, 2,1 )).to.be.equal(3)
            })
            it('should return only sum posive numbers (1,3 numbers pisitive) ', function (){
                expect(positiveNum(7, -2,1 )).to.be.equal(8)
            })
            it('should return only sum posive numbers (1,2 numbers pisitive)', function (){
                expect(positiveNum(7, 2,-1 )).to.be.equal(9)
            })
            it('should return only sum posive numbers (all numbers positive)  ', function (){
                expect(positiveNum(7, 2,1 )).to.be.equal(10)
            })

        })
    })
})


describe('conditionalOperators', function () {
    describe('Four : Посчитать выражение (макс(а*б*с, а+б+с))+3', function () {
        describe('return correct result', function () {
            it('should return multiplied numbers', function () {
                expect(maxExpression(5, 4, 3)).to.be.equal(63);
            });
            it('should return sum of numbers', function () {
                expect(maxExpression(1, 1, 1)).to.be.equal(6);
            });
        });
    });
});
