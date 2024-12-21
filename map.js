/*
Map in js is store the value in key-value pair format same as an object but the key in map can be of any type but in object, it always should be a string.
*/ 

// initialization of a map.
const map = new Map();

// initialization of a object.
const obj = new Object();

// key of map could be any type here an integer 
map.set(29,"age")

obj.age = 29;

// Properties and method of map in js
//1. set() property this is used to add the key-value to a map and also used to update the map.
map.set("name","Raj");
map.set("name","Rajendra");
obj.name = "Rajendra";
map.set("location","Scarborough");
// 2. get() this method give the value associated with the given key
// console.log(map.get("name"));

// 3. delete() - this method deletes the value assocaited with the given key and returns true if the key was present in the map or else false

// console.log(map.delete("location"));

// 4. has() returns true if they is present in the map or else false

// console.log(map.has("name"));

// 5. keys() => returns the keys of map

// 6. difference between map and object is that, map is iterable
// iteration on map. while iteration using forEach, it returns value before the key
// map.forEach((value,key)=>{
//     console.log(`${key} : ${value}`);
// })

// we cannot perform iteration over object using forEach() method but we can iterate using keys() or values() or entries() method
// Object.keys(obj).forEach((key)=>{
//     console.log(`${key} : ${obj[key]}`);
// })


/*
1. Sort Characters By Frequency

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/ 



const sortCharacter = (s) =>{

    // step1 - calculate the frequency
    let charMap = new Map();
    for(let char of s){
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }
    
    // step2 - sort the character of map according to the frequency
    let charArr = [...charMap.keys()].sort((a,b)=>charMap.get(b)-charMap.get(a));
    // let charArr = [...charMap.keys()] this part retuns the keys as an array.
    //sort((a,b)=>charMap.get(b)-charMap.get(a)); this part sort the keys in array as per their frequency present in the map in descending order 

    // create the result string
    let resultStr = "";
    for(let char of charArr){
        resultStr += char.repeat(charMap.get(char))
    }
    return resultStr
}

const  s = "Aabb";
// console.log(sortCharacter(s));


// Weak Map 
// const weakMap = new WeakMap();
// it is kind of map which stores only the object and function as key where as the map can store the key of any data type


const newMap = new Map([["name","Raj"],["post","HR"]]);
// console.log(newMap);



/*
Difference between object and Map
1. Map stores the data only in key-value pair format while object can store fucntion as value.

2. in object key can only be of string data type while in map it can be of any data type

3. map is iterable while object is not

4. object contains numerous default keys which make it more heavy while map does not contains such keys which results high performance of the map as compare to the object

5. we can find the size of a map but we cannot find the size of an object

*/ 


let obj1 = {
    id:100,
    name:"Rajendra",
    age:"28"
}

// while Iterating
// in for loop it return key before the value while in forEach iteration, it returns value before the key
// for(let [key, value] of map){
//     console.log(key ,value);
// }

// map.forEach((value, key)=>{
//     console.log(key, value);
// })

const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = new Map();

arr.forEach((fruit)=>{
    fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1)
})

// console.log(fruitCount);


/* Difference in between object and map
Maps maintain the insertion order, while the order of keys in an object is not guaranteed.
Maps can have keys of any type, whereas object keys are always strings or symbols.
A Map has a size property that lets you directly check the number of entries, while objects require manual counting.
*/ 


// we cannot iterate over an object but we can change an object into an array for iteration as folllows.

// for(let [key, value] of Object.entries(obj)){
//     console.log(key ,value);
    
// }

// Object.keys(obj) // returns an array containing keys as element
// object.values(obj) // returns an array containig values as element.

// console.log(obj.hasOwnProperty("name"));



// some advance concept and technologies in Map
/*
1. Chaining Operations
Maps support chaining because most of their methods return the Map itself. For example, you can add multiple key-value pairs in a chain:
const map = new Map()
    .set('name', 'Raj')
    .set('age', 25)
    .set('profession', 'Developer');

console.log(map);

2. Using Complex Keys
In a Map, keys can be of any type—objects, functions, even other maps. This isn't possible with plain objects, where keys are always strings or symbols.

const objKey = { id: 1 };
const funcKey = () => 'key';

const map = new Map();
map.set(objKey, 'Object Key');
map.set(funcKey, 'Function Key');

console.log(map.get(objKey)); // Output: Object Key
console.log(map.get(funcKey)); // Output: Function Key

3. Iterating Over a Map
You can iterate over a map in various ways. Here are some methods:

map.keys(): Returns an iterator of the keys.
map.values(): Returns an iterator of the values.
map.entries(): Returns an iterator of [key, value] pairs (default iteration behavior for maps).
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// Iterate over keys
for (let key of map.keys()) {
    console.log('Key:', key);
}

// Iterate over values
for (let value of map.values()) {
    console.log('Value:', value);
}

// Iterate over [key, value] pairs
for (let [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}

4. Converting a Map to an Array or Object
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// Convert to an array
const arr = Array.from(map);
console.log(arr); // Output: [['a', 1], ['b', 2], ['c', 3]]

// Convert to an object
const obj = Object.fromEntries(map);
console.log(obj); // Output: { a: 1, b: 2, c: 3 }


*/ 


/*
1. Count Occurrences in an Array:

Given an array of integers, find the frequency of each element.
Solution: Use a Map to store the frequency of each element and iterate over the array to update the counts.
*/ 

const countOccurance = (nums) =>{
    const numMap = new Map();
    for(let num of nums){
        numMap.set(num, (numMap.get(num) || 0) + 1)
    }
    return numMap;
}

// const nums = [3,4,3,5,4,5,6,7,8,7,8,5,6,4,3];
// console.log(countOccurance(nums));


/*
2. Find the First Non-Repeating Character in a String:

Given a string, find the first character that doesn't repeat.
Solution: Use a Map to keep track of character counts, then iterate over the string to find the first character with a count of one
*/

const nonRepeatChar = (str) =>{
    const charMap = new Map();
    for(let char of str){
        charMap.set(char, (charMap.get(char) || 0) + 1)
    }

    for(let char of str){
        if(charMap.get(char) === 1) return char
    }
    return "no non repeative character"
}
// const str = "strstrastrc";
// console.log(nonRepeatChar(str));


/*
3.Group Anagrams Together:
Given an array of strings, group anagrams together.
Solution: Use a Map where the key is the sorted string and the value is a list of anagrams
*/ 


const groupAnagram = (strings) =>{
    let anagramMap = new Map();
    for(let str of strings){
        let sortedStr = str.split("").sort().join(""); 
        // first approach.
        // if(anagramMap.has(sortedStr)){
        //     let anagramGroup = [...anagramMap.get(sortedStr), str];
        //     anagramMap.set(sortedStr, anagramGroup)
        // }
        // else{
        //     anagramMap.set(sortedStr,[str])
        // }
        // 2nd approch and effective approach.
        if(!anagramMap.has(sortedStr)){
            anagramMap.set(sortedStr,[])
        }
        anagramMap.get(sortedStr).push(str)
    }
    return Array.from(anagramMap.values())
}
// const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagram(strings));


/*
4.Two Sum Problem:
Given an array of integers and a target sum, find the indices of two numbers that add up to the target.
Solution: Use a Map to store the difference between the target and each element, checking for matches.
*/ 

// const twoSum = (nums,target) =>{
    // for(let i = 0;i<nums.length-1;i++){
    //     for(let j = 1;j<nums.length;j++){
    //         let reminder = sum - nums[i];
    //         if(reminder === nums[j]) return [i,j]
    //     }
    // }
    // return []

//  while using for..in it return the indices as a string.
const twoSum = (nums,target) =>{
    let map = new Map();
    for(let index in nums){
       let complement = target - nums[index];
       if(map.has(complement)){
        return [+map.get(complement), +index]
       }
       else{
        map.set(nums[index],index)
       }
    }
    return map
}
// const nums = [3,3,5,1,6,7], target = 6;
// console.log(twoSum(nums, target));


/*
5.Subarray Sum Equals K:
Given an array of integers, find the number of continuous subarrays that sum up to a given value k.
Solution: Use a Map to store the cumulative sum at each index and check for the existence of (current sum - k).
*/ 

// This is not so effective for all the case
// const subArraySum = (nums, target) =>{
//     const map = new Map();
//     for(let i = 0 ;i<nums.length;i++){
//         if(nums[i] + nums[i+1] === target){
//             map.set(i, [i,i+1])
//         }
//     }
//     return map.size;
    
// }
// const nums = [3,3,5,1,6,7], target = 6;
// console.log(subArraySum(nums, target));

const subArraySum = (nums, target) => {
    const map = new Map();
    map.set(0, 1); // Initialize map with sum 0 and frequency 1
    let count = 0;
    let currentSum = 0;

    for (let num of nums) {
        currentSum += num; // Update the cumulative sum

        // Check if (currentSum - target) exists in the map
        if (map.has(currentSum - target)) {
            count += map.get(currentSum - target); // Add the number of times this sum has occurred
        }

        // Update the map with the current sum
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }
    return count; // Return the total count of subarrays that sum to target
};

// const nums = [3, 3, 5, 1, 6, 7,6,0,2,4];
// const target = 6;
// console.log(subArraySum(nums, target));


// itration over a map
for(let [key, value] of map){
    console.log(key, value);
}

// iteration over an object
for(let [key, value] of Object.entries(obj)){
    console.log(key, value);
}




