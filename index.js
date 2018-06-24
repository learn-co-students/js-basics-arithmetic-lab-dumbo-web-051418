/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

let newID = 1000000000 + oldID

let ageIsValid = Number.isInteger(currentAge)

// between 1000000001 and 1000000020. You're tasked with creating three variables:
// randomNumber, which should contain a randomly-generated number between 0 (inclusive) and 20 (exclusive).
let randomNumber = Math.floor((Math.random() * 20)+1)
// randomInteger, which should take the value in randomNumber and round it down to the nearest integer.
let randomInteger = Math.floor(randomNumber)
// randomUserID, which should convert randomInteger into a valid ID number — an integer between 1000000001 and 1000000020.
let randomUserID = randomInteger + 1000000000
