// Learnt:
// we can spread both arrays and sets

const mergeArraysWithSet = (...arrays) => {
    // const set = new Set();
    // for (let i = 0; i < numOfArgs; i++) {}
    let joint = [];
    arrays.forEach(array => {
        joint = [...joint, ...array]
    })
    console.log(...[... new Set(joint)])
    console.log(Array.from(new Set(joint)))

    // indexOf finds first match
    // if first match == current index, then it's first time we encounter this element
    // else, we've seen this element b4
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
};
mergeArraysWithSet([1,2,3,3,3], [1,4,5,2])

