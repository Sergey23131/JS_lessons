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



function swap(arr, index1, index2) {

    // Меняем значения местами с использованием временной переменной
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

// Пример использования
let array = [11, 22, 33, 44];
console.log(swap(array, 0, 1)); // [22, 11, 33, 44]
