/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)

- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

function User(id, name, surname) {
    this.id = id;
    this.name = name;
    this.surname = surname
}


let arrUsers = [
    new User(1, 'John', 'Sioal'),
    new User(2, 'Jona', 'Sil'),
    new User(3, 'Jora', 'Soa'),
    new User(4, 'Jolyk', 'Ial'),
    new User(5, 'Joah', 'Lasd')
]

/*
let filterForUsers = arrUsers.filter(function (arr) {
    return arr.id % 2 === 0
})

let filterByID = arrUsers.sort((a, b) => b.id - a.id)


console.log(filterByID)*/

/*    - (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/


class Car {
    constructor(model, producer, year, speed, vEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.speed = speed;
        this.vEngine = vEngine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }

    info() {
        console.log(`Модель - ${this.model}`)
        console.log(`Виробник - ${this.producer}`)
        console.log(`Рік - ${this.year}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log(`їдемо зі швидкістю ${this.speed} на годину`)
    }

    addDriver(driver) {
        this.previousDriver = driver;
        console.log(`Прошлый водитель ${this.previousDriver} `)
    }

}

let arrCars = [
    new Car('opel', 'Germany', 2005, '120km', '4L'),
    new Car('Mazda', 'UK', 2006, '240km', '4L'),
    new Car('Mersedes', 'Germany', 2003, '120km', '4L'),
    new Car('Lada', 'Ukr', 2015, '150km', '4L'),
    new Car('BMW', 'Germany', 2016, '120km', '4L')
]

console.log(arrCars)

arrCars[1].drive();
console.log('///////////////////')
arrCars[1].info();
console.log('///////////////////')
arrCars[1].increaseMaxSpeed(320);
console.log('///////////////////')
arrCars[1].addDriver('Pasha')
