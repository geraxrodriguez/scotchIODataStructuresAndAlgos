// Reverses a string
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))

    return (reversedNumber * Math.sign(num))
}


// LEARNT:
// you can use '...' operator on a string, doesn same thing as .split('')
// Math.sign() returns either -1, 1, or 0. 