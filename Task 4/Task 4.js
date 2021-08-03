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

// // Task 2
//
// function checkAge(age) {
//     if (age === '') {
//         throw Error('Empty string');
//     } else if (isNaN(age)) {
//         throw new TypeError('Not a number');
//     } else if (parseInt(age) < 14) {
//         throw new RangeError('Your age is less than 14');
//     }
//     return true
// }
//
// try {
//     if (checkAge('16')) {
//         alert('Access granted');
//     }
// } catch (error) {
//     alert(error.name + '\n' + error.message);
// }

// Task 3
// class MonthException {
//     constructor(message) {
//         this.message = message;
//         this.name = 'MonthException'
//     }
// }
//
// function showMonthName(month) {
//     switch (month) {
//         case 1:
//             return 'January'
//         case 2:
//             return 'February'
//         case 3:
//             return 'March'
//         case 4:
//             return 'April'
//         case 5:
//             return 'May'
//         case 6:
//             return 'June'
//         case 7:
//             return 'July'
//         case 8:
//             return 'August'
//         case 9:
//             return 'September'
//         case 10:
//             return 'October'
//         case 11:
//             return 'November'
//         case 12:
//             return 'December'
//         default:
//             throw new MonthException('Wrong data')
//     }
// }
//
// try {
//     console.log(showMonthName(14));
// } catch (error) {
//     console.log(error.name + ' ' + error.message);
// }

// Task 4
//
// function showUser(id) {
//     if (id > 0) {
//         return true
//     } else{
//         throw new Error("ID must not be negative:" + id)
//     }
// }
//
// function showUsers(ids) {
//     for (let i = 0; i < ids.length; i++) {
//         try {
//             showUser(ids[i])
//         } catch (error) {
//             ids.splice(i, 1)
//             console.log(error.name + ' ' + error.message)
//         }
//     }
//     console.log(ids)
// }
//
// showUsers([7, -12, 44, 22])


