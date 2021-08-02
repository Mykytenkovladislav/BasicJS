function toCapital(input) {
    let storeArray = [];
    let wordsCounter = 0
    let word = ''
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            word += input[i]
            storeArray[wordsCounter] = word
            console.log(storeArray)
            console.log(word)
        } else {
            word = ''
            wordsCounter++
        }
    }
    for (let i = 0; i < storeArray.length; i++) {
        storeArray[i] = storeArray[i][0].toUpperCase() + storeArray[i].substr(1)
        console.log(storeArray)
    }
}

let input = 'I love my life'
toCapital(input)
