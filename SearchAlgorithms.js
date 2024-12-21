// Linear Search

// const linearSearch = (arr, target) =>{
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] === target) return i
//     }
//     return -1;

// }

// const arr = [4,5,6,10,19,90,109,-80];
// const target = 90;
// console.log(linearSearch(arr, target));
// console.log(arr.includes(19));
// console.log(arr.indexOf(109));
// console.log(arr.find((num)=>num>100));
// console.log(arr.findIndex((num)=>num>100));

// const arr = [4,5,6,10,19,90,-109];

// let mapArr = arr.map((num) => num<0)
// let filterArr = arr.filter((num) => num<0)
// console.log(findArr);
// console.log(arr);

/*
'Map' is used to apply a function on every item in an array and returns the new array. 'Filter' is used to create a new array from an existing one, containing only those items that satisfy a condition specified in a function
*/

/* 1. Find the Index of the First Occurrence in a String
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1
*/

// first approach
// const findFirstOccurance = (haystack, needle) => {
//   for (let i = 0; i <= haystack.length - needle.length; i++) {
//     // if(haystack.slice(i,i+needle.length) === needle){
//     // if(haystack.substr(i,needle.length) === needle){
//     if (haystack.substring(i, i + needle.length) === needle) {
//       return i;
//     }
//   }
//   return -1;
// // return haystack.indexOf(needle)
// };

// const haystack = "dadbutsad", needle = "sad";
// // console.log(findFirstOccurance(haystack, needle));
// console.log(haystack.search(needle));

// second approach

// const findFirstOccurance = (haystack, needle) => {
//     let m = haystack.length, n= needle.length;
//   for (let i = 0; i <= m-n; i++) {
//     if(haystack[i] === needle[0]){
//         let flag = true
//         for(let j = 0; j<n;j++){
//             if(haystack[i+j] != needle[j]){
//                 flag = false
//                 break;
//             }
//         }
//         if(flag) return i
//     }
//   }
//   return -1;
// };

// const haystack = "sabbutsad", needle = "sad";
// console.log(findFirstOccurance(haystack, needle));

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const reg = /[A-Z]/g;
// const found = paragraph.match(reg);
// console.log(found); //  output [ 'T', 'I' ]

//match method takes regular expression and returns the array of elements that satisfies the applied condition

// console.log(paragraph.indexOf("fox"));
// console.log(paragraph.search("fox"));

// both indexOf and search mostly do the same task but they have their own uniqueness.

// let str='Book is booked for delivery';
// // examples
// // 1. indexOf takes start index
// console.log(str.indexOf('k',4)); //returns 11 as seach starts from 4th index and the another k lies at 11th index
// console.log(str.search('k',4)); // returns 3 as first k lies at 3rd index

// //2. search takes regular expression for example

// console.log(str.indexOf('b'));  // returns 8 as b lies at 8th index in the above string
// console.log(str.search(/b/i)); // returnns 0 as B lies at 0th index in the above string and here i denotes the case in-sensitive

// Binary Search with iterative process

// const binarySearch = (arr, target) =>{
//     let start = 0, end = arr.length -1;
//     while(start <= end){
//         let mid = Math.floor((start+end)/2);
//         if(arr[mid] === target){
//             return mid;
//         }
//         else if(arr[mid]>target){
//             end = mid-1;

//         }else{
//             start = mid + 1;
//         }
//     }
//     return -1;

// }
// const arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(binarySearch(arr,6));
// console.log(arr.reduce((acc,num)=>acc+num,0));

// 2. binary search with recurion method

// const binarySearchRecursion  = (arr , target) =>{
//     return binarySearchUtility(arr, target, 0, arr.length-1)
// }

// const binarySearchUtility = (arr, target, start, end) =>{
//     while(start <= end){
//         let mid = Math.floor((start+end)/2);
//         if(arr[mid]=== target) return mid;
//         else if(arr[mid]>target) return binarySearchUtility(arr, target,start, mid-1)
//         else return binarySearchUtility(arr, target, mid+1, end)
//     }
//     return -1
// }

// const arr = [4,9,12,16,18,22];
// console.log(binarySearchRecursion(arr,22));

/*
search insert position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/

// using linear search
// const searchInsertIndex = (arr, target) =>{
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] === target) return i
//         else if(arr[i]>target) return i
//         else if(i==arr.length-1) return i+1
//     }
//     return -1;
// }
// const arr = [5,8,11,15,17,19,22];
// console.log(searchInsertIndex(arr,17));
// console.log(searchInsertIndex(arr,14));
// console.log(searchInsertIndex(arr,23));

// using binary search approach
// const searchInsertIndex = (arr, target) => {
//   let start = 0,
//     end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return start
// };

// const arr = [5, 8, 11, 15, 17, 19, 22];
// console.log(searchInsertIndex(arr, 24));

/*
floor and ceil methods
floor(x) this method gives the greates integer smaller than x
ceil(x) this method gives the smalles integer greater than x
*/

/*
Square roots sqrt(x)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

// const squareRoot = (x) =>{
//     if(x===0 || x===1) return x;
//     let left = 1, right = x, output = 0;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(mid*mid===x) return mid;
//         else if(mid*mid < x){
//             output = mid;
//             left = mid+1;
//         }
//         else right = mid -1
//     }
//     return output;
// }
// console.log(squareRoot(25));

/*
First bad version
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
*/

// const findFirstBadVersion = function(n) {
//     let left = 1;
//     let right = n;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         if (isBadVersion(mid)) {
//             right = mid; // mid might be the first bad version
//         } else {
//             left = mid + 1; // first bad version is after mid
//         }
//     }

//     return left; // left will point to the first bad version
// };

/*
Binary search
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -
*/

// const binarySerch = (nums, target) =>{
//     let left = 0, right = nums.length-1;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(nums[mid]===target) return mid;
//         else if(nums[mid]>target){
//             right = mid -1;
//         }else left = mid + 1;
//     }
//     return -1
// }

// const nums = [-1,0,3,5,9,12], target = 2
// console.log(binarySerch(nums,target));

/*
Find minimum in rotated sorted array.
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
*/

// const findMinimum = (arr) =>{
//     let left = 0, right = arr.length-1;
//     while(left<right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid]>arr[right]){
//             left = mid+1
//         }else{
//             right = mid;
//         }
//     }
//     return arr[left];
// }

// const nums = [4,5,6,7,0,1,2]
// console.log(findMinimum(nums));

/*
 Find First and Last Position of Element in Sorted Array

 Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
*/

/*
to solve this problem in O(logN) need to use binary search algorithm and need to perform binary search twice first to find the left occurance and second to find the last occurance of the target element.

1. to find the left occurance, need to decrease right pointer
2. to find the right occurance, need to increase left pointer
*/

// const firstLastPosition = (arr, target) => {
//   const leftOccurance = (arr, target) => {
//     let left = 0,
//       right = arr.length - 1,
//       output = [];
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         output.push(mid);
//         right = mid - 1;
//       } else if (arr[mid] > target) right = mid - 1;
//       else left = mid + 1;
//     }
//     return left;
//   };

//   const rightOccurance = (arr, target) => {
//     let left = 0,
//       right = arr.length - 1,
//       output = [];
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         output.push(mid);
//         left = mid + 1;
//       } else if (arr[mid] > target) right = mid - 1;
//       else left = mid + 1;
//     }
//     return right;
//   };
//   let left = leftOccurance(arr, target);
//   let right = rightOccurance(arr,target);
// if(left<=right && arr[left] == target && arr[right] === target) return [left, right]
// else return [-1, -1]
// };
// const nums = [5, 7, 7, 8, 8, 10],
//   target = 8;
// console.log(firstLastPosition(nums, target));

/*
Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10
*/

const findSingleElement = (arr) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid % 2 !== 0) mid--;
    if (arr[mid] === arr[mid + 1]) left = mid + 2;
    else right = mid;
  }
  return arr[left];
};
const nums = [3,3,7,7,10,11,11];
console.log(findSingleElement(nums));
