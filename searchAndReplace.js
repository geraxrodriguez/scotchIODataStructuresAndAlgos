// something I've been forgetting throughout this course is to consider capitalizaiton
function searchReplace(str, word, newWord){
    if ( word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
   }
   return str.replace(word, newWord)
}