// Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g

const isPalindromeTwoPointers = text => {
    let lP = 0;
    let rP = text.length - 1;
    while (lP < rP){
        if (text[lP] === text[rP]) {
            lP++;
            rP--;
        } else {
            return false;
        }
    }
    return true;
};
console.log(isPalindromeTwoPointers('raceca'));

const isPalindromeChained = text => {
    return text === text.split('').reverse().join('')
};
console.log(isPalindromeChained('racecars'));