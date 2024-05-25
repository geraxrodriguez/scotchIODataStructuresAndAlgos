const pigLatin = str => {
    str = str.toLowerCase();
    // establish vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // check if first letter is vowel. if so, append 'ay' and move on
    if (vowels.includes(str[0])) {
        return str + 'way';
    };
    // establish vowel index
    let vowelIndex = 1;
    for (lett of str) {
        if (vowels.includes(lett)){
            vowelIndex = str.indexOf(lett);
            break;
        }
    };

    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + 'ay';
};

