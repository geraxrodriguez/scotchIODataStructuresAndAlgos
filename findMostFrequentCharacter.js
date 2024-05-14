
const maxRecurringChar = str => {
    let charMap = {};
    let maxOcc = 0;
    let letter = '';
    for (let char of str) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
        
        if (charMap[char] > maxOcc){
            maxOcc = charMap[char]
            letter = char
        }
    };

    return letter

};
console.log(maxRecurringChar('bbbacada'))