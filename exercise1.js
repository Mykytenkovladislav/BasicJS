// Task 1
// function calcRectangleArea() {
//     let width = parseInt(prompt('Width is '));
//     let height = parseInt(prompt('Height is '));
//
//     if (isNaN(width) || isNaN(height)) {
//         throw new TypeError('Not a number');
//     }
//     return width * height;
// }
//
// try {
//     console.log(calcRectangleArea());
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// Task 2

function checkAge(age) {
    if (age === '') {
        throw Error('Empty string')
    } else if (isNaN(age)) {
        throw new TypeError('Not a number');
    } else if (parseInt(age) < 14) {
        throw new RangeError('Your age is less than 14')
    }
    return true
}

try {
    if (checkAge('')) {
        alert('Access granted')
    }
} catch (error) {
    alert(error.name + '\n' + error.message)
}
