/*
Objects in javascript

Object is a collection of key value pairs. keys are called as properties or method when the value is a function and the value can be of any datatype including other object, array or the function
*/ 

// example

const person = {
    name: "Raj",
    age:"29",
    skills:["Javascript",'React','Next js'],
    greet:function(){
        return `Hello there this is ${this.name}`
    },
    "life goal":"Make my parents proud on me",
    food:"dal bhat"
}

// methods to access the object
// 1. using dot operator
// console.log(person.age);


// 2. using square bracket
// console.log(person["life goal"]);
// console.log(person.greet());

// function normal(){
//     console.log(arguments);
    
// }
// normal(2,4,8);

// const arrow = (...args)=>{
//     console.log(args);
// }
// arrow(4,8,12);


// 1. how to find the key in an object

// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty("age"));

// how to update an object
person.name = "Rajendra";
// console.log(person.name);

// how to add property 
// person.location = "scarborough";
// console.log(person.location);

// how  to delete property from an object
// delete person.food;
// console.log(person);

// types of object copy in js

// 1. shallow copy
const person2 = person;
// person2.food = "Aama ko hath ko khana";
// console.log(person2);
// console.log(person);

// shallow copy point to the same memory as the original object does or it refers to the same object.

// 2. deep copy
const person3 = Object.assign({}, person);
person3.needs = "Aama baba ko ashirbad";
// console.log(person3);
// console.log(person);



// differece in between freeze and seal method

// freeze method: it does not allow to add, delete or update the key value of an object
// Object.freeze(person);
// person.name = "Pabitra";
// delete person.age;
// console.log(person);

// how to check it the object is being freezed or not
// console.log(Object.isFrozen(person));


// seal method: it also does not allow to add and delete any key or value of an object but it allows to update the value of key
// Object.seal(person);
// person.name = "Pabitra";
// delete person.age;
// person.country = "Nepal";
// // console.log(person);

// // method to check if the object is sealed or not
// console.log(Object.isSealed(person));


// key, values and entries metnod of an object

// keys
// console.log(Object.keys(person)); // returns an array with keys as element
// console.log((Object.values(person))); // returns an array with values as elements
// console.log(Object.entries(person)); // returns arrays of an array with the key and value pair


// Loop through an object
// using for..in
// for(let key in person){
//     console.log(key + ":" + person[key]);
    
// }


// using forEach, need to know that , forEach works in array to need to convert and an object into an array using Onject.Keys method

// Object.keys(person).forEach((key)=>console.log(key + ":" + person[key]));

// how to check if two objects are equal or not

// console.log(Object.is(person,person3)); // returns true if two objects are identical
// can use for loop 
//  let isFlag = true;
//  for(let key in person3){
//     if(person[key] != person3[key]){
//         isFlag = false;
//         break;
//     }
//  }
//  if(isFlag === true){
//     console.log("Two objects are same");
//  } else {
//      console.log("Two objects are not same");
//  }
 

// how to dynamically access object properties
//  --  using []  

// 8.find count of all players

const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};

// const playerCount = (data) => {
//     if(data === null){
//         return {}
//     }

//     let countPlayer = {}
//     for(let player of data.name){
//         countPlayer[player] = (countPlayer[player] || 0) + 1;
//     }
//     const nextPlayerCount = playerCount(data.next);
//     console.log(nextPlayerCount);
    

//     for(let key in nextPlayerCount){
//         countPlayer[key] = (countPlayer[key] || 0) + nextPlayerCount[key]
//     }
//     return countPlayer;
// }

// const countPlayer = playerCount(data);
// console.log(countPlayer)


// 9. explain the concept of prototype and inheritance of object in javascript



/*
1. Number of good pairs
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
*/ 

// first approach

// const countGoodPairs = (nums) =>{
//     // let goodPairs = {};
//     let count = 0;
//     for(let i=0;i<nums.length;i++){
//         for(let j = 0;j<nums.length;j++){
//             if(nums[i]===nums[j] && i<j){
                
//                 // goodPairs[i] = j;
//                 count++;
//             }
//         }
//     }
    
//     // return Object.keys(goodPairs).length;
//     return count
// }
// const nums = [1,2,3,1,1,3];
// console.log(countGoodPairs(nums));

// 2nd approach

// const countGoodPairs = (nums) => {
//     let count = 0;
//     let freqMap = {}; // This will store the frequency of each number
    
//     for (let i = 0; i < nums.length; i++) {
//         if (freqMap[nums[i]]) {
//             count += freqMap[nums[i]]; // Add the current frequency to the count
//             freqMap[nums[i]]++; // Increment the frequency
//         } else {
//             freqMap[nums[i]] = 1; // Initialize the frequency for the first occurrence
//         }
//     }
//     console.log(freqMap);
    
//     return count;
// }

// const nums = [1, 2, 3, 1, 1, 3];
// console.log(countGoodPairs(nums)); // Output: 4


const countGoodPair = (nums) =>{
    let count = 0;
    let refMap = {};
    for(let i = 0;i<nums.length;i++){
        if(refMap[nums[i]]){
            count += refMap[nums[i]]
            refMap[nums[i]]++;
        }else{
            refMap[nums[i]] = 1;
        }
    }
    console.log(refMap);
    
    return count;
}


// const nums = [1, 1, 2,4];
// console.log(countGoodPair(nums));


// const nums = [
//     {
//         id:100,
//         value:220
//     },
//     {
//         id:200,
//         value:443
//     },
//     {
//         id:300,
//         value:200
//     },
//     {
//         id:400,
//         value:900
//     },
//     {
//         id:500,
//         value:800
//     }
// ]

// const highest = nums.reduce((acc, curr)=>{
//     return acc.value > curr.value ? acc : curr
// },nums[0])

// console.log(highest);


/*
2. Count the Number of Consistent Strings
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/

// 1st approach using array and set
const consistentStrCount = (allowed, words) =>{
    let count = 0;
    // const allowedArr = allowed.split("");
    //instead of using array use set whose lookup time is O(1) while array has O(N).
    const allowedSet = new Set(allowed);
    
    for(let word of words){
        let flag = true;
        // for(let i = 0;i<word.length;i++){
        // this can be written as
        for(let char of word){
            // if(!allowedArr.includes(word[i])){
            if(!allowedSet.has(char)){
                flag = false;
                break;
            }
        }
        if(flag) count++
    }
    return count
}

// 2nd appraoch using ab object

const consistentStrCountUsingObj = (allowed, words)=>{
    let count = 0;
    let allowedObj = {};
    for(let char of allowed){
        allowedObj[char] = true;
    }
    for(let word of words){
        let flag = true;
        for(let char of word){
            if(!allowedObj[char]){
                flag = false;
                break
            }
        }
        if(flag) count++;
    }
    return count;
}


// const allowed = "ab", words = ["ad","bd","aaab","baa","badab"];
// console.log(consistentStrCountUsingObj(allowed,words));


/*
2. Two sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/ 

// this is brutal force approach whose time complexity is O(N2)
const twoSum = (nums, target) =>{
    for(let i = 0;i<nums.length;i++){
        for(let j = 0 ;j<nums.length;j++){
            if(target-nums[i] === nums[j] && i!==j){
                return [i,j]
            }
        }
    }
}

// const nums = [3,2,4], target = 6;
// console.log(twoSum(nums, target));


// 2nd approach using object. this has time complexity of O(N).
// const twoSum2 = (nums, target) =>{
//     let map = {};
//     for(let i = 0;i<nums.length;i++){
//         const complement = target - nums[i];
//         if(map[complement] !== undefined){
//             return [map[complement], i]
//         }else map[nums[i]] = i
//     }
//     return []
// }
// const nums = [3,2,4], target = 6;
// console.log(twoSum2(nums, target));


/*
4.Sum of unique elements

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

 

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.*/ 


// first approach
// const sumOfUniqueElemnts = (nums) =>{
//     let uniqueElementObj = {};
//     for(let i = 0;i<nums.length;i++){
//         if(uniqueElementObj[nums[i]]){
//             delete uniqueElementObj[nums[i]]
//         }
//         else uniqueElementObj[nums[i]] = nums[i]
//     }
//     return Object.values(uniqueElementObj).reduce((acc, curr) => acc+curr,0)
    
// }

// 2nd approach- in this approach no need to add and delete an element from an object, instead use the couter and filter those element whose count is only one use reduce method to add. make sure to change key from string to an integer.
// const sumOfUniqueElemnts = (nums) =>{
//     let uniqueElementObj = {};
//     for(let i = 0;i<nums.length;i++){
//         uniqueElementObj[nums[i]] = (uniqueElementObj[nums[i]] || 0) + 1;
//     }
//     return Object.keys(uniqueElementObj).filter(key=>uniqueElementObj[key] === 1).reduce((acc, curr)=>acc+Number(curr),0)
    
// }

// const nums = [1,2,3,2];
// console.log(sumOfUniqueElemnts(nums));


/*
5. Unique Number of Occurrences
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/ 


const uniqueNumberOfOccurance = (arr) =>{
    const elementCount = {};
    for(let i = 0;i<arr.length;i++){
        elementCount[arr[i]] = (elementCount[arr[i]] || 0) + 1;
    }
    let occuranceArr = Object.values(elementCount);
    // let uniqueKey = {};
    // for(let key of occuranceArr){
    //     if(uniqueKey[key] !== undefined) return false
    //     else uniqueKey[key] = key;
    // } 
    // return true   
    // the above code can be more simplier using set

    let occuranceSet = new Set(occuranceArr);
    return occuranceArr.length === occuranceSet.size;
}

const arr = [-3,0,1,-3,1,1,1,-3,10,0];
// console.log(uniqueNumberOfOccurance(arr));





/*
6. Interger to roman
*/ 

// const integerToRoman = (num) =>{
//     let result = "";
//     const romanSymbols = [
//         {value:1000,symbol:'M'},
//         {value:900,symbol:"CM"},
//         {value:500,symbol:"D"},
//         {value:400,symbol:"CD"},
//         {value:100,symbol:"C"},
//         {value:90,symbol:"XC"},
//         {value:50,symbol:"L"},
//         {value:40,symbol:"XL"},
//         {value:10,symbol:"X"},
//         {value:9,symbol:"IX"},
//         {value:5,symbol:"V"},
//         {value:4,symbol:"IV"},
//         {value:1,symbol:"I"}
//     ]

//     for(let i = 0;i<romanSymbols.length;i++){
//         while (num >= romanSymbols[i].value) {
//             result += romanSymbols[i].symbol;
//             num -= romanSymbols[i].value;
//         }
//     }
//     return result;
// }

function intergerToRoman(num){
    const romanSymbol = [
        {value:1000,symbol:"M"},
        {value:900,symbol:"CM"},
        {value:500,symbol:"D"},
        {value:400,symbol:"M"},
        {value:100,symbol:"C"},
        {value:90,symbol:"XC"},
        {value:50,symbol:"L"},
        {value:40,symbol:"XL"},
        {value:10,symbol:"X"},
        {value:9,symbol:"IX"},
        {value:5,symbol:"V"},
        {value:4,symbol:"IV"},
        {value:1,symbol:"I"}
    ];
    let result = "";

    for(let i = 0 ;i<romanSymbol.length;i++){
        while(num>=romanSymbol[i].value){
            result += romanSymbol[i].symbol;
            num -= romanSymbol[i].value;
        }
    }
    return result
}



// const obj = {
//     id:200,
//     name:"Pabi",
//     address:"16 madrid street",
//     salary:130000
// };

// const arrOfArr = Object.entries(obj);
// const arrOfObject = arrOfArr.map(([key, value]) =>({name:key, value}));
// console.log(arrOfObject);



/*
8. Longest substring without repeating characters
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/ 

const longestSubstring = (str) =>{
    let left = 0, maxlength = 0, charSet = new Set();
    for(let right = 0;right<str.length;right++){
        while(charSet.has(str[right])){
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);
        maxlength = Math.max(maxlength, right-left + 1);
    }
    console.log([... charSet].join(""));
    
    return maxlength;
    
}

// const str = "Ramm";
// console.log(longestSubstring(str));






/*
program to draw the following patterns

******
*    *
*    *
*    *
******

*/

// const drawPattern = () =>{
//     let m=6, n =5;
//     for(let i = 1;i<=n; i++){
//         if(i === 1 || i===n){
//             console.log("*".repeat(m));
//         }
//         else{
//             console.log("*" + " ".repeat(m-2) + "*");
            
//         }
//     }
// }

// drawPattern();



const drawPattern = ()  =>{
    let m = 6, n = 5;
    for(let i = 1;i<=n;i++){
        if(i === 1 || i === n){
            console.log("*".repeat(m));
        }else{
            console.log("*" + " ".repeat(m-2) + "*");
        }
    }
}
drawPattern();

















