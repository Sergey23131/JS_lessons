/*
let arrayInfo = ['hello', 'dicks', 10, 30, 40, 12, 'ios']
console.log('asd')
for (let i = 0; i <= arrayInfo.length-1; i++) {
    console.log(arrayInfo[i])
}
*/
/*let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (const ArrayItems of products) {
    document.write(' <div class="product-card">')

    document.write('<h3 class="product-title">')
    document.write(`${ArrayItems.title + 'Price -' + ArrayItems.price}`)
    document.write('</h3>')
    document.write(`<img src=${ArrayItems.image} alt="" class="product-image">`)

    document.write('</h3>')

    document.write('</div>')
}*/

/*
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const ArrayItems of users) {
    if (ArrayItems.age > 30) {
        document.write(`${ArrayItems.name + ' age -' + ArrayItems.age}`)

    }

}*/

/*
function square(...array) {

    for (let arrayElement of array) {
        console.log(arrayElement)
    }

}

square(2, 4, 'hello', 'pussie')
*/

/*function createParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}


createParagraph("Hello, world!");


let myText = "This is my paragraph.";
createParagraph(myText);*/


/*
function createUl(text, number) {
    let list = document.createElement('ul')
    for (let i = 0; i < number; i++) {
        let stroke = document.createElement('li');
        stroke.textContent = text;
        list.appendChild(stroke)
    }
    document.body.appendChild(list)
}


createUl('Logic', 10)
*/

/*function createUl(...arrNumbers) {
    let sum = 0;
    for (const ArrNumber of arrNumbers) {

        sum += ArrNumber;

    }
    return sum
}


console.log(createUl(30, 10, 10))*/

/*створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/


/*function swap(arr, index1, index2) {

    // Меняем значения местами с использованием временной переменной
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

// Пример использования
let array = [11, 22, 33, 44];
console.log(swap(array, 0, 1)); // [22, 11, 33, 44]*/

/*
Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/


/*
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let result;
    for (const currencyValuesItter of currencyValues) {
        if (currencyValuesItter.currency === exchangeCurrency) {
            result = sumUAH / currencyValuesItter.value;
            return result
        }
    }

}


console.log(exchange(40, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'))
*/

/*
Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

/*let str = 'Ревуть воли як ясла повні'

function stringToarray(str) {
    let arr = str.split(' ')
    console.log(arr)
}

stringToarray(str)*/

/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
*/
/*let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let doubledNumbers = numbers.map(function (num) {
    return num.toString();
});
console.log(doubledNumbers)*/
/*

- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/


/*let numbers = [5, 2, 8, 1, 4];

function sortNums(number, action) {
    if (action === 'ascending') {
        console.log(numbers.sort(function (a, b) {
            return b - a;
        }))
    }
    if (action === 'descending') {
        console.log(numbers.sort(function (a, b) {
            return a - b;
        }))
    }

}

sortNums(numbers, 'ascending'); // [8, 5, 4, 2, 1]

sortNums(numbers, 'descending'); // [8, 5, 4, 2, 1]*/
/*

- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
/*
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 3},
    {title: 'Frontend', monthDuration: 4}
];
*/


/*
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

function filterByDuration(arr) {
    let filteredArray = arr.filter(function (item) {
        return item.monthDuration > 5;
    });

    return filteredArray;
}

coursesAndDurationArray = filterByDuration(coursesAndDurationArray);
console.log(coursesAndDurationArray);*/

/*
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
*/


/*let transformedArray = coursesAndDurationArray.map(function (item, index) {
    return {
        id: index + 1,
        title: item.title,
        monthDuration: item.monthDuration
    };
});

console.log(transformedArray);*/


/*описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}

=========================

        Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
    {
        spades:[],
            diamonds:[],
        hearts:[],
        clubs:[]
    }
=========================*/

let deck = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'}
];

let packedDeck = deck.reduce(function(accumulator, card) {

    if (!accumulator[card.cardSuit]) {
        accumulator[card.cardSuit] = [];
    }
    accumulator[card.cardSuit].push(card);
  return accumulator;
}, { spade: [], diamond: [], heart: [], clubs: [] });

console.log(packedDeck);

/*function aceOnefind(arr) {
    for (let arrElement of arr) {
        if (arrElement.cardSuit === 'spade' && arrElement.value === 'ace') {
            return arrElement
        }
    }
}*/
/*let arrCards = []

function aceOnefind(arr) {
    for (let arrElement of arr) {
        if (arrElement.value !== '6' && arrElement.value !== '7' && arrElement.value !== '8' && arrElement.cardSuit === 'clubs') {
            arrCards.push(arrElement)
        }
    }
    return arrCards
}*/

/*
let result = deck.filter(function(arr) {
    return arr.cardSuit === 'clubs' && !['6', '7', '8'].includes(arr.value);
});

console.log(result)
*/
