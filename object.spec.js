describe('Should cover object file', function () {
        it('Task 1 : should return how long you need time to cook 9 eggs', function () {
            expect(getCookingTime(9)).to.be.equal(10);
        });

        it('Task  2 : should return a number from the array that is different from other numbers', function () {
            expect(getNumber([5, 3, 1, 9, 2, 1])).to.be.equal(2);
        });

        it('Task  3 : should return an array of objects that match the condition', function () {
            expect(findTitle([{ title: "Some title 1"},{ title: "I like JS"}, {user: "This obj doesn/t have key title js"}, {title: "Js - is the best!"}])).to.eql([{ title: "I like JS" }, { title: "Js - is the best!" }]);
        });

        it('Task  4 : should return object letters with the number of their repetitions in a word ', function () {
            expect(sortCharacters('flowers')).to.eql({f:1, l:1, o:1, w:1, e:1, r:1, s:1});
        });

        it('Task  5 : should return the next positive palindrome', () => {
            expect(palindrome(5)).to.eql(11);
            expect(palindrome(55)).to.eql(66);
        });
});