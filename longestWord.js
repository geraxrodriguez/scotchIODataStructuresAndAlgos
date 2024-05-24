function longestWord(text) {
    var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
        if (currentWord.length > maxLengthWord.length) {
            return currentWord
        } else {
            return maxLengthWord
        }
    }, "")
    return result
}

function longestWord(text) {
    var sortedArray = text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)
    return sortedArray[0]
}

const findLongestWord = text => {
    return result
                .split(' ') // split into words array
                .reduce((maxLengthWord, currentWord) => currentWord.length > maxLengthWord.length ? currentWord : maxLengthWord) // don't assume reduce has to always be addition. it's for getting a single element from an array
};