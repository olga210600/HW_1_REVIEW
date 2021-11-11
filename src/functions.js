//1 Получить строковое название дня недели по номеру дня.

const getWeekName = (num) => {
    switch(num) {
        case 1:
            return 'Понедельник';
            break;
        case 2:
            return 'Вторник';
            break;
        case 3:
            return 'Среда';
            break;
        case 4:
            return 'Четверг';
            break;
        case 5:
            return 'Пятница';
            break;
        case 6:
            return 'Суббота';
            break;
        case 7:
            return 'Воскресенье';
            break;
        default:
            return'Неверный день недели';
    }
}

console.log(getWeekName(1));

//2  Найти расстояние между двумя точками в двухмерном декартовом пространстве.

const getDistanceBetweenPoints = (x1, y1, x2, y2) => {
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt(a * a + b * b);

    return(`Расстояние между двумя точками: ${c.toFixed()}`);
}

console.log( getDistanceBetweenPoints(1,5,8,8));


//3 Вводим число(0-999), получаем строку с прописью числа.

let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


function convert_thousands(num) {
    if (num >= 1000) {
        return convert_hundreds(Math.floor(num / 1000)) + " thousand " + convert_hundreds(num % 1000);
    }

    return convert_hundreds(num);
}

function convert_hundreds(num) {
    if (num > 99) {
        return ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100);
    }

    return convert_tens(num);
}

function convert_tens(num) {
    if (num < 10) {
        return ones[num];
    }

    else if (num >= 10 && num < 20) {
        return teens[num - 10];
    }

    return tens[Math.floor(num / 10)] + " " + ones[num % 10];
}

console.log(convert_thousands(1000))
