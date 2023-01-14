
// array
const words = ['Happy', 'Salmon', 'Exploding', 'Kitten', 'Bat','The', 'Restistance', 'Saint', 'Ives', 'Fish'];
const filteredArray = [];

// function takes array and callback as argument
function myFilterFunction(array, callback) {
  //iterate through array
  for (let i = 0; i < array.length; i++) {
    // functionality to push to higher function
    if (callback(array[i])) {
      // push filtered words to new array
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

// function wordLength(){
//     word.length >= 6
// }

function wordLength(word) {
    return word.length >= 6;
  }
  

// call array
const longWords = myFilterFunction(words, wordLength);
// log in console
console.log(longWords);




