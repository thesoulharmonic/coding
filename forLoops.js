// // Setup
// const myArray = [];

// // Only change code below this line

// for (let i = 9; i >= 0; i--) {
//   if (i % 2 != 0){myArray.push(i);
//   }
// }

// console.log(myArray)

// // Setup
// const myArr = [2, 3, 4, 5, 6];
// // Only change code below this line


// let total = myArr.reduce((acc, cur) => acc + cur, 0) // as a single return reduce function5
//    console.log(total)

//// Another way to do it

// // Setup
// const myArr = [2, 3, 4, 5, 6];
// // Only change code below this line
// let total = 0;

// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
//    console.log(myArr[i]);}
 

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      total = arr[i] * arr[j];

    }
      
    console.log(total)
    }
  
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);