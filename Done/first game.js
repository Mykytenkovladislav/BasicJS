let wordsArray = ["яблоко", "банан", "молоко", "кастрюля"]
let answerArray = [];
let attempts = 5;
let wasGuessed = false;
// choose random word
let keyWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
alert("Key word: " + keyWord);
// create result array
for (let i = 0; i < keyWord.length; i++)
    answerArray[i] = "_";
let remainingLetters = keyWord.length;
// game cycle
while (remainingLetters > 0 && attempts !==0 ) {
    wasGuessed = false
    alert('Your current result: ' + answerArray.join(" ")); // Result print

    const letter = prompt("Pls, enter 1 letter(ru):"); // user input
    if (letter === null) {
        break;
    } else if (letter.length !== 1) { // if more than 1 characters were entered
        alert("Pls, enter just 1 letter");
    } else { // status update
        for (let j = 0; j < keyWord.length; j++) {
            if (keyWord[j] === letter.toLowerCase()) { // guess is correct
                if (answerArray[j] !== letter) {
                    answerArray[j] = letter
                    remainingLetters--;
                    wasGuessed = true
                } else {
                    alert("You already entered this letter. Pls, choose another letter.")
                    break;
                }
            }
        }
        if (wasGuessed === false) {
            attempts--;
            alert("You didn't guess, so " + attempts + " attempts left")
        }
    }
}
alert(answerArray.join(" "));
alert("Good game. Your word was " + keyWord)