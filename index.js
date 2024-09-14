
/*1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/
function calculateDifference(a, b) {
    return a - b;
}
const result = calculateDifference(10, 5);
console.log(result); 



/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not. */
function isOdd(num) {
    return num % 2 !== 0;
}
let res = isOdd(10);
let ress = isOdd(9);
console.log(res);  
console.log(ress);  

/* 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.*/
function findMin(arr) {
    return Math.min(...arr);
}
const numbers = [5, 2, 9,0, 1, 7];
const minNumber = findMin(numbers);
console.log(minNumber);

