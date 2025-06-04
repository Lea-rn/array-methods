////// slice ////////////////// 
//// matbadelech el origin array ..  ===> take copy from origin array
/// matehssebech el end number

// let arr = ["a" , "b" , "c" , "d" , "e","f"] ; 

// console.log(arr)
// console.log(arr.slice(1,4))
// console.log(arr)


//////// spread operator :: 

// let arr = ["a" , "b" , "c" , "d" , "e","f"]
// const x = [
//     {name : "flen" , country : "tunisia"} , 
//      {name : "ali" , country : "algeria"}
// ]



// console.log(... x)


/////// splice //////////////////////
////// splice (mnin bech tabda tfasakh , kadech bech tfasakh) 
///// tbadel el origin array

// let arr = ["a" , "b" , "c" , "d" , "e","f"] 

// console.log("before:" ,  arr) 

// arr.splice(2,3)

// console.log("after:" ,  arr) 


///// reverse /////////////////
///// tbadel el origin array


// let x = ["a" , "b" , "c" , "d" , "e","f"]

// console.log("before :" , x) ; 

// x.reverse()

// console.log("after :" , x) ; 



/////// concat //// 
// let x = ["a" , "b" , "c" , "d" , "e","f"]

// let y = ["j" , "h" , "k"]


// let z = y.concat(x.reverse())

// console.log(z)

///////////// join  :


//  let x = ["a" , "b" , "c" , "d" , "e","f"]

//  console.log("before:" , x)  ;
//  console.log(x.join(" 10 ") )

//// at ///////////////// 

// 


///////// for ///////////////

// let numbers = [1,2,3,4,5,6,7,8,9,10]  ; 


// for (let i = 0 ; i <numbers.length ; i++) {
//     console.log(numbers[4])
// }


////// automatic for  :: 
// let numbers = [1,2,3,4,5,6,7,8,9,10]  

// for (const x of numbers ) {   ///// auto increment .....
//     console.log(x)
// }




// const movements = [200,450,-400,1000,-800,100] ; 

// for (const mov of movements) {
//     if (mov > 0 ) {
//         console.log(`you deposit ${mov}`)
//     }
//     else {
//         console.log(`you withdraw ${Math.abs(mov)}`)
//     }
// }



/////// forEach  (higher order function) ///////////////////////


// const movements = [200,450,-400,1000,-800,100] ;


////// syntaxe :: array.forEach(()=> {
    // })


//     movements.forEach(function(mov , i ){
//    if (mov > 0 ) {
//   console.log(`movement ${i+1} : you deposit ${mov}     ` )
//    }
//    else {
//       console.log(`movement ${i+1} : you withdraw ${Math.abs(mov)}     ` )
//    }
//     })



// const  names = ["jhon" , "peter" , "mark"] 

// for (const name of names) {
//     if (name === "peter") break ;
//     console.log(name)
// }


// names.forEach((name)=> {
//      if (name === "peter") break ;
//        console.log(name)
// }  )

//// sort ///// :: 

// let numbers = [10,2,5,100,6,9,30]  ; 

// const result = numbers.sort((a,b)=> a-b)   
// console.log(result)




// const  names = ["jhon" , "jeter" , "jark"] 

// const result = names.sort((a,b)=> a.localeCompare(b))
// console.log(result)

// const result = names.sort()
// console.log(result)






/////////////////////////////////////////////////// problem solving /////////////////////////////////// 



// Easy Problems::////////////////////////////////////////////
// Append an Element:
// const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////
/// answer ::
// arr.push(6)
// console.log(arr)



////// put your answer here ...........

// Remove the Last Element:
// Remove the last element from an array .




////// put your answer here ...........
// const arr = [1,2,3,4,5]
// arr.pop ()
// console.log(arr)

//////////////

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
// const arr = [1,2,3,4,5]

////// put your answer here ...........
// arr.unshift(0)
// console.log(arr)

// Remove the First Element:
// Remove the first element from an array .
/////////////////
// 
////// put your answer here ...........
// const arr = [1,2,3,4,5]
// arr.shift()
// console.log(arr)

// Check if Element Exists:
// Write a function that checks if a given element exists .
// const arr = [1,2,3,4,5]

  //// boolean ==> true or false


////// put your answer here ...........

// function Check (ele ,array) {
//     let message = array.includes (ele) ? "element exist" : "element does not exist"
//     console.log(message)
// }

// Check(4,[2,5,3,4])
// Check(20,arr)







// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const arr3 = arr.concat(arr2) ; 
// console.log(arr3)



////// put your answer here ...........

// Reverse an Array:
// Reverse the elements in an array .
// const arr2 = [6,7,8,9,10]

////// put your answer here ...........
// arr2.reverse()
// console.log(arr2)

//////////////////

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
// const arr2 = [6,7,8,9,10,20,30,50,60]
// console.log(arr2.slice(2,6))
////// put your answer here ...........
////////////////////

// Splice :
//  remove 3 elements from an array starting from index 2.
// const arr2 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ...........
///////////////////////////
// console.log(arr2)
// arr2.splice(2,3)
// console.log(arr2)

// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////
// const arrOfNumbers= [1,2,3,4,5,6] ; 

// const sumNumOfArray = function (arr){
  
//   let sum = 0 ;  
//   arr.forEach((num)=> sum = sum + num )
//   return sum ; 
 
// }

// console.log(sumNumOfArray(arrOfNumbers))





// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........

// const arrOfNumbers= [1,2,3,4,5,6] 
// console.log(arrOfNumbers)
// let indexToRemove = 3 ; 
// arrOfNumbers.splice(indexToRemove,1)
// console.log(arrOfNumbers)


///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
/////////////////////

// const names = ["peter" , "nicole" , "jhon"] ; 

// names.splice(1,2 , "youssef","talel")
// console.log(names)


// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////// put your answer here ...........

// const arrOfNumbers= [1,2,3,4,5,6] ; 
// console.log(arrOfNumbers.slice(-3))
////////////////////

// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////
// const arr1 = [5,3,2,1,4] 
// const arr2 = [9,8,6,10,7]

// let arr3 = arr1.concat(arr2)

// arr3.sort((a,b)=>a-b)
// console.log(arr3)

// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........


/// first methode :
// arr1.sort((a,b)=>b-a) ; 
// console.log(arr1[0])

/// second method :: 
// const arr1 = [5,3,2,15,4,10,20] 
// function max (arr){

// let maxNumber = arr [0]   //// ==> 20
// arr.forEach ((num)=> {    //// 5
// if (num > maxNumber) {  
//   maxNumber = num
// }
// })

// return maxNumber
// }

// console.log(max(arr1))



////////////////

// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.


////// put your answer here ...........

// const numbers = [1,10,2,10,5,6,10,100,6]
// const countElement = function (arr , value){
// let count = 0 ; 
// arr.forEach((num)=>{
//   if (num === value) {
//     count++
//   }
// })

// return count
// } ; 

// console.log(countElement(numbers , 10))

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........
// const numbers = [-1,-2,-3,10,-100,6,9,70]  ;
// console.log(numbers)


// function positiveNumber (arr) {
//   let positive = [] ; 
//   arr.forEach((ele)=> {
//     if (ele > 0) {
//   positive.push(ele)
//     }
//   })

//   return positive
// }

// console.log(positiveNumber(numbers))

////////////////////

// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
const arr = [[1,2,3],[10,20,30],[50,60,100]]
// console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]

////// put your answer here ...........

// [1,2,3],[10,20,30]  //// [1,2,3,10,20,30]
//// [] , [4,5,6,7]  /// 

// function flatten (arr){
// let flat = [] ;   ///// [1,2,3].concat([10,20,30]) ===> [1,2,3,10,20,30].....
// arr.forEach((ele)=> {
//   flat = flat.concat(ele)
// })
// return flat
// }
// console.log(flatten(arr))



// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........
// const numbers = [2,10,5,7,10,8,50,10,50,8,200] ;
// function removeDuplicates (array) {
// let withoutDouble = [] ; /// [2,10,5,7]
// array.forEach((ele)=> {  /// 2
//   if (!withoutDouble.includes(ele)){
//     withoutDouble.push(ele)
//   }
// })
// return withoutDouble
// }

// console.log(removeDuplicates(numbers))

//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........

// const numbers = [2,10,5,7,10,8,50,10,50,8,200]
// function removeElement (arr,value) {
// arr.forEach((num,i)=> {
//   if (num === value) {
//     arr.splice(i,1)
//   }
// })
// return arr
// }

// console.log(removeElement(numbers,8))
////////////////////////////////////////

// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
////// put your answer here ...........

// const numbers = [-1,-2,-3,10,-100,6,9,70]  

// function descinding (arr) {
//   const arr2 = arr.sort((a,b)=>a-b)
//    arr2.reverse()
//    return arr2 
// }

// console.log(descinding(numbers))
//////////////////////////////////////


 