// 1. sum of natural number from 1 to n
// const n = 10;
// let sum = 0;
// for(let i =1;i<=n;i++){
//     sum += i;
// }
// console.log(`som of ${n} nattural number is ${sum}`);

//using function
// const num = 5;
// const sumOfNaturalNumber = (num)=>{
    // let sum = 0;
    // for(let i =1;i<=n;i++){
    //         sum += i;
    //     }
        // return num*(num+1)/2
    // return sum 
// }

// console.log(`Sum of number is ${sumOfNaturalNumber(num)}`);

//2.  sum of digits of number use while loop

// let number = 23456;

// function sumOfDigits(number){
//     let sum  = 0;
//    while(number>0){
//     sum += number%10;
//     number = Math.floor(number/10);
//     }
//     return sum;
// }

// console.log(sumOfDigits(number));

//3. count the number of digits of a number

// let number = 9778987656;

// const countfDigits = (num)=>{
//     if(isNaN(num)){
//         return "Not a number"
//     }
//     num = Math.abs(num)
//     let count = 0;
//     do{
//         count ++;
//         num = Math.floor(num/10);
//     }while(num>0);
//     return count
// }

// console.log(countfDigits(12345));
// console.log(countfDigits(-123423345));
// console.log(countfDigits("-123423345sf"));

// 4. find the reverse of the number

// const reverseNumber  = (num) =>{
//     let reverseNumber = 0;
//     while(num>0){
//         reverseNumber = reverseNumber * 10 + num%10;
//         num = Math.floor(num/10);
//     }
//     return reverseNumber
// }
// let num = 12345

// console.log(`Reverse of ${num} is ${reverseNumber(num)}`);

// 5. palindrom 
// 11211
// const palindrom = (num) =>{
//     if(isNaN(num)){
//         return "Not a number";
//     }
//     let reversedNum = reverseNumber(num);
//     if(num === reversedNum){
//         console.log(`${num} is a palindrom number`);
//     }else{
//         console.log(`${num} is not a palindrom number`);
//     }

// }



const palindrom  = (num)=>{
    num = Math.abs(num);
    let originalNumber = num;
    let reverseNumber = 0;
    while(num>0){
        reverseNumber = reverseNumber * 10 + num%10;
        num = Math.floor(num/10);
    }
    if(reverseNumber == originalNumber){
        console.log(`${originalNumber} is a palindrom number`);
    }
    else{
        console.log(`${originalNumber} is not a palindrom number`);
    }
}

palindrom(121);


// 6. fabonacci series
//fabonacci series
// const fabonacci = (num)=>{
//     if(num<2){
//       return num;
//     }
//     let prev = 0, curr = 1, next;
//     for(let i=2;i<=num;i++){
//       next = prev + curr;
//       prev = curr;
//       curr = next
//     }
//     return next;
//   }
//   let num = 6;
  
//   console.log(`fabonacci series of F${num}  = ${fabonacci(num)}`)

// 7. write a program to find the missing number from the givin array
/*
example
input = [3, 0, 1];
output = 2
explanation: n=3 since there are 3 numbers so all are in range [0-3] so 2 is the missing number since it does not appear in the input array

*/

const missingNumber = (arr) => {
    let sum = 0;
    for(let elm of arr){
      sum += elm
    }
    // console.log(sum)
    let totalSum = arr.length*(arr.length+1)/2;
    // console.log(totalSum)
    console.log(`Missing number is ${totalSum - sum}`)
  };
  
  let arr = [3,0,1];
  missingNumber(arr);