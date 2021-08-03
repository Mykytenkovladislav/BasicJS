// Task 5

// let mentor = {
//     course: 'JS fundamental',
//     duration: 3,
//     direction: 'web-development'
// };
//
// function propsCount_1(currentObject) {
//     return Object.keys(currentObject).length;
// }
//
// function propsCount_2(currentObject)
// {
//     let counter = 0;
//     for (let i in currentObject) {
//         counter++;
//     }
//     return counter;
// }
//
// console.log(propsCount_1(mentor))
// console.log(propsCount_2(mentor))

// Task 2

// let testObj = {
//     name: 'Vladyslav',
//     surname: 'Mykytenko',
//     age: 24,
//     city: 'Kharkiv',
//     parents: ['Maya', 'Andrey']
// }
//
// function showProps(obj){
//     let properties = Object.keys(obj);
//     console.log(properties);
//     let propertiesValues = [];
//     for (let i in properties) {
//         propertiesValues[i] = obj[properties[i]];
//     }
//     console.log(propertiesValues);
// }
//
// showProps(testObj)

// Task 3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + ' ' + this.surname
    }
}

class Student extends Person{
    constructor(name,surname,year) {
        super(name,surname);
        this.year = year;
    }
    showFullName(middleName) {
        return super.showFullName() + ' ' + middleName;
    }
    showCourse(){
        let currentYear = new Date().getFullYear()
        return currentYear - this.year
    }
}

var stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
