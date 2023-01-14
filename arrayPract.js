const numbers = [3,4,5,4,5,7,8,5,3]

let numbers = [3,4,5,4,5,7,8,5,3];
let answer = numbers

const courses = [
    {id : 1, name: 'Barry'},
    {id : 2, name: 'Dave'},
    {id : 3, name: 'Simy'},
];


const course = courses.find(function(course){
return course.name = 'Dave';
});

console.log(course)

const course = courses.find(course => course.name === 'Dave');
console.log(course)


numbers.push(7); // push to the end
numbers.unshift(7); // puts it at start 
numbers.splice(2, 0 ,4.5)
numbers.indexOf(3);

numbers.pop(); // push to the end
numbers.shift(); // push to the end
numbers.splice(4,4);

numbers = [];

numbers.length = 0;
numbers.push(3,6,9)

numbers.splice(0, numbers.length )

while (numbers.length > 0)
numbers.pop();

console.log(answer);
console.log(numbers)

console.log(numbers.lastIndexOf(5))
console.log(numbers.includes(0))


let num1 = [3,4,5,6];
let num2 = [7,8,9,10];
//let numSlice = [1,2,3,4,5,6,7,8,9];

num3 = num1.concat(num2);
//sliced = num3.slice(2, -2);
//sliced = num3.slice(1)
sliced = num3.slice(4,1)

//console.log(num3)
console.log(sliced)

let greet1 = ['Hel', 'Good', 'Au']
let greet2 = ['lo', 'bye', 'revour']

let greet4 =  greet1.join(greet2);

//console.log(greet4);


//greet3 = greet1.concat(greet2)
//greet3 = greet1.join(greet2)
spliceGreet = greet1.splice(0);
spliceGreet2 = greet2.splice(0);

newGreet = spliceGreet.concat(spliceGreet2);
newGreet = spliceGreet.concat(...greet1, ...greet2);
const newGreet = spliceGreet.concat(...spliceGreet, ...spliceGreet2);
const newGreet = [...spliceGreet, ...spliceGreet2];

//textGreet = newGreet.join('');

// let forEach = newGreet.forEach(function(name){
//     console.log(name)
// })

let forEach = newGreet.forEach((names, index) => console.log(index, names))

// console.log(spliceGreet);
// console.log(spliceGreet2);
// console.log(newGreet);
//console.log(textGreet)


let test = "Barry";
let char = "";
let encMgg = ""

for (let i = 0; i < test.length; i++) {
    let char = test[i];
    let decode = char.charCodeAt(0);
    let asciiVal = char.charCodeAt(0) + 15;

   // console.log(char)
    console.log(decode)
    //console.log(decode2)



    let encMsg = String.fromCharCode(asciiVal)
    console.log(encMsg)


}


// console.log(test)
// console.log(temp)
// console.log(char)



// console.log(temp2)

const sorting = [2, 5, 7, 9, 4];

let newNumb = sorting.sort();
let newNumbRev = newNumb.reverse();

console.log(sorting)
console.log(newNumb)
console.log(newNumbRev)

const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'React'},
]

courses.sort(function(a ,b)
{ 
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
}
)

console.log(courses)

