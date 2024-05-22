// method: chaining built-in methods, slowest by 50%
const reverseStringByChaining = str => {
    // return s.split('').reverse().join('');
    return [...text].reverse().join('');
};

// method: for loop, second fastest by 9% 
const reverseStringForLoop = str => {
    const reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    };
    
    // or using for... of
    for (let letter of str){
        reversed = letter + reversed
    }
    
    return reversed;
};

// recursion
const reverseStringRecursion = text => {
    if (text === "") {
        return ""
    } else {
        return reverseStr(text.substr(1)) + text[0]
    }
};

// using .reduce(), is fastest
const reverseStringReduce = string => {
    return text.split('').reduce((a, c) => c + acc, '')
};