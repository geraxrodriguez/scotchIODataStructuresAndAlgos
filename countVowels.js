/*
 An iterative approach to counting the number of vowels in a string of text.
 */
const vowels = ["a", "e", "i", "o", "u"]
function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
};

/*
 Using Regular Expressions to count the number of vowels in a string of text.
 Is 88% faster than iterative approach.
*/
function vowelsCounter(text) {
    // Search text with Regex and store all matching instances, stores in an array by default
    // g stands for global search, it will not start over after first match; will just continue on
    // i stands for case insensitive search
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    if (matchingInstances) {
        // Return number of vowels
        return matchingInstances.length
    } else {
        return 0
    }
}