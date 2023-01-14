const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names

 const mapName = characters.map(character => character.name)
 console.log(mapName)

//2. Get array of all heights

 const mapHeight = characters.map(character => character.height)
 console.log(mapHeight)

//3. Get array of objects with just name and height properties

const redMap = characters.map((character) => ({name: character.name, eyes: character.eye_color}))
console.log(redMap)

//4. Get array of all first names

const firstName = characters.map(character => character.name.split(" ")[0])
// split array object by the space " " then get the 0 index of the newly returned array
 console.log(firstName)

//***REDUCE***
//1. Get total mass of all characters

const totalMass = characters.reduce((acc, cur) => { // acc = accumilator cur = current mass
return acc + cur.mass; // add current mass to accumilator 
},0) // initial value of 0
console.log(totalMass)


//2. Get total height of all characters

const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0) // as a single return reduce function5
console.log(totalHeight)

//3. Get total number of characters by eye color

const charWithCol = characters.reduce((acc, cur)=>{
    const color = cur.eye_color; // set current eye color value to const color
    if(acc[color]){
        acc[color]++ // add color to accumilator
    }else{
        acc[color] = 1
    }return acc // return accumilator
},{})// initial value of empty object 

console.log(charWithCol)


//4. Get total number of characters in all the character names

const nameLength = characters.reduce((acc, cur) => acc + cur.name.length, 0) // add up all the number of characters ( a , b , c ,d) in the names 
console.log(nameLength)


//***FILTER***
//1. Get characters with mass greater than 100

const mass100Char = characters.filter(character => {return character.mass > 100}) // function name on left
console.log(mass100Char)

//2. Get characters with height less than 200
// function name doesnt have to match array name?
const heightLess200 = characters.filter(char => char.height < 200) // if returning one item dont need extra code
console.log(heightLess200)


//3. Get all male characters

const menStar = characters.filter(char => char.gender == 'male') // if returning one item dont need extra code
console.log(menStar)

//4. Get all female characters

//***SORT***
//1. Sort by mass

const sortMass = characters.sort((a, b) => {return a.mass - b.mass})
console.log(sortMass)

//2. Sort by height

const sortHeight = characters.sort((a, b) => b.height - a.height) // reduced and sorted in decending order
console.log(sortHeight)
//3. Sort by name


const sortName = characters.sort((a, b) => { // to sort strings 
if (a.name < b.name) return -1;
return 1 // else return 1
}) // reduced and sorted in decending order
console.log(sortName)

//4. Sort by gender

const sortGender = characters.sort((a) => { // to sort strings . // no need for b argument
    if (a.gender === "female") return 1;
    return -1 // else return 1
    }) // reduced and sorted in decending order
    console.log(sortGender)

//***EVERY***
//1. Does every character have blue eyes?
const blueEyes = characters.every((char) => {return char.eye_color == "blue"})
console.log(blueEyes)

//2. Does every character have mass more than 40?

const weight40 = characters.every(char => char.mass > 40)
console.log(weight40)

//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?

const someMale = characters.some((char) => {return char.gender == "dog"})
console.log(someMale)
//2. Is there at least one character with blue eyes?

const someBlueEyes = characters.some((char) => {return char.eye_color == "blue"})
console.log(someBlueEyes)

//3. Is there at least one character taller than 210?

const someHeight = characters.some((char) => {return char.height > 210 })
console.log(someHeight)

//4. Is there at least one character that has mass less than 50?

const someMass = characters.some((char) => {return char.mass < 50})
console.log(someMass)
