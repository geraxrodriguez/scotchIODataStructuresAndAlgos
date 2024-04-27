const hammingDistance = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++){
        letter1 = word1[i];
        letter2 = word2[i];
        if (letter1 !== letter2){
            count++;
        };
    };
    return count;
};
console.log(hammingDistance('rovor', 'river'));