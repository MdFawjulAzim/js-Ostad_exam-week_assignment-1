console.log("Answers to the questions 1");
/*1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/
function calculateDifference(a, b) {
    return a - b;
}
const result = calculateDifference(10, 5);
console.log(result); 


console.log("Answers to the questions 2");
/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not. */
function isOdd(num) {
    return num % 2 !== 0;
}
let res = isOdd(10);
let ress = isOdd(9);
console.log(res);  
console.log(ress);  


console.log("Answers to the questions 3");
/* 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.*/
function findMin(arr) {
    return Math.min(...arr);
}
const numbers = [5, 2, 9,0, 1, 7];
const minNumber = findMin(numbers);
console.log(minNumber);

console.log("Answers to the questions 4");
/*4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers. */
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let arr1 = [1, 2, 3, 4, 5, 6]
let arr1_res =filterEvenNumbers(arr1);
let arr2 = [10, 15, 20, 25, 30]
let arr2_res =filterEvenNumbers(arr2);
console.log(arr1_res);  
console.log(arr2_res); 


console.log("Answers to the questions 5");
/*5) Write a function named findMax that takes an array of numbers and returns the largest number in the array. */
function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
let arr3 = [1, 2, 3, 4, 5, 6]
let arr3_res =sortArrayDescending(arr3);
let arr4 = [10, 15, 20, 25, 30]
let arr4_res =sortArrayDescending(arr4);
console.log(arr3_res);  
console.log(arr4_res); 

console.log("Answers to the questions 6");
/*6) Write a function named findSum that takes an array of numbers and returns the sum of all the numbers in the array. */
function findSum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
let arr5 = [1, 2, 3, 4, 5, 6]
let arr5_res =findSum(arr5);
let arr6 = [10, 15, 20, 25, 30]
let arr6_res =findSum(arr6);
console.log(arr5_res);  
console.log(arr6_res);






