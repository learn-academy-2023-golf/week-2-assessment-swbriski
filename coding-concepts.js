// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
// console.log(cohort.split(" "))

// a) Your answer: ["G", "o", "l", "f", "2", "0", "2", "3"]
// b) Verify and explain: My answer is incorrect. The .split(" ") function separated the string differently than expected. Instead of separating it into letters, it sliced the string to exclude the spaces.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: My answer is incorrect. The function does not have return. Therefore, no output is defined.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The function filter() iterates over the entire array, returning a subset of the array that satisfies the condition specified. Here, the condition is satisfied as long as the value is not even.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: Objects use dot notation to reference values encapsulated inside of the object. The value for myCodingSkills.languages would be the array ["JavaScript", "Ruby"]. We can access the values inside of this array by specifying the desired index.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: [class Learn]
// b) Verify and explain: The answer is Learn { student: 'George', cohort: 'Golf', year: 2023 }. Invoking the object returns the class and the key: value pairs for the object.