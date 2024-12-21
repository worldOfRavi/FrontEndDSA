// lets start new journey.


// 1.  sum of natural number from 1 to n
// const sumOfNaturalNumber = (n)=>{
//     let sum = n*(n+1)/2
//     // for(let i= 1;i<=n;i++){
//     //     sum += i;
//     // }
//     console.log(`Sum of ${n} natural number is ${sum}`);
// }

// sumOfNaturalNumber(5)

// 2. sum of digits of a number

// let number = 456345;
// let sum = 0;
// while(number > 0){
//     let reminder = number%10;
//     sum += reminder;
//     number = Math.floor(number/10);
// }
// console.log(sum);

// 3. program to count the number of digit in a number
// for instace number is 234454 and the outcome will be 6.

// let num = 234454;
// let count = 0;
// do{
//     count +=1;
//     num = Math.floor(num/10);

// }while(num>0);
// console.log(count);


// const countDigit = (num)=>{
//     num = parseInt(num)
//     num = Math.abs(num);
//     let count = 0;
//     do{
//         count ++;
//         num = Math.floor(num/10)
//     }while(num>0);
//     return count;
// }
// console.log(countDigit("-343asdfg"));


// 4. palindrom number

// let num = 121;
// let temp = num;
// let revNum = "";
// while(temp>0){
//     revNum += temp%10;
//     temp = Math.floor(temp/10);
// }
// if(num === parseInt(revNum)){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// const checkForPalindrom = (num)=>{
//     num = parseInt(num);
//     num = Math.abs(num);
//     let temp = num;
//     let revNum = 0;
//     while(temp>0){
//         revNum = revNum*10 + temp%10;
//         temp = Math.floor(temp/10)
//     }
//     if(num === revNum){
//         console.log("palindrom");
        
//     }else{
//         console.log("Not palindrom");
        
//     }
// }

// checkForPalindrom(121)

// 5




// 5. fabonacci series
// generally denoted as F(n), where F(0) = 0, F(1) = 1 and F(n) = F(n-1) + F(n-2) where n>1

/* for exampe n=3
0 1 1 2
*/

// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8
// let fabonacciSeries = (num)=>{
//     if(num<2) return num;
//     let prev = 0, current = 1,next;
//     for(let i = 2;i<=num;i++){
//         next = prev + current;
//         prev = current;
//         current = next;
//     }
//     return next;
// }

// let num = 6;
// console.log(`fabonacci series of ${num} is ${fabonacciSeries(num)}`);



// 6. program to find the missing number from an array

// let nums = [0,9,7,6,5,2,1,3,4]; 

// example 1.
// for(let i=0;i<=nums.length;i++){
//     if(!nums.includes(i)){
//         console.log(`Missing number is ${i}`);
//         return;
//     }
// }


// example 2. Straight forward
// function findMissingNumber(nums){
//     let sum = 0;
//     for(let i=0;i<nums.length;i++){
//         sum += nums[i];
//     }
//     let length = nums.length;
//     return length*(length+1)/2 - sum;
// }

// let nums = [0,9,7,6,5,2,1,3,4];
// console.log(`Missing number is ${findMissingNumber(nums)}`);

// num = 67898


// const leapYear = (year)=>{
//     if(year%4===0){
//         if(year%100){
//             if(year%400){
//                 return true
//             } else return false
//         }else return true

//     }else return false;
// }
// let year = 2029;
// if(leapYear(year)){
//     console.log(`${year} is a leap year`);
// }
// else{
//     console.log(`${year} is not a leap year`);
// }


/*
---Time complexity---

in simple lang. time complexity tells how much time does an algorith takes to be executed.

3 types of compelxity
1. best case time complexity
2. average case and
3. worst case
*/

// const sumOfDigits = (arr) =>{
//     let sum = 0; // -1
//     for(let i=0;i<arr.length;i++){  //N
//         sum += arr[i] //log(1)
//     }
//     return sum // -1
// }

// time complexity for this will be O(N+2) but as the lenght fo the array increase constant 2 will be ignored so the final time complexity is O(N)




function fn(nums){
    let arr = []; // -1
    for(let i=1;i<nums;i=i*2){ 
        arr.push(i) 
    }
    return arr; // -1
}

/*
let take an exmaple of num = 16.
final arr = [1,2,4,8] i.e time = 4.
here see nums = 16 = 2pow4.
time = log(2)N but the constant 2 can be ignored. so the final time complexity will be 
O(log N).

*/

// time complexity O(log n)


// palindrom of not

// const leapYear = (year) =>{
//     if(year%4===0){
//         if(year%100===0){
//             if(year%400){
//                 return true
//             }
//             else return false
//         }
//         else return true
//     }
//     else return false
// }
// const year = 2021;
// if(leapYear(year)){
//     console.log(`${year} is leap year`);
// }else{
//     console.log(`${year} is not a leap year`);

// }

// const arr = Array.from({ length: 4 }, (_, i) => i * 2); // Creates [0, 2, 4, 6]
// const arr = Array.from(Array(4) , (_, i) => i * 2); // Creates [0, 2, 4, 6]
// console.log(arr);

// const arr = Array.from({length:5},(_,i)=>(i+1)*2).filter((value)=>value>2);

// console.log(arr);

// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];
// let arr1 = new Array();

// const add = arr.push("Ravi");
// console.log(add);
// const del = arr.pop();
// console.log("Deleted item ", del);

// const add = arr.push(1,4,5);

// console.log("unshift applied ", add);

// console.log(arr);

// loop through the array

// arr.forEach((item)=>console.log(item));

// how do you check if the element present in the array or not

// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];
// let elm = "hello";

// find method
// let findElm = arr.find((item)=>item === elm); // time complexity -O(N)
// console.log(findElm);

// includes method
// const findElm = arr.includes(elm);
// console.log(findElm);

// indexOf method
// const findElm = arr.indexOf(elm);
// console.log(findElm);
// console.log(arr[findElm]);

// const findElmAndIndex = (arr, target) =>{
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//      return -1
// }

// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];
// let elm = "hell";

// console.log(findElmAndIndex(arr, elm));

// arr.filter

// how to delete, add or update an array

// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];

// const arrSplice = arr.splice(0,0,"Ravi")
// arr.splice()
// arr.pop()
// console.log(arrSplice);
// console.log(arr);

// slice
// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];

// const subArr = arr.slice(1,3) // [start,end)
// console.log(subArr);

// difference between slice and splice

// slice does not change the original array while the splice change the original array.

// splice used to add delete element(s) from an array and update an array and returns array of the deleted element

// while slice return a sub-array of the original array.

// how to copy elements of an array in js.
// two different types of copy in js one is sallow copy and deep copy.
// 1. shallow copy
// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];
// let arr1  = arr;
// arr1.splice(1,2)
// console.log(arr, arr1);

// in the above example if we make any change in the latest array, it reflectes the change in the original array too that is why we should
// deep copy any array before use.

// // methods for deep copying an array
// let arr = [3,5,"hello",[1,2,3],{name:"Raj"}];
// // method 1
// let arr1 = [...arr];
// // method 2
// let arr2 = Array.from(arr);
// // method 3
// let arr3 = arr.concat();
// arr1.splice(1,2)
// arr2.splice(1,2)
// arr3.splice(1,2)
// // console.log(arr1, arr2, arr);
// console.log(arr3);

// how to add two array in js
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = [...arr1,...arr2];

// console.log(arr1, arr2, arr3);

// how to check if two arrays are equal

// const comapreArray = (arr1, arr2) => {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   for (let i in arr1) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     }
//   }
//   return true
// return arr1.length === arr2.length && arr1.every((_,i)=>arr1[i] === arr2[i])

// };

// const arr1 = [1, 2, 3, 5];
// const arr2 = [1, 2, 3, 7];
// console.log(comapreArray(arr1, arr2));



// sort an array in ascending or descending order

// let arr = [2,1,5,3,8,10]
// console.log(arr.sort());
// console.log(arr.reverse());

// map filter and reduce
// map() = return new array with the result of the condition that has been passed and the nummbe of element will be same of the original array

// const arr = [2,3,4,5,6,7];
// let resultArr = arr.map((elm,i)=>elm*2).filter((elm)=>elm>6).reduce((acc,elm)=>acc+=elm)
// console.log(arr);
// console.log(resultArr);


// LeetCode Array
// 1. two sum

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//first approach this has time complexity of O(N^2)
// const twoSum = (arr, target) =>{
//     let indices = []
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             if((arr[i] + arr[j]) === target)
//                return [i,j]
//         }
//     }
//     return []
// }

// console.log(twoSum([4,6,3,4,5], 6));

//2nd approach
// const twoSum = (nums, target) =>{
//     let map = {};
//     for(let i = 0;i<nums.length;i++){
//         let component = target - nums[i];
//         if(map.hasOwnProperty(component)){
//             return [map[component],i]
//         }
//         map[nums[i]] = i
//     }
// }
 
// let nums = [3,3], target = 6;

// console.log(twoSum(nums,target));


//2. Majority elements
/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

// function majorityElement(nums) {
//     let count = 0;
//     let candidate = null;

//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }

//     return candidate;
// }

// // Example usage
// const nums = [6,5,6,5,6,7,7,6,6];
// // const nums = [2,2,2,2,3,4,5,6];
// console.log(majorityElement(nums)); // Output: 2




// const marjorityElement = (nums) =>{
//     let count = 0;
//     let candidate = null;
//     for(let num of nums){
//         if(count === 0){
//             candidate = num;
//         }
//         count += candidate === num ? 1 : -1
//     }
//     return candidate
// }

// const nums = [2,2,3,4,5,6];

// console.log(marjorityElement(nums));




// 3. Remove Duplicates from Sorted Array


// In-place" means that the operation or algorithm modifies the input data structure (in this case, the array nums) directly, without using extra space for another array or data structure. This is done to save memory and reduce space complexity.

// const removeDublicates = (nums)=>{
//     let uniqueArr = [];
//     for(let num of nums){
//         if(!uniqueArr.includes(num)){
//             uniqueArr.push(num)
//         }
//     }
//     console.log(uniqueArr);
    
//     return uniqueArr.length;
// }

// const nums = [0,0,1,1,1,2,2,3,3,4];
// console.log(removeDublicates(nums));

// best practice

// const removeDublicates = (nums) =>{
//     let k = 1;
//     for(let i= 1;i<nums.length;i++){
//         if(nums[i] !== nums[i-1]){
//             nums[k] = nums[i]
//             k++;
//         }
//     }
//     return k

// }

// const nums = [1,1,2];
// const k = removeDublicates(nums);
// console.log(k);
// // console.log(nums.slice(0,k));
// console.log(nums);


// const nums = [1,1,2];

// nums = [1,2,2];
// console.log(nums);


// majority elements

// use in-place modification algorithm

// function removeDublicates(nums){
//     let k = 1;
//     for(let i=1;i<nums.length;i++){
//         if(nums[i] !== nums[i-1]){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k;
// }
// const nums = [1,2,2,2,3,3,5,6,6,7];
// const k = removeDublicates(nums);
// console.log(k);
// console.log(nums.slice(0,k));







/*Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121] */

// best solution

// const squareSortedArray = (nums) =>{
//     let newArr = [];
//     for(let num of nums){
//         newArr.push(num*num)
//     }
//     return newArr.sort((a,b) => a-b)
// }

// const nums = [-4,-1,0,3,10];
// console.log(squareSortedArray(nums));


// ==== Find pivot index


/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0 */


// best solution


// const pivotIndex = (nums) =>{
//     const totalSum = nums.reduce((acc,num)=> acc + num, 0);
//     let leftSum = 0;
//     for(let i= 0 ;i<nums.length;i++){
//         const rightSum = totalSum - leftSum -nums[i];
//         if(leftSum === rightSum){
//             return i
//         }
//         leftSum += nums[i]
//     }
//     return -1

    
// }

// console.log(pivotIndex([1,7,3,6,5,6]));
// console.log(pivotIndex([1,2,3]));
// console.log(pivotIndex([2,1,-1]));



// . Move Zeroes

// const moveZeroes = (nums) =>{
//     let nonZero = 0;
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i] !== 0){
//             nums[nonZero] = nums[i];
//             nonZero++
//         }
//     }
//     // for(let j  = nonZero;j<nums.length;j++){
//     //     nums[j] = 0
//     // }
//     nums.splice(nonZero,nums.length-nonZero, ...Array(nums.length-nonZero).fill(0))
//     return nums

// }


// const nums = [0,0,0,0,0,0,1];
// console.log(moveZeroes(nums));

// const k = moveZeroes(nums)
// console.log(nums.slice(0,k));
// console.log(nums[nums.length-1]);


/*
Remove element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
const removeElement = (nums, val) =>{
    let k = 0;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
// const nums = [0,1,2,2,3,0,4,2], val = 2
// const k = removeElement(nums, val);
// console.log(k);
// console.log(nums.slice(0,k));



/*
Max consecutive one
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2*/

//first approach
// const maxConsecutive = (nums) =>{
//     let count = 0;
//     let counts = [];
//     for(let i = 0;i<nums.length;i++){
//         if(nums[i]===1){
//             count++;
//         }
//         else{
//             counts.push(count);
//             count = 0;
//         }
//     }
//     return Math.max(...counts)
    
// }
// const nums = [1,0,1,1,0,1];
// console.log(maxConsecutive(nums));


// const maxConsecutive = (nums) =>{
//         let count = 0, maxCount = 0;
//         for(let i = 0;i<nums.length;i++){
//             if(nums[i]===1){
//                 count++;
//                 maxCount = Math.max(maxCount,count);
//             }
//             else{
//                 count = 0;
//             }
//         }
//         return maxCount;
        
//     }
//     const nums = [1,1,0,1,1,1];
//     console.log(maxConsecutive(nums));




















