// factorial

// function factorial(n){
//     if(n===0) return 1;
//     return n*factorial(n-1);
// }
// console.log(factorial(8));

/* sum of an array, return the sum of elements of an array
for this we can apply any approach

*/
// first approach
// const sumOfArr = (arr, len) =>{
//     if(len===0) {
//         return 0
//     }
//         return arr[len-1] + sumOfArr(arr,len-1)

// }

// const arr = [1,2,3,4,5];
// console.log(sumOfArr(arr,arr.length));

// 2nd approach

// const sumOfArr = (arr) =>{
//     if(arr.length===0) {
//         return 0
//     }
//     let lastElement = arr.pop();
//         return lastElement + sumOfArr(arr)

// }

// const arr = [1,2,3,4,5];
// console.log(sumOfArr(arr));

/* fabonacci series
series = 0 1 1 2 3 5 8 13 ...
f(0) = 0, f(1) = 1 ... f(n) = f(n-1) + f(n-2)
*/

// const fabonacciSeries = (n)=>{
//     if(n<2) return n;
//     return  fabonacciSeries(n-1) + fabonacciSeries(n-2)
// }

// console.log(fabonacciSeries(5));

// 1. Check whether a string is palindrome or not using recursive

// const palindrom = (str) =>{
//     if(str.length <= 1) return true;

//     if(str[0] !== str[str.length-1]) return false;

//     return palindrom(str.slice(1,str.length-1))
// }
// console.log(palindrom("hello"));
// console.log(palindrom("madam"));
// console.log(palindrom("racecar"));

// 2. Create pow(x, n) function which returns x^n using recursion

// const powerFunction = (x,n) =>{
//     if(n===0) return 1;
//     return x * powerFunction(x,n-1)
// }

// console.log(powerFunction(4,4));

// Create a function which returns the sum of digits of a number (e.g., sumOfDigits(453) is 12)

// const sumOfDigits = (n) =>{
//     if(n===0) return 0;

//     return Math.floor(n%10) + sumOfDigits(Math.floor(n/10));
// }

// console.log(sumOfDigits(453));

// 4. Create a function which returns the number of digits in a number (e.g., countDigits(453) is 3)

// const noOfDigits = (n) =>{
//     if(n===0) return 0;
//     return 1 + noOfDigits(Math.floor(n/10))
// }
// console.log(noOfDigits(12345));

// 5. Create a function to reverse a string

// const reverseString = (str) =>{
//     const strArr = str.split("");
//     if(str.length===0) return "";

//     return strArr.pop() + reverseString(strArr.join(""));
// }
// console.log(reverseString("hello"));

// 6.Create a function to find the GCD of two numbers

// const GCD = (a,b) =>{
//     if(b===0) return a;
//     return GCD(b,a%b);
// }

// // 7. Create a function to find the LCM of two numbers

// const LCM = (a,b) =>{
//     return Math.abs((a*b)/GCD(a,b))
// }
// console.log(LCM(12,15));

// Binary search in recursion

const binarySearch = (arr, target) => {
  return binarySearchUtility(arr, target, 0, arr.length - 1);
};
const binarySearchUtility = (arr, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      return binarySearchUtility(arr, target, start, mid-1);
    } else return binarySearchUtility(arr, target, mid+1, end);
  }
  return -1
};

const arr = [2, 5, 9, 12, 16, 20];
console.log(binarySearch(arr, 20));
