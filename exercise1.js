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

let testObj = {
    name: 'Vladyslav',
    surname: 'Mykytenko',
    age: 24,
    city: 'Kharkiv',
    parents: ['Maya', 'Andrey']
}

function showProps(obj){
    let properties = Object.keys(obj);
    console.log(properties);
    let propertiesValues = [];
    for (let i in properties) {
        propertiesValues[i] = obj[properties[i]];

        console.log(properties[i] + "=" + obj[properties[i]]);
    }
    console.log(propertiesValues);
}

showProps(testObj)
