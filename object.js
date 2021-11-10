// 1.Составьте алгоритм, который считает, сколько времени вам нужно на
// приготовление яиц.

const getCookingTime = (eggsAmount) => {
    return (Math.ceil(eggsAmount / 5) * 5)
}
console.log(getCookingTime(126))

// 2.Получая массив чисел. Все они либо нечетные, либо четные, кроме
// одного. Тебе нужно его найти.

const  getNumber = (array) => {
    const odd = []
    const notOdd = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            odd.push(array[i])

        } else {
            notOdd.push(array[i])
        }
    }

    return (odd.length > notOdd.length) ? notOdd[0] : odd[0]
}

console.log(getNumber([5, 7, 9, 2]))

// 3. Принимая массив объектов и случайную строку. У объектов может
// быть ключ: «title» с разными значениями. Создайте алгоритм, который
// фильтрует массив, заданный как первый параметр, и возвращает
// массив объектов, которые содержат в своих заголовках заданную строку
// в качестве второго параметра (без учета регистра).


const arrayTitle = [
    {
        title: "Some title 1"
    },
    {
        title: "I like JS"
    },
    {
        user: "This obj doesn/t have key title js"
    },
    {
        title: "Js - is the best!"
    }
];

const findTitle = (arr) => {
    const filteredArr = [];

    arrayTitle.forEach((item) => {
        const keysAndValues = Object.entries(item);

        keysAndValues.forEach(([key, value]) => {
            const splitedValue = value.split(" ");

            splitedValue.forEach((word) => {
                if (word.toLowerCase() === "js" && key === "title") {
                    filteredArr.push(item);
                }
            });
        });
    });

   return  filteredArr;
};

console.log(findTitle())


// 4. Принимая строку, ваша функция должна вернуть обьект, в котором
// ключи – символы строки, значение – количество повторений символов в
// строке

const sortCharacters = (str) => {
    const asd = str.split("");

    const result = asd.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;

        return acc;
    }, {});

    return result
};

console.log(sortCharacters("sparrow"));

//5. Принимая число, ваша функция должна найти следующий
// положительный палиндром большего размера.

function getNextPalindrome(number) {
    let reverse = "";
    for (let i = String(number).length - 1; i >= 0; i--) {
        reverse += String(number)[i];
    }
    return reverse;
}

function Palindrome(num) {
    if (String(num).length < 2) {
        return 11
    }

    for (let i = num + 1; ; i++) {
        if (String(i) === getNextPalindrome(i)) {
            return i
        }
    }
}

console.log(Palindrome(774))
