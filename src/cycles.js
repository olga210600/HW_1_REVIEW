//1 Найти сумму четных чисел и их количество в диапазоне от 1 до 99

const quantityAndNumber = () => {
    let sum = 0;
    let quantity = 0;

    for (let i = 0; i <= 99; i++) {

        if (i % 2 === 0) {
            sum += i;
            quantity++;
        }
    }

    return `Сумма чисел - ${sum}, количество чисел - ${quantity}`;

    // return { sum, quantity}
}

console.log(quantityAndNumber())


//2 Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

const simpleNum = (numb) => {
    if (numb < 2) {
        return(`Число ${numb} - составное`);
    }

    for (let i = 2; i < numb; i++) {

        if (numb % i === 0) {
            return(`Число ${numb} - составное`);

        }
    }

    return(`Число ${numb} - простое`);
}

console.log( simpleNum(6))


//3  Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

const naturalNumber = (numb) => {
    let sum = 0;

    for (let i = 0; i < numb; i++) {
        if (numb > 1) {
            sum = Math.sqrt(numb);
            sum = Math.floor(sum);
        }
    }

    return sum;
}

console.log(naturalNumber(5))


//Бинарный поиск

const binarySearch = (value) => {
    let index = value;

    for (let i = 0; i < value; i++) {

        if (index * index > value) {
            index /= 2;
        }

        if (index * index < value) {
            index++;
        }
    }

    return Math.round(index);
}

console.log(binarySearch(25))


//4 Вычислить факториал числа n. n! = 1*2*…*n-1*n;

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }

    return factorial(n - 1) * n;
}

console.log(factorial(3));


//5 Посчитать сумму цифр заданного числа

const getNumberSum = (num) => {
    let sum = 0;
    const arrNums = num.toString().split('');

    arrNums.forEach((item) =>{
        sum += Number(item);
    })

    return sum;
}

console.log(getNumberSum(21932));

//6 Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

const getNumberReverse = (num) => {
    const reversArray = [];
    const string = num.toString().split('');

    string.forEach((item) =>{
        reversArray.unshift(item)
    })

    return Number(reversArray.join(""));
}

console.log(getNumberReverse(1234))


