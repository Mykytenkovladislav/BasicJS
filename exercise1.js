// Task 1
// let newWin = window.open("about:blank", "hello", "width=300,height=300");
//
// setTimeout(() => {
//     newWin.resizeBy(500, 500)
// }, 2000)
// setTimeout(() => {
//     newWin.moveTo(200, 200)
// }, 2000)
// setTimeout(() => {
//     newWin.close()
// }, 5000)

// Task 2
// function changeCSS(){
//     let paragraph = document.body.querySelector('#text')
//     paragraph.style.color = '#e57e10'
//     paragraph.style.fontSize = '20px'
//     paragraph.style.fontFamily = 'Comic Sans MS'
// }

// Task 3
// let beforeHoldingMouse
// let buttons = document.querySelectorAll('button');
// buttons[0].addEventListener("click", () => {
//     document.body.style.backgroundColor = '#3366ff'
// })
// buttons[1].addEventListener("dblclick", () => {
//     document.body.style.backgroundColor = '#f81cdb'
// })
// buttons[2].addEventListener("mousedown", () => {
//     beforeHoldingMouse = document.body.style.backgroundColor
//     document.body.style.backgroundColor = '#673713'
// })
// buttons[2].addEventListener("mouseup", () => {
//     document.body.style.backgroundColor = beforeHoldingMouse
// },)
// document.querySelector('a').addEventListener('mouseenter', () => {
//         beforeHoldingMouse = document.body.style.backgroundColor
//         document.body.style.backgroundColor = '#f6d000'
//     }
// )
// document.querySelector('a').addEventListener('mouseleave', () => {
//         document.body.style.backgroundColor = beforeHoldingMouse
//     }
// )

// Task 4
// document.body.querySelector('input').addEventListener("click", () => {
//     let value = document.body.querySelector('#cars').value
//     document.body.querySelector(`option[value=${value}]`).remove()
// })

// Task 5
// let button = document.body.querySelector('input')
// button.addEventListener("mouseenter", () => {
//     let onClickText = document.createElement('h1')
//     onClickText.innerHTML = 'Mouse on me'
//     document.body.appendChild(onClickText)
// },)
// button.addEventListener("click", () => {
//     let onClickText = document.createElement('h1')
//     onClickText.innerHTML = 'I was pressed'
//     document.body.appendChild(onClickText)
// },)
// button.addEventListener("mouseleave", () => {
//     let onClickText = document.createElement('h1')
//     onClickText.innerHTML = 'Mouse is not on me!'
//     document.body.appendChild(onClickText)
// },)

// Task 6
// window.addEventListener('resize', ()=>{
//     let newWidth = window.innerWidth;
//     let newHeight = window.innerHeight;
//     let resized = document.createElement('p')
//     resized.innerHTML = `New width: ${newWidth}. New height: ${newHeight}.`
//     document.body.appendChild(resized)
// })

// Task 7
let cities = {
    Germany: ["Berlin", "Augsburg", "Munich", "Dresden"],
    USA: ["New York", "Washington", "Boston", "Chikago"],
    Ukraine: ["Kharkiv", "Lviv", "Kiev", "Odessa"]
}
let country = document.body.querySelector('#country')
let city = document.body.querySelector('#city')
window.onload = selectCountry;
country.onchange = selectCountry;

function selectCountry() {
    city.innerHTML = '';
    let c = this.value || "Germany", o;
    for (let i = 0; i < cities[c].length; i++) {
        o = new Option(cities[c][i], i, false, false);
        city.add(o);
    }
}

let parag = document.querySelector("p");
function myFunc() {

    parag.innerHTML = "";
    parag.innerHTML = country.options[country.selectedIndex].text + ', ' + city.options[city.selectedIndex].text;
}

