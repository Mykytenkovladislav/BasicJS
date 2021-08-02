// Task 1
function calcRectangleArea() {
    let width = parseInt(prompt('Width is '));
    let height = parseInt(prompt('Height is '));

    if (isNaN(width) || isNaN(height)){
        throw new TypeError('Not a number');
    }
    return width*height;
}

try {
    console.log(calcRectangleArea());
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

// Task 2

