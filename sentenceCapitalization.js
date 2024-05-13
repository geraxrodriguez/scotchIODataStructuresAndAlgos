// The Challenge: 
// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g

const titleize = sentence => {
    let title = '';
    for (let i = 0; i < sentence.length; i++) {
        // might need to check if i = 0, just return capital letter immeidately
        if (i === 0 || sentence[i-1] === ' '){
            title += sentence[i].toUpperCase();
        }
        else {
            title += sentence[i];
        };
    };
    return title;
};
console.log(titleize('the tales of despereux'))