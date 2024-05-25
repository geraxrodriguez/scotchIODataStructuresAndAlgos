function chunkArrayForOf(array, size) {
    // initialize empty array for storing
    let result = []

    // use for... of to loop through our array
    for (value of array){
        // indexing into our results array to grab the last element, which is our last array
        let lastArray = result[result.length -1 ]
        // if last array doesn't exist or if size of last array is equal to our chunk size
        // then begin a new array with the only value being our current value to start
        if(!lastArray || lastArray.length == size){
            result.push([value])
        // push our current value to our last array
        } else{
            lastArray.push(value)
        }
    }
    return result
}

function chunkArraySplice(array, size) {
    let result = []
    let arrayCopy = [...array] // create copy from array

    // while there are elements in our array copy...
    // starting at index 0, take the next "size" elements and push them to our results array
    // .splice returns
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

function chunkArray(array, size) {
    // initliaze array for storing our chunks
    let result = []

    // we increment I by size to start our next chunk where previosu chunk left off
    for (let i = 0; i < array.length; i += size) {
        // create chunk by slicing array
        let chunk = array.slice(i, i + size)
        // add to our results array
        result.push(chunk)
    }
    return result
};

function chunkArray(array, size) {
    if(array.length <= size){
        return [array]
    }
};