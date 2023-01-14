//////// task 1

let time = Number(prompt(`Please enter the timer number`)) // get times numebr off user

function cookingStatus(time){
if (time > 0){
    console.log('Not done, please wait.')} // if statements for logic

else if (time === 0){
    console.log('Lasagna is done')}

else {
    console.log('You forgot to set the timer.')}
    return cookingStatus
}


cookingStatus(time);

//////////// task 2

const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];

// function preperationTime(layers, timePerLayer){}

function preparationTime(layers, timePer = 2){ // set time per to 2 if not entered
   
    if (timePer == undefined || timePer == NaN) {timePer == 2}
    let layerNumb = layers.length; // get number of layers
    // console.log(layerNumb)

    let prepTime = layerNumb * timePer; // times by time set
    console.log(prepTime)
}

preparationTime(layers, 3);
// => 18

preparationTime(layers);
// => 12

/*

Besides reserving the time, you also want to make sure you have enough sauce and 
noodles to cook the lasagna of your dreams. For each noodle layer in your lasagna, 
you will need 50 grams of noodles. For each sauce layer in your lasagna, you will 
need 0.2 liters of sauce.

Define the function quantities that takes an array of layers as a parameter. The 
function will then determine the quantity of noodles and sauce needed to make your
 meal. The result should be returned as an object with keys noodles and sauce. */

 /////// task 3

const quantitiesArr = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']

function quantities(quantitiesArr){
    
let noodleNumb = numb => quantitiesArr.length['sauce'];
let sauceNumb = numb => quantitiesArr.length['sauce'];

let noodleNumb = quantitiesArr.filter(x => x === "noodles").length; // find number of noodles
let sauceNumb = quantitiesArr.filter(x => x === "sauce").length; // filter array method - https://stackoverflow.com/questions/9996727/count-instances-of-string-in-an-array

let noodleQty = noodleNumb * 50; // calculation
let sauceQty = sauceNumb * 0.2;

    console.log(`noodles: ${noodleQty}, sauce: ${sauceQty}`) // logoutput

 };

quantities(quantitiesArr)


/* Write a function addSecretIngredient that accepts two arrays of ingredients as parameters. The first parameter 
is the list your friend sent you and the second is the ingredient list for your own recipe. The function should 
add the last item from your friend's list to the end of your list. The array that represents your recipe should be 
modified directly and the function should not return anything. However, the first argument should not be modified. */

//////// task 4 

const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
let myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

function addSecretIngredient(friendsList, myList){

    let ingNumb = friendsList.length; // get last  of layer Number
    toArray = ingNumb-1; // minus 1 off so matches with array sequence
// console.log(friendsList);
   // console.log(ingNumb);
   // console.log(toArray);

    myList.push(friendsList[toArray]); // push last item (secret ingredient) to myList
    console.log(myList);
return addSecretIngredient
};

addSecretIngredient(friendsList, myList);


///////// task 5 


const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
  };

  console.log(recipe)


  function scaleRecipe(recipe, numOfPeople){

   let portNood  = recipe.noodles + (numOfPeople * 100) - 200; // set variable for new amount
   let portSauce = recipe.sauce + (numOfPeople * 0.25) - 0.5; // get recipe.object and do calculation
   let portMozz = recipe.mozzarella + (numOfPeople * 0.5) - 1; // minus the original value form new value
   let portMeat = recipe.meat + (numOfPeople * 50) - 100;

    recipe.noodles = portNood; // change the object to new value
    recipe.sauce = portSauce;
    recipe.Mozz = portMozz;
    recipe.Meat = portMeat;

// console.log(portNood)
// console.log(portSauce)
// console.log(portMozz)
// console.log(portMeat)
    return scaleRecipe
  }

scaleRecipe(recipe, 3);
console.log(recipe)
 