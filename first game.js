let wordsArray = ["Яблоко", "Банан", "Молоко", "Кастрюля"]
// choose random word
let keyWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log("Key word: " + keyWord);
let answerArray = [];
// create result array
for (let i = 0; i < keyWord.length; i++)
    answerArray[i] = "_";
let remainingLetters = keyWord.length;
// game cycle
while (remainingLetters > 0) {
    alert('Your current result: ' + answerArray.join(" ")); // Result print

    var letter = prompt("Pls, enter 1 letter(ru):"); // user input
    if (letter === null) {
        break;
    } else if (letter.length !== 1) { // if more than 1 characters were entered
        alert("Pls, enter just 1 letter");
    } else { // status update
        for (let j = 0; j < keyWord.length; j++) {
            if (keyWord[j] === letter) { // guess is correct
                if (answerArray[j] !== letter) {
                    answerArray[j] = letter
                    remainingLetters--;
                } else {
                    alert("You already entered this letter. Pls, choose another letter.")
                    break;
                }
            }
        }
    }
}
alert(answerArray.join(" "));
alert("Good game. Your word was " + keyWord)