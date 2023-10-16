// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multiplyBy3", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        expect(multiplyBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multiplyBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    }) 
})

// ReferenceError: multiplyBy3 is not defined

// b) Create the function that makes the test pass.

// Pseudocode
    // Create a function named multiplyBy3
        // input: array of numbers
        // output: array with each value multiplied by 3
    // use .map() HOF to iterate over entire array and return array of same length

const multiplyBy3 = (array) => {
    return array.map(value => {
        return value*3
    })
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe ("divisibleBy3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: divisibleBy3 is not defined

// b) Create the function that makes the test pass.

// Pseudo code
    // create a function named divisibleBy3
    // use object.number to access the number value of the object
    // use conditional to determine if number value is divisible by 3
        // input: number that is divisible by three
            // output: string, use string interpolation, "num is divisible by three"
        // input: number that is not divisible by three
            // output: "num is not divisible by three"

const divisibleBy3 = (object) => {
    if (object.number%3 === 0) {
        return `${object.number} is divisible by three`
    } else if (object.number%3 !== 0 && typeof object.number === "number") {
        return `${object.number} is not divisible by three`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizeArray", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        expect(capitalizeArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// ReferenceError: capitalizeArray is not defined

// b) Create the function that makes the test pass.

// Pseudo code
    // Create a function named capitalizeArray
        // input: array of strings, each string is a word
        // output: array with each word capitalized
    // .map() to iterate over entire array and return an array of the same length
        // use .toUpperCase() and index of 0 to capitalize the first letter of the word
        // .concat and .slice() to concanetate the first letter and the rest of the word

const capitalizeArray = (array) => {
    return array.map(value => {
        return value[0].toUpperCase().concat(value.slice(1))
    })
}