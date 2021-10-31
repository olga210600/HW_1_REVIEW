//1 Если а – четное посчитать а*б, иначе а+б

const getNumber = (a, b) => {
    let num = 0

    if (a % 2 === 0) {
        num = a * b;
    } else {
        num = a + b;
    }
    console.log(num)
}

//тернарный

const getNumberTernar = (a, b) => a % 2 === 0 ? a * b : a + b;

getNumber(5, 10)
console.log(getNumberTernar(5, 10))

// 2 Определить какой четверти принадлежит точка с координатами (х,у)

const getCoordinate = (x, y) => {
    if (x > 0 && y > 0) {
        console.log('1 четверть');
    } else if (x < 0 && y > 0) {
        console.log('2 четверть');
    } else if (x < 0 && y < 0) {
        console.log('3 четверть');
    } else if (x > 0 && y < 0) {
        console.log('4 четверть');
    } else {
        console.log('Точка лежит на оси')
    }
}

getCoordinate(5, 7);


// 3 Найти суммы только положительных из трех чисел


const positiveNum = (a, b, c) => {
    let sum = 0;

    if (a > 0) {
        sum += a;
    }

    if (b > 0) {
        sum += b;
    }

    if (c > 0) {
        sum += c;
    }

    console.log(sum);
}

positiveNum(1, 5, -3)


// 4  Посчитать выражение (макс(а*б*с, а+б+с))+3

const maxExpression = (a, b, c) => {
    let sum = 0;

    if ((a * b * c) > (a + b + c)) {
        sum = (a * b * c) + 3;
    } else {
        sum = (a + b + c) + 3;
    }

    console.log(sum);
}

maxExpression(5, 3, 1)


//5  Написать программу определения оценки студента по его рейтингу, на основе
// следующих правил

const getGradeWithSwitch = (grade) => {
    switch (true) {
        case grade > 0 && grade <= 19: {
            return ('F');
        }
        case grade >= 20 && grade <= 39: {
            return ('E');
        }
        case grade >= 40 && grade <= 59: {
            return ('D');
        }
        case grade >= 60 && grade <= 74: {
            return ('C');
        }
        case grade >= 75 && grade <= 89: {
            return ('B');
        }
        case grade >= 90 && grade <= 100: {
            return ('A');
        }
        default:
            return ('Число вне диапозона')
    }

}

console.log(getGradeWithSwitch(17));