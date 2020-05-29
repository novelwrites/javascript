//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. 
//If the string is empty, the output should be true, otherwise it should return false. 
/*************************************************************
 
//your code...
Nancy's comments: It's getting more intuitive - I am starting to get used to the syntax :)
*/

    let stringcheck = function (strval) {

    if(strval === ""){ 
        stringcontent=true;
        //return stringcontent;
        console.log("true");
    }else 
        //{strval=false;
        console.log("false")}

        stringcheck("")


/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). 
//Replace a word so that the output uses the new word instead 
//(e.g., ‘Learning JavaScript is cool!). 

//Nancy's comments: This one was fun and easier for me then it would have been 2 days ago! Progress!

//your code...

let wordreplace = function (strval) {
let sentence = ["Learning", "JavaScript", "is", "fun", "!"]

sentence[3] = strval
let finalstr = (sentence[0] + " " + sentence[1] + " " + sentence[2] + " " + sentence[3]
 + sentence[4]);
console.log(finalstr)

}

        wordreplace("amazing") //put whatever string you want to pass for the last word


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five 
//and returns another array with the squared value of each number from 
//the first array. Use an arrow function and one of the built-in array methods. 

//Nancy's comments: great exercise in getting syntax correct and using array index
//your code...

arrayreplace = () => {
    
    let array1 = [1, 2, 3, 4, 5, ]
    let array2 = []
    let i = 0
    while (i < 5){ 
        const container = array1[i]*2;
        array2.push(container)
        console.log(array2);
        i++;
    } 
}
    arrayreplace()

/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 
//9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that 
//are greater than 3. Use an arrow function and one of the built-in array methods.


//Nancy's comments: Another great exercise to reinforce basic concepts
//your code...

arraycreate = () => {
    
    let array1 = [1, 3, 5, 7, 9, 1, 3, 5, ]
    let array2 = []
    let i = 0
    while (i < 8){ 
if (array1[i] > 3){
let container = array1[i]; 
array2.push(container);
console.log(array2);
//console.log(container)
}
    i++;

    } 
}
arraycreate ()  

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. 
//Write a JavaScript program that returns the sum of those numbers. 
//Use an arrow function and one of the built-in array methods. 


//Nancy's comments: This was fun - I found the reduce method to accomplish this with a lot less code
//your code...

arrayaddtogether = () => {
    var array = [1, 2, 3, 4, 5];
    
    // Getting sum of numbers
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum); 

}
    arrayaddtogether()


/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T
// is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an
//array with the complementary strand. For example, a string of "GCTA" would
//return an array of ["C", "G", "A", "T"].  

//Nancy's comments: push comes in handy!
//your code...

arrayDNA = ([arrayDNA1]) => {
    
    let arrayDNA2 = []
    let i = 0
    while (i < 4){ 
   (arrayDNA1[i] === 'G') 
    arrayDNA2.push('C');
   (arrayDNA1[i] === 'C') 
    arrayDNA2.push('G');
   (arrayDNA1[i] === 'T') 
    arrayDNA2.push('A');
   (arrayDNA1[i] === 'A') 
    arrayDNA2.push('T');
    console.log(arrayDNA1);
    console.log(arrayDNA2);
    
    i++;
    }
}

arrayDNA ('G', 'C','T', 'A' )  
       


/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  
//Get rid of any non numerical values.  Convert the strings that are numbers to an 
//actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task. 

//Nancy's comments: got a good start and have some ideas - need more research
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,
true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    let numArray = [];

    for(var i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i] === 'number') {
            numArray = numbers[i];
        } else if (typeof(numbers[i] === undefined) {
            numbers.splice(i, 1);
        } else if (typeof(numbers[i] === 'string') {
            numbers.splice(i, 1);

    }


}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...in the future - I went on to the next problem because it is after midnight
    // and I need to get some rest
};
/************************************************************* */
// Problem 8: NOTE: Amir said not due since we haven't learned about it yet.
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:
//Nancy's comments - short and sweet - this was fun!
//let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

arrayreverse = () => {
    
    const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
    let onesReverse = []
    onesReverse = [...ones].reverse()
        console.log(ones)
        console.log(onesReverse);
       
}
    arrayreverse()


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback 
//function and runs that callback function.  It should return the 
//output of the callback function.
//Nancy's comments: Was a little difficult to understand at first but I think I have grasped
//the concept. Two separate tasks - one is called inside the other...
    //code goes here

function performer(val, cb){ //creates function that will run callback
    if(val == 1){
        cb(true);
    }else{
        cb(false);
    }
}

function checkbool (){ //the true or false (boolean) are passed from callback() 
    //and something can happen because of that value (in my code - a console.log
    //that says what was passed)

    if(cb === true){
        console.log("the cb passed a true value");
    }else{
        console.log("the cb passed a false value");
    }
}

checkbool()

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
/*
arrayreplace = () => {
    
let array1 = [1, 2, 3, 4, 5]
let array2
array1[i] = 0 //reference error - i is not defined
while (array1[i] < 5) 
    container = array1[i]*2;
    array2.push(container)
    console.log(array2);
    i++;
}  
arrayreplace()
*/