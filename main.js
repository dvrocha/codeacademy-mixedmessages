const firstArray = ["Hello,", "Lali-ho,", "Morning,", "Moimoi,", "Hallo,", "Konichua,"]
const secondArray = ["what is your favorite", "why do you hate", "did you ever think about", "would you kill for a"]
const thirdArray = ["chocolate?", "berry?", "Final Fantasy?", "Persona?", "anime?"]

function pickRandom(array) {
    let randomNum = Math.floor(Math.random()*array.length)
    //console.log(randomNum)
    return array[randomNum]
}

let firstMessage = (pickRandom(firstArray))
let secondMessage = (pickRandom(secondArray))
let thirdMessage = (pickRandom(thirdArray))

console.log("Your random message of the day will be...")
console.log(`${firstMessage} ${secondMessage} ${thirdMessage}`)



