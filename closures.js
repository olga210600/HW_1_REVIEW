// 1. Новый фильм &quot;Как натренировать своего дракона” только выпустили! В кассах кинотеатра много людей, стоящих в
// огромную очередь. У каждого из них есть банкнота в 100, 50 или 25 долларов. Билет на «Бэтмен против Супермена: На заре
// справедливости» стоит 25 долларов. Вася в настоящее время работает клерком. Он хочет продать билет каждому человеку в
// этой очереди. Может ли Вася продать каждому билет и отдать сдачу, если у него изначально нет денег и он продает билеты
// строго в том порядке, в котором люди следуют в очереди?  Верните YES, если Вася может продать каждому билет и отдать
// сдачу. В противном случае верните NO. Может ли Вася продать каждому билет и отдать сдачу?
//     Условия:
// * принимает массив из очереди людей
// * возвращает строку

const tickets = (arr) => {
    let arrSum = 0;
    const allElement = arr.slice(0, -1);
    const removed = arr[arr.length - 1]

    allElement.forEach(function (el) {
        arrSum += el;
    })
    if (arrSum === removed) {
        return ('YES')
    } else {
        return ('NO')
    }
}

console.log(tickets([25, 50, 25, 100]))


// 2 Напишите функцию, которая получает два бесконечных числа в
// виде строк. Вы должны вернуть результат суммы этих двух чисел
// в виде строки. Математическая работа с этими двумя числами
// недоступна.

function getSum(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        return;
    }
    let length;
    num1 = num1.split('').reverse().map(Number);
    num2 = num2.split('').reverse().map(Number);
    let result = [];
    if (num1.length > num2.length) {
        length = num1.length - num2.length;
        for (let j = 0; j < length; j++) {
            num2.push(0);
        }
    }
    if (num2.length > num1.length) {
        length = num2.length - num1.length;
        for (let k = 0; k < length; k++) {
            num1.push(0);
        }
    }
    for (let i = 0; i < num1.length; i++) {
        let sumtwonum = 0;
        sumtwonum = (num1[i]) + (num2[i]);
        if (sumtwonum < 10) {
            result.push(sumtwonum);
        } else if (sumtwonum > 9) {
            sumtwonum = (num1[i]) + (num2[i]) - 10;
            result.push(sumtwonum);
            num1[i + 1] += 1;
        }
    }
    return result.reverse().join('');
}

console.log(getSum('33333586999', '5222275272'))
console.log(getSum('2252', '8888888888'))


// 3 Создайте функцию, которая получает два аргумента: первый -
// это массив объектов, второй - строка (имя автора). Ваша
// функция должна возвращать количество сообщений с автором
// из аргумента функции и комментариев с тем же автором. Пример
// массива:

let listOfPosts2 = [
    {
        id: 1,
        post: 'some post1',
        title: 'title 1',
        author: 'Uncle',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {
                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            }]
    },
    {
        id: 2,
        post: 'some post2',
        title: 'title 2',
        author: 'Ivanov',
        comments: [
            {
                id: 1.1,
                comment: 'some comment1',
                title: 'title 1',
                author: 'Rimus'
            },
            {

                id: 1.2,
                comment: 'some comment2',
                title: 'title 2',
                author: 'Uncle'
            },
            {
                id: 1.3,
                comment: 'some comment3',
                title: 'title 3',
                author: 'Rimus'
            }
        ]
    },
    {
        id: 3,
        post: 'some post3',
        title: 'title 3',
        author: 'Rimus'
    },
    {
        id: 4,
        post: 'some post',
        title: 'title 4',
        author: 'Uncle'
    }
]
let sumName = 0;
let sumComment = 0

const getCountByAuthor = (arr, name) => {
    arr.forEach((el) => {
        if (el.author === name){
            return sumName++
        }

        if (el.comments) {
            el.comments.forEach((item) => {
                if (item.author === 'Uncle') {
                    return  sumComment++
                }
            })
        }
    })

    let  result = `post - ${sumName}, comments - ${sumComment} `
    console.log(result)
}

getCountByAuthor(listOfPosts2,'Uncle')