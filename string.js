let firstName = "Rajendra";

// console.log(firstName.length);

// console.log(firstName.indexOf('a'));
// console.log(firstName.charAt(1));

// console.log(firstName.charCodeAt(1));
//  let secondName = "Vishal is the best coder, Vishal ..."

// console.log(firstName.includes(secondName));
// console.log(firstName.localeCompare(secondName));

// console.log(secondName.split(" "));

// console.log(secondName.substring(0,10));
// console.log(secondName.replaceAll("Vishal", "Rajendra"));
// console.log(secondName.replace("/Vishal/g", "Rajendra"));
// console.log(firstName.slice((1)));

// const orderedFiles = ["rajendra", 'pabitra'];

// const fileNames = orderedFiles.map((filename)=>{
//     return filename.charAt(0).toUpperCase() + filename.slice(1);
// })

// console.log(fileNames);

// console.log(firstName.slice(1));

// Exercises
// 1. Find the Index of the First Occurrence in a String
// curd
// function findIndex (haystack, needle){
//     const haystackLen  = haystack.length;
//     const needleLen = needle.length;
//     for(let i =0;i<=haystackLen - needleLen;i++){
//         // if(haystack.slice(i,i+needleLen) === needle){
//         //     return i
//         // }
//         if(haystack.substr(i,needleLen) === needle){
//             return i
//         }

//     }
//     return -1
// }

// const haystack = "leetcode";
// const needle = "tcod";
// console.log(findIndex(haystack, needle));

/*
the most important difference between slice and substr
slice(strt,end) = here end denotes index of the element of an array or string and it is excluded while
substr(strt,end) = here end is the number of element 

so keep in mind of these things while using slice and substr
*/

// console.log(haystack.substring(5,2));
// console.log(haystack.slice(2,5));

/* 2. reverse the string using in-place algorith
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */

// 1. first approach, this is not acceptable  as it is using an extra array that growes with the number of input size
// but according to the question, we are allowed to use any extra variable but not the large data structure like array or object that grows with the input size
// function reverseString(str){
//     const strLen = str.length;
//     const originalStr = [...str]
//     for(let i = 0;i<strLen;i++){
//         str[i] = originalStr[strLen-(i+1)]
//     }
//     console.log(`Original str ${originalStr}`);

//    console.log(`Reversed str ${str}`);

// }

// let str = ['h','e','l','l','o'];
// reverseString(str);

// 2. best approach.in this, no any extra data structure created only two constant variables are created.

// const reverseString = (str) =>{
//     let left = 0;
//     let right = str.length -1;
//     while(left < right){
//         [str[left],str[right]] = [str[right],str[left]];
//         left++;
//         right--
//     }
//     console.log(`Reversed array of characters ${str}`);

// }
// const str = ['h','e','l','l','o'];
// reverseString(str);

// another program to reverse a string
// const  reverseString = (str) =>{
//     return str.split("").reverse().join("");

// }
// const str = "hello";
// console.log(reverseString(str));

/*
===Valid Anagram
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true
*/

/* 1. first appoach using fort() method, but the time complexity of sort is O(nlogn) so try to avoid using sort*/
// function checkAnagram(str1, str2){
//     return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(checkAnagram("anagram", "nagaram"));

/*2nd approach without using sort, this is optimized method*/

// function checkAnagram(str1, str2){
//     if(str1.length !== str2.length) return false

//     let charCount = {};
//     for(let char of str1){
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for(let char of str2){
//         if(!charCount[char]) return false
//         charCount[char]--;
//     }
//     return true
// }

// console.log(checkAnagram('anagram', 'nagaran'));

/*
Longest common prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.*/

// const longestCommonPrefix = (strs) =>{
//     if(strs.length === 0) return ""
//     let prefix = strs[0];

//     for(let i = 1;i<strs.length;i++){

//         while(strs[i].indexOf(prefix) !==0){
//             prefix = prefix.slice(0,-1);
//             if(prefix === "") return ""
//         }
//     }

//     return prefix;

// }

// // const strs = ["flower","flow","flight"];
// const strs = ["dog","racecar","car"];
// // console.log(longestCommonPrefix(strs));

/*
length of last word
*/

// 1. first approach but this is using split which will use extra space.
// function lengthOfLastWord(s){
//     const arr = s.trim().split(" ");
//     return arr[arr.length-1].length;
// }
// const s ="luffy is still joyboy"
// console.log(lengthOfLastWord(s));

// 2. another approach without using split method

// function lengthOfLastWord(s){
//     let count = 0;
//     let end = s.length-1;
//     // to remove any extra white space
//     while(end>=0 && s[end] === " "){
//         end--;
//     }
//     while(end>=0 && s[end] !== " "){
//         count++;
//         end--;
//     }
//     return count
// }

// const s = "  moon  ";
// console.log(lengthOfLastWord(s));

/*
valid palindrom
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

// const palindrom = (phrase) =>{
//     let cleanedPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g,"");
//     console.log(cleanedPhrase);
//     let left = 0;
//     let right = cleanedPhrase.length -1;
//     while(left<right){
//         if(cleanedPhrase[left] !== cleanedPhrase[right]) return false
//         left++;
//         right--;
//     }
//     return true

// }

// let phrase = "A man, a plan, a canal: Panama";
// console.log(palindrom(phrase));

/*
String compression


Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

 

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".*/

function compressString(char) {
    let compressedStr = "";
    let count = 1;
    let client = chars[0];
    for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === client) {
      count++;
    } else {
      compressedStr += client;
      if (count > 1) {
        compressedStr += count;
      }
      client = chars[i];
      count = 1;
    }
  }

  for (let i = 0; i < compressedStr.length; i++) {
    chars[i] = compressedStr[i];
  }
  return compressedStr.length;
}

// const chars = ["a", "a", "b", "b", "c", "c", "c"];
// const compressedStrLength = compressString(chars);
// console.log(compressedStrLength);
// console.log(chars.slice(0,compressedStrLength));

/*
Reverse words in a string

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/

// const reverseWord = (s)=>{
//     let wordsArr = s.trim().split(" ");
//     let finalArr = wordsArr.filter((word)=>word != "");
//     let left = 0;
//     let right = finalArr.length -1;
//     while(right>left){
//         [finalArr[left],finalArr[right]] = [finalArr[right],finalArr[left]];
//         left++;
//         right--;
//     }
//     console.log(finalArr.join(" "));

// }

// const s ="  hello world  "
// // reverseWord(s);

// // 2nd approach in short form

// function reverseWordsOfString(str){
//     return str.trim().split(/\s+/).reverse().join(" ");
//     //here s+ is a regular expression which denotes any whitespace like tab space or a new line
// }

// const str ="  hello world  "
// console.log(reverseWordsOfString(str));

/*
Reverse vowel of a string
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"
*/

// const vowelReverse = (s) => {
//   const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "u"]);
//   let arr = s.split("");
//   let left = 0;
//   let right = arr.length - 1;
//   while(left<right){
//     if(!vowels.has(arr[left])){
//         left++
//     }
//     else if(!vowels.has(arr[right])){
//         right--;
//     }
//     else{
//         [arr[left],arr[right]] = [arr[right],arr[left]];
//         left++;
//         right--;
//     }
//   }
//   return arr.join("");
  
// };

// let s = "leetcode";
// console.log(vowelReverse(s));

/*
Rotate string
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
*/

// 1. first approach
// const RotateString = (s,goal) =>{
//     for(let i = 0;i<s.length;i++){
//        s = s.slice(1) + s[0];
//        if(s===goal){
//         return true
//        }
//     }
//     return false
// }
// let s = "abcde";
// let goal = "eabcd"
// // console.log(RotateString(s,goal));


// // 2. 2nd approach
// function stringRotation(str,aim){
//     return str.length === aim.length && (str+str).includes(aim)
// }
// let str = "abcde";
// let aim = "eabcd"

// console.log(stringRotation(str, aim));


/*
Merge Strings Alternately
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 
*/

// const MergeAlternateString = (str1,str2)=>{
//     let mergedString = "";
//     const maxLen = Math.max(str1.length, str2.length);
//     for(let i = 0;i<maxLen;i++){
//         if(str1[i]){
//             mergedString += str1[i]
//         }
//         if(str2[i]){
//             mergedString += str2[i]
//         }
//     }
//     console.log(mergedString);
    
    
// }
// let str1 = "abcd"; 
// let str2 = "pqrstuv";
// MergeAlternateString(str1,str2)














