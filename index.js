// Iteration 1: Names and Input

const hacker1 = `Anna`
console.log (`The driver's name is ${hacker1}`)
const hacker2 = `Alexia`
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (driver.length > navigator.length){
    console.log (`The driver has the longest name, it has ${driver.length} characters.`)
  }
  else if (driver.length < navigator.length) {
    console.log (`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)
  }
  else {
    console.log (`Wow, you both have equally long names, ${driver.length} characters!`)
  }

// Iteration 3: Loops

const nameCapital = driver.toUpperCase()
let updatedName = ``
for (let i=0 ; i < nameCapital.length ; i++){
 updatedName += (nameCapital[i] + ` `)
}
console.log (updatedName)

let reverseOrder = ``
for (let y=navigator.length - 1 ; y >= 0 ; y--){
  const char = navigator[y]
  reverseOrder += char
}
console.log (reverseOrder)

if (driver.localeCompare(navigator) === -1) {
    console.log(`The driver's name goes first.`)
    }
else if (driver.localeCompare(navigator) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
    }
else {
    console.log(`What?! You both have the same name?`)
    }