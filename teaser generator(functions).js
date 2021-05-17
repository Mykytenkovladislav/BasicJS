// task 1
let phrases = [
    'Пускай будет солнце!',
    "Пускай будет туман!",
    "Пускай буду я!"
];
let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]

console.log(randomPhrase);
// task 2


let randomWordGenerator = function (words) {
    return Math.floor(Math.random() * words.length);
}
let randomInsultGenerator = function () {
    let bodyPart = ['рука', 'нога', 'голова', 'нос']
    let adjective = ['вонючая', "грустная", "невесёлая"]
    let animalPart = ['лапка', "нос", "ухо"]
    let animal = ["мухи", "выдры", "свиньи", "мыши",]

    return 'У тебя ' + bodyPart[randomWordGenerator(bodyPart)] +
        ' ещё более ' + adjective[randomWordGenerator(adjective)] + ", чем " +
        animalPart[randomWordGenerator(animalPart)] + " у " + animal[randomWordGenerator(animal)]
};
alert(randomInsultGenerator());
alert(randomInsultGenerator());

// task 3
let randomAdjectives_2 = adjective[Math.floor(Math.random() * adjective.length)] + ","

let array = ['У тебя', randomBodyPart, "ещё более", randomAdjectives_2, "чем", randomAnimalPart, "у", randomAnimal];
let fullPhrase_2 = array.join(' ')
console.log(fullPhrase_2)


// task 4
const array_1 = [3, 2, 1];

console.log(array_1.join(" больше, чем "))