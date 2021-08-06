// Task 1
// Variant 1
// document.getElementById('test').innerHTML = 'Last'
// document.body.children[1].innerText = 'Last'

// Task 2
// document.querySelector(".image").src ="cat.jpg";
// alert(document.querySelector(".image").outerHTML)

// Task 3
// let divContain = document.querySelectorAll('#text p')
// for (let i =0; i < divContain.length; i++) {
//     console.log(`Selector text ${i}: ` + divContain[i].textContent)
// }

// Task 4
// Variant 1
// let list = document.getElementById('list').children
// let text = `${list[0].innerHTML}, ${list[4].innerText}, ${list[1].innerText}, ${list[3].innerText}, ${list[2].innerText}`
// console.log(text)
// Variant 2
// let list = document.querySelectorAll('li');
// let text = `${list[0].innerHTML}, ${list[4].innerText}, ${list[1].innerText}, ${list[3].innerText}, ${list[2].innerText}`
// console.log(text)

// Task 5
// document.querySelector('h1').style.backgroundColor= '#00FF00'
// let paragraphs = document.getElementById('myDiv').children
// paragraphs[0].style.fontWeight ='900'
// paragraphs[1].style.color = '#FF0000'
// paragraphs[2].style.textDecoration = 'underline'
// paragraphs[3].style.fontStyle = 'italic'
// list = document.querySelector('#myList').children
// document.querySelector("ul").style.display = "flex";
// document.querySelectorAll('li')[2].innerHTML = "vertical!";
// document.querySelector("ul").style.listStyleType = "none";
// document.querySelector("span").style.visibility = "hidden";

// Task 6
let text1 = prompt('Text 1:')
let text2 = prompt('Text 2:')

let inputs = document.querySelectorAll('input')
inputs[0].setAttribute('value', text1)
inputs[1].setAttribute('value', text2)
console.log(inputs[1].outerHTML)
let inputValue1 = document.getElementById('input1').value
let inputValue2 = document.getElementById('input2').value
inputs[0].setAttribute('value', inputValue2)
inputs[1].setAttribute('value', inputValue1)
