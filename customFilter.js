// Return the first element from the given array that passes the test specified 
// by the provided function. Both the array and function are passed into the function 
// as arguments as shown below: Bear in mind that the function func will return true 
// when the test is passed and false when it isn’t.

const customFilter = (arr, func) => {
    for (let num of arr) {
        if (func(num) == true) { return num }
    };
};
console.log(customFilter([1, 2, 3, 4, 5], num => {
    if (num == 5){
        return true;
    }
}))

function arrayFilter(arr, func) {
    return arr.find(func)
}