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

    console.log(`Сумма чисел - ${sum}`);
    console.log(`Количество чисел - ${quantity}`);
}

quantityAndNumber()


//2 Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

const simpleNum = (numb) => {
    if (numb < 2) {
        console.log(`Число ${numb} - составное`);
        return;
    }

    for (let i = 2; i < numb; i++) {

        if (numb % i === 0) {
            console.log(`Число ${numb} - составное`);
            return;
        }
    }

    console.log(`Число ${numb} - простое`);
}

simpleNum(6)


//3  Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)

const naturalNumber = (numb) => {
    let sum = 0;

    for (let i = 0; i < numb; i++) {
        if (numb > 1) {
            sum = Math.sqrt(numb);
            sum = Math.floor(sum);
        }
    }

    console.log(sum);
}

naturalNumber(5)


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

    console.log(Math.round(index));
}

binarySearch(5)


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

    console.log(sum);
}

getNumberSum(21932);

//6 Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.

const getNumberReverse = (num) => {
    const reversArray = [];
    const string = num.toString().split('');

    string.forEach((item) =>{
        reversArray.unshift(item)
    })

    console.log(Number(reversArray.join("")))
}

getNumberReverse(1234)


