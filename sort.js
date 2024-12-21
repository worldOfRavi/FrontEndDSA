// sort in array by default consider the element of an aray as a string and sorts the array.
// for example array [1000,5, -7, -2] its output will be [-2, -7, 1000, 5];

// but to sort in proper manner in ascending order need to give a compare function as following.
// const arr = [1000,5, -7, -2];
// console.log(arr.sort((a,b)=>a-b));


// similarly to sort in proper manner in descending order need to give a compare function as following.
// const arr = [1000,5, -7, -2];
// console.log(arr.sort((a,b)=>b-a));

// let name = "Rajendra";
// console.log(name.split("").sort().join(""));




/*
1. Bubble Sort in Javascript

In bubble sort, pointer goes through each and every element of an array and check if the next element is smaller then the current element, then swipe those element until all the elements are sorted to their correct position.
Example is given below.

Time complexity:
in best case TC. O(N).
In worst case T.C = O(N2)
in average T.C = O(N2);
Space complexity O(1)
*/ 

// const bubbleSort = (arr) =>{
//     let swipped;
//     do{
//         swipped = false;
//         for(let i = 0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 // let temp = arr[i];
//                 // arr[i] = arr[i+1];
//                 // arr[i+1] = temp;
//                 // swipped = true
//                 // using third variable
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; // using array destructuring.
//             }
//         }
//     }while(swipped);
//     return arr;
// }
// let arr = [200, 130, 500, 350, 220];
// console.log(bubbleSort(arr));



/*
2. Selection sort

in this, repeat for total number of elements  and set the first unsorted array element's index as minimum, and iterate through the element and check if the current element is smaller then the minimum then set the minimum index to current index.
that means try to select the smallest element of an array and swip it with the first element of the unsorted array. 

Time complexity of selection sort is O(N2)

*/ 

// const selectionSort = (arr) =>{
//     for(let i = 0;i<arr.length-1;i++){
//         let minIndex = i;
//         for(let j = i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]) minIndex = j
//         }
//         if(minIndex !== i){
//             [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//         }
//     }
//     return arr
// }

//  let arr = [200, 130, 500, 350, 220];
// console.log(selectionSort(arr));



/*
3. Insortion sort.
in this algorithm, treat first element of an array as a sorted array, then iterate through the remaining unsorted array elements.
then exract current element from the unsoted array x.
loop j  = sortedArray length to 0, 
check if element at j > x, 
then move the element to right by 1.
and break the loop
then insert x at j+1 position.

*/ 

// const insertionSort = (arr) =>{
//     for(let i = 1;i<arr.length;i++){
//         let current = arr[i];
//         let j = i-1;
//         while(j>=0 && arr[j] > current){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = current;
//     }
//     return arr;
// }
// const arr = [-2, 5, 1000, -7];
// console.log(insertionSort(arr));



/*
4. Merge sort
be careful with recusrion function, it is quite complicated..
*/ 

// const mergeSort = (arr) =>{
//     if(arr.length<2){
//         return arr;
//     }

//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
    
// }
// const merge = (left, right) =>{
//     let leftIndex = 0, rightIndex = 0, result = [];
//     while(leftIndex < left.length && rightIndex < right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             result.push(left[leftIndex]);
//             leftIndex++;
//         }
//         else{
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     while(leftIndex < left.length){
//         result.push(left[leftIndex]);
//         leftIndex++;
//     }
//     while(rightIndex < right.length){
//         result.push(right[rightIndex]);
//         rightIndex++;
//     }
//     return result;
// }

// const arr = [29, 10, 8, 16, 37, 14, 4, 45];
// console.log(mergeSort(arr));



// const generateSqrt = (arr) =>{
//     if(arr.length<1) return []
//     let lastElm = arr.shift();
//     return [Number(Math.sqrt(lastElm).toFixed(0)), ...generateSqrt(arr)]
//     // return [+Math.sqrt(lastElm).toFixed(0), ...generateSqrt(arr)]
// }
// const arr = [5,10,15,26,35];
// console.log(generateSqrt(arr));

// // console.log(Math.sqrt(25).toFixed(0));



/*
Quick Sort
*/ 

// const quickSort  = (arr) =>{

//     if(arr.length<2) return arr;

//     let pivotIndex = Math.floor(Math.random()*arr.length);
//     let left = [], right = [];
//     for(let i = 0; i<arr.length;i++){
//         if( i === pivotIndex) continue;

//         if(arr[i] < arr[pivotIndex]){
//             left.push(arr[i]);
//         }
//         else right.push(arr[i])
//     }
//     return [...quickSort(left), arr[pivotIndex], ...quickSort(right)]
// }

// const arr = [12,5,19,29,54];
// console.log(quickSort(arr));



// const quickSort = (arr) =>{
//     if(arr.length<2) return arr;
//     let pivotIndex = Math.floor(Math.random()*arr.length);
//     let left = [], right = [];
//     for(let i = 0;i<arr.length;i++){
//         if(i === pivotIndex) continue;

//         if(arr[i] < arr[pivotIndex]){
//             left.push(arr[i])
//         }
//         else right.push(arr[i]);
//     }
//     return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
// }
// const arr = [200,190,120,220,500,430,340];
// console.log(quickSort(arr));



const mergeSort = (arr) =>{
    if(arr.length<2) return arr;

    const mid = Math.floor((arr.length)/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge = (left,right) =>{
    let leftInd = 0, rightInd = 0, result = [];
    while(leftInd<left.length && rightInd < right.length){
        if(left[leftInd] < right[rightInd]){
            result.push(left[leftInd]);
            leftInd++;
        }
        else{
            result.push(right[rightInd]);
            rightInd++
        }
    }
    while(leftInd<left.length){
        result.push(left[leftInd]);
        leftInd++;
    }
    while(rightInd<right.length){
        result.push(right[rightInd]);
        rightInd++
    }
    return result;
}

const arr = [200,190,120,220,500,430,340];
console.log(mergeSort(arr));





