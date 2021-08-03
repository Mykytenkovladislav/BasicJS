// Task 1
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
//
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//
//     showFullName() {
//         return this.name + ' ' + this.surname
//     }
// }
//
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//
//     showFullName(middleName) {
//         return super.showFullName() + ' ' + middleName;
//     }
//
//     showCourse() {
//         let currentYear = new Date().getFullYear()
//         return currentYear - this.year
//     }
// }
//
// var stud1 = new Student("Petro", "Petrenko", 2017);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4

// Task 4
// class Worker {
//     #experience = 1.2
//
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//
//     }
//
//     showSalary() {
//         console.log(this.fullName + ' salary: ' + (this.dayRate * this.workingDays));
//     }
//
//     showSalaryWithExperience() {
//         console.log(this.fullName + ' salary: ' + (this.dayRate * this.workingDays * this.#experience))
//
//     }
//
//     showExp() {
//         console.log('New experience:' + this.#experience);
//     }
//
//     get setExp() {
//         return this.#experience
//     }
//
//     set setExp(value) {
//         return this.#experience = value
//     }
// }
//
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// worker1.showExp();
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// worker1.showExp();
// worker1.showSalaryWithExperience();
//
// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// worker2.showExp();
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// worker2.showExp();
// worker2.showSalaryWithExperience();
//
//
// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// worker3.showExp();
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// worker3.showExp();
// worker3.showSalaryWithExperience();
//
// let workers = [worker1, worker2, worker3]
// workers.sort(function (a, b) {
//     if (a.dayRate * a.workingDays > b.dayRate * b.workingDays) {
//         return 1
//     } else if (a.dayRate * a.workingDays < b.dayRate * b.workingDays) {
//         return -1
//     }
//     return 0
// })
//
// for (let i in workers) {
//     console.log(workers[i].fullName + ": " + (workers[i].dayRate * workers[i].workingDays * workers[i].setExp));
// }

// Task 5
// class GeometricFigure {
//     getArea() {
//         return 0
//     }
//
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name
//     }
// }
//
// class Triangle extends GeometricFigure {
//     constructor(a, b, c) {
//         super();
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//
//     getArea() {
//         let s = (this.a + this.b + this.c) / 2;
//         return Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)))
//     }
// }
//
// class Square extends GeometricFigure {
//     constructor(a) {
//         super();
//         this.a = a;
//     }
//
//     getArea() {
//         return this.a * this.a
//     }
// }
//
// class Circle extends GeometricFigure {
//     constructor(r) {
//         super();
//         this.r = r;
//     }
//
//     getArea() {
//         return 3.14 * this.r * this.r
//     }
// }
//
// function handleFigures(figures) {
//     const reducer = (sum, figure) => {
//         if (figure instanceof GeometricFigure) {
//             console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea());
//             return sum + figure.getArea()
//         }
//         throw Error('Bad argument figure.');
//     }
//     return figures.reduce(reducer, 0);
// }
//
//
// const figures = [new Triangle(4, 5, 7), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
