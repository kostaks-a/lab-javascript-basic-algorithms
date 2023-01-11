// Iteration 1: Names and Input


// Iteration 2: Conditionals


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