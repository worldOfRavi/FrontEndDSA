// Set in JavaScript
// What is a Set?
// A Set is a built-in JavaScript object that lets you store unique values of any type, whether primitive values or object references.
// Unlike arrays, sets do not allow duplicate values.

// how to initialize and define a Set in js
const set = new Set([2, 5, 6, 7]);

// properties and methods in js
// 1. add() -  add new element at the end of a set and returns the new resultant set.
// console.log(set.add(56));

// 2. delete() - it deletes the element if it presents in the set and returns true or else false.
// console.log(set.delete(56));

// 3. clear() -  clear the whole set.

// 4. iteration over a set.
for (let x of set.keys()) {
  // console.log(x);
}

for (let x of set.values()) {
  // console.log(x);
}

// set.forEach((val1, val2)=>{
//     console.log(val1, val2);

// })
// console.log(set);

// Real-Time Usage Examples of Sets

// 1. Removing Duplicate Values from an Array:

// const numbers = [1, 2, 3, 4, 2, 3, 5, 1];
// const uniqueNums = [... new Set(numbers)]
// console.log(uniqueNums);

// 2. Checking for Unique Characters in a String:

// const uniqueChar = (str) =>{
//     const charSet = new Set(str);
//     return charSet.size === str.length;
// }

// console.log(uniqueChar("hello"));
// console.log(uniqueChar("world"));

// 3. Finding Common Elements Between Two Arrays:
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// const set1 = new Set(arr1);
// const uniqueElm = arr2.filter((elm)=> set1.has(elm));
// console.log(uniqueElm);

// 4. union of two arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// const unionArr = [... new Set([...arr1, ...arr2])];
// console.log(unionArr);

/*
Differences Between Set and Array
1. Sets do not allow duplicate values, whereas arrays do.
2. Sets have faster access for checking existence (O(1) time complexity).
3. Sets do not support random access like arrays (e.g., array[0]).
*/

// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];

// const set1 = new Set(arr1);
// const intersectionArr = arr2.filter((num) => set1.has(num))
// console.log(intersectionArr);

/*
1. Contains dublicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.
*/
// const containsDuplicate = (nums) =>{
//     const map = new Map();
//     for(let num of nums){
//         map.set(num, (map.get(num)|| 0) + 1)
//     }
//     for(let [key, value] of map){
//         if(value>1) return true
//     }
//     return false;
// }
// const num = [1,1,1,3,3,4,3,2,4,2];
// console.log(containsDuplicate(num));

/*
2. Intersection of two arrays 
*/

const insersection = (num1, num2) => {
  const set1 = new Set(num1);
  return [...new Set(num2)].filter((num) => set1.has(num));
};

// const  nums1 = [1,2,2,1], nums2 = [2,2];
// console.log(insersection(nums1, nums2));

/*
3. Distribute candies
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

 

Example 1:

Input: candyType = [1,1,2,2,3,3]
Output: 3
Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.
Example 2:

Input: candyType = [1,1,2,3]
Output: 2
Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.
Example 3:

Input: candyType = [6,6,6,6]
Output: 1
Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.
*/

// const distributeCandy = (candyType) =>{
//     const mapCandy = new Map();
//     const MaxCandyCanEat = candyType.length/2;

//     let numberOfCandyCanEat = 0;
//     // this is the first approach using map
//     for(let candy of candyType){
//         mapCandy.set(candy, (mapCandy.get(candy) || 0) + 1)
//     }

//     for(let i  = 0 ;i<mapCandy.size;i++){
//         if(numberOfCandyCanEat < MaxCandyCanEat){
//             numberOfCandyCanEat += 1;
//         }
//     }
//     return numberOfCandyCanEat;
// }

// 2nd approach using set
const distributeCandy = (candyType) => {
  const setCandy = new Set(candyType); // automatically takes the unique candy type.
  const maxCandyCanEat = candyType.length / 2; // take the max number of candy alice can eat.

  return Math.min(setCandy.size, maxCandyCanEat); // return the number candy she can eat.
};

// const candyType =[1,1,2,3]
// console.log(distributeCandy(candyType));

// 4. Longest Consecutive Sequence

// const longestConSeq = (nums) =>{

//     const numset = new Set(nums); // this removes the duplicate  num from the nums array and  allows 𝑂(1)O(1) average time complexity for lookup.
//     let longestStreak = 0;
//     for(let num of numset){ // iterate through the numset

//             if(!numset.has(num-1)){  // if numSet does not have num-1 then num will be the start of the sequence.
//                 let currentNum = num;
//                 let currentStreak = 1;

//                 while(numset.has(currentNum+1)){ // loop till the num has its consecutive sequence in the numSet.
//                     currentNum++;
//                     currentStreak++;
//                 }
//                 longestStreak = Math.max(longestStreak, currentStreak); // compare between the previous longestStreak and the currentStreak.
//             }
//     }
//     return longestStreak //finally returns the longestStreak which will be maximum length of the consecutie sequence number.
// }

// const nums = [0,5,0,4,3,1,2,100,200,11,13,12,15,14,16,18,19,17]
// console.log(longestConSeq(nums));

/*
5. Happy number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
*/

const happyNumber = (num) => {
    const seenSums = new Set(); // this set will contain the square already seen numbers
  if (num < 0) return false;
  while (num !== 1) { // loop utlil the num will be 1 that is it is happy number.
    let squareSum = 0;
    while (num > 0) { // this loop will find the square of the number
      let lastDigit = num % 10;
      squareSum += lastDigit ** 2;
      num = Math.floor(num / 10);
    }
    if(seenSums.has(squareSum)) return false // if the number got repetition it means that it got it loop and it is not a happy number
    seenSums.add(squareSum)
    num = squareSum
  }
  return true
};
// let num = 7;
// console.log(happyNumber(num));


// 6. First Unique Character in a String

const uniqueCharacter = (str) =>{
    const strMap = new Map();
    for(let i = 0;i<str.length;i++){
        strMap.set(str[i], (strMap.get(str[i]) || 0) + 1)
    }
    // this is not good practice to iterate over the map as it does not guarantee that the index will be at the same position
    // for(let key of strMap.keys()){
    //     if(strMap.get(key) === 1) return str.indexOf(key);
       
    // }

    // Iterate through original string to get the first unique character index
    for(let i = 0;i<str.length;i++){
        if(strMap.get(str[i]) === 1) return i;
    }
    return -1
    
}
// const str =  "leetcode";
// console.log(uniqueCharacter(str));



/*
7. Find common characters.
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]

*/ 

// const commonCharacters = (words) =>{
//     let charMap = new Map();
//     let resultArr = [];
//     for(let word of words){
//         for(let i = 0;i<word.length;i++){

//         }
//     }
    
// }
// const words = ["bella","label","roller"];
// console.log(commonCharacters(words));

const words = ["bella","label","roller"];


// const charMap = new Map();
// vaious method for creating object and map from a string
const charObj = {}; // normal using for loop to create a map object
for(let char of words[0]){
    charObj[char] = (charObj[char] || 0) + 1;
}
// console.log(charObj);

const charMap = new Map(); // using for loop for creating map
for(let char of words[0]){
    charMap.set(char, (charMap.get(char) || 0) + 1)
}
// console.log(charMap);

let baseFrequency = Array.from(words[0]).reduce((acc, char)=>{ // using reduce function to create a map object.
    acc[char] = (acc[char] || 0) + 1
    return acc
},{})
// console.log(baseFrequency);


// using reduce function to create a map

let mapFrequency = Array.from(words[0]).reduce((acc, char)=>{
    acc.set(char, (acc.get(char)|| 0 ) + 1)
    return acc
}, new Map());
// console.log(mapFrequency);



// 1. first solution using plain object

const commonChars = (words) => {
    // Initialize the character frequency map with the first word
    let baseFrequency = Array.from(words[0]).reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    // Iterate through each remaining word to update baseFrequency
    for (let i = 1; i < words.length; i++) {
        let currentFrequency = Array.from(words[i]).reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

        // Update baseFrequency to keep the minimum count for each character
        for (let char in baseFrequency) {
            if (currentFrequency[char]) {
                baseFrequency[char] = Math.min(baseFrequency[char], currentFrequency[char]);
            } else {
                delete baseFrequency[char]; // Remove char if not in all words
            }
        }
    }

    // Construct the output array based on the final baseFrequency map
    const result = [];
    for (let char in baseFrequency) {
        console.log(baseFrequency[char]);
        
        result.push(...Array(baseFrequency[char]).fill(char));
    }

    return result;
};
// Test cases
// console.log(commonChars(["bella", "label", "roller"])); // Output: ["e", "l", "l"]
// console.log(commonChars(["cool", "lock", "cook"]));     // Output: ["c", "o"]


// 2. Second solution using map
const commonChar = (stringArr) =>{
    //1. create charFrequency for the first word of the array
    let baseFrequency = Array.from(stringArr[0]).reduce((acc, char)=>{ 
        acc.set(char, (acc.get(char) || 0) + 1)
        return acc
    },new Map());

    // 2. iterate over the remaining word of the array
    for(let i = 1;i<stringArr.length;i++){
        // create currentFrequency with the current word
        let currentFrequency = Array.from(stringArr[i]).reduce((acc, char)=>{
            acc.set(char, (acc.get(char) || 0) + 1)
            return acc
        }, new Map());

        
        for(let char of baseFrequency.keys()){
            if(currentFrequency.has(char)){ 
                // this will handle the duplicate char i.e if a char presents twice in first word and once in the second word, that means only once char is common that is why we take the min value.
                baseFrequency.set(char, Math.min(baseFrequency.get(char), currentFrequency.get(char)))
            }
            else {
                baseFrequency.delete(char)
            }
        }
    }
    let result = [];
    for(let char of baseFrequency.keys()){
        result.push(...Array(baseFrequency.get(char)).fill(char))
    }
    return result;
}
// const stringArr = ["bella", "label", "roller"];
// console.log(commonChar(stringArr));




//7. Sort Characters By Frequency
const sortCharacter = (str) =>{
    const charMap = Array.from(str).reduce((acc, char) =>{
        acc.set(char, (acc.get(char) || 0) + 1)
        return acc
    }, new Map());
    let result = "";
    [...charMap.keys()].sort((a,b)=>charMap.get(b)  - charMap.get(a)).forEach((char)=>{
        result += char.repeat(charMap.get(char))
    })
    return result;
} 
// const str = "Aabb";
// console.log(sortCharacter(str));


// 8. First Unique Character in a String
const firstUniqueCharacter = (str) =>{
    const charMap  = Array.from(str).reduce((acc, char)=>{
        acc.set(char, (acc.get(char) || 0) + 1)
        return acc
    }, new Map());
    
    for(let i = 0;i<str.length;i++){
        if(charMap.get(str[i]) === 1) return i
    }
    return -1
}

// const str  =  "aabb"
// console.log(firstUniqueCharacter(str));


/*9.  Longest Substring Without Repeating Characters
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

// solution using sliding window approach...
const longestSubstring = (str) =>{
    let longetStr = 0, left = 0,right = 0;
    let charMap = new Map();
    for(let right = 0;right<str.length;right++){
        while(charMap.has(str[right])){
            charMap.delete(str[left]);
            left++
        }
        charMap.set(str[right], str[right])
        longetStr = Math.max(longetStr, right - left + 1)
    }
    console.log(charMap);
    
    return longetStr
}

const str = "abcabcbb";
console.log(longestSubstring(str));


