//1 Найти минимальный элемент массива



const getMinNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr[0] = arr[i];
        }
    }

    return arr[0]
}

console.log(getMinNumber([5, 0, -400, 355, 17, 3]))

//2  Найти максимальный элемент массива

const getMaxNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            arr[0] = arr[i];
        }
    }

   return arr[0]
}

console.log(getMaxNumber([5, 0, -400, -755, 17, 3]))


//3 Найти индекс минимального элемента массива

const minElementIndexOfArray = (array) => {
    let minElement = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minElement) {
            minElement = i
        }
    }

    return (`Индекс элемента - ${minElement}`);
}

console.log(minElementIndexOfArray([1, 5, 800, 700, -10]));


//4 Найти индекс максимального элемента массива

const maxElementIndexOfArray = (array) => {
    let maxElement = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxElement) {
            maxElement = i
        }
    }

    return (`Индекс максимального элемента - ${maxElement}`);
}

console.log(maxElementIndexOfArray([1, 5, 8, 100]));

//5 Посчитать сумму элементов массива с нечетными индексами

const getSumElements = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2) sum += arr[i];
    }
    return (`Сумма элементов - ${sum}`)
}
console.log( getSumElements([0, 1, 2, 3, 4, 5, 6, 7, 8]));

//6 Сделать реверс массива (массив в обратном направлении)

const arrayReverse = (arr) => {
    const reverse = [];

    for (let i = 0; i < arr.length; i++) {
        reverse.unshift(arr[i]);
    }

    return reverse;
}

console.log(arrayReverse([11, 22, 33]))

//7 Посчитать количество нечетных элементов массива

const sumOddNumbers = (arr) => {
    let sumNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sumNumbers++;
        }
    }

    return(sumNumbers);
}

console.log(sumOddNumbers([1, 3, 5, 6, 8]));


//8 Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

const changePlaceOfArray = (array) => {
    for (let i = 0; i < array.length / 2; i++) {
        array.push(array.shift());
    }

    return array
}

console.log(changePlaceOfArray([1, 2, 3, 4, 5, 6, 7, 8]))


//9 Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

//Пузырьком

const bubbleSort = (array) => {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i] > array[i + 1]) {
                let buff = array[i];

                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }

    return array;
}

console.log(bubbleSort([188, 1259, 102, 102, 10, 12, 84, 1, 0, 2, 3, 9, 7]))


// Выбором

const selectionSort = arr => {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;

        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }

        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

    return arr;
};

console.log(selectionSort([188, 1259, 102, 102, 10, 12, 84, 1, 0, 2, 3, 9, 7]))

// Вставками

const insertSort = (array) => {
    let value = array.length;

    for (let i = 0; i < value; i++) {
        let value = array[i];
        let temp = i - 1;

        while (temp >= 0 && array[temp] > value) {
            array[temp + 1] = array[temp];
            temp--;
            array[temp + 1] = value;
        }
    }

    return array;
}

console.log(insertSort([188, 1259, 102, 102, 10, 12, 84, 1, 0, 2, 3, 9, 7]))