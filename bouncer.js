// Given an array, remove all falsy values from the array and 
// return an array of only truthy values.

const bouncer = arr => {
    return arr.filter(element => {
        if (element) { return element }
    })
};
console.log(bouncer([true, false, null, 1, 0]))