//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. 
//If the string is empty, the output should be true, otherwise it should return false. 
/*************************************************************
 * Function Syntax Example from my last assignment for easy reference:
 * /*let add = function ( num1, num2 ) {
    var separated=wizards.split(' ');
    console.log(separated)
    var join=separated.join(' ');
    console.log(join)   

}

converttoarray("The five boxing wizards jump quickly.");*/

/* If/Then Syntax Example from my last assignment for easy reference:
 //if (age > 21) console.log("adult"); else {
        //console.log("minor");

        //const day = "friday";

//if(day === "monday") {
    //console.log("we got a long week ahead of us...");
//} else if(day === "tuesday") {
    //console.log("tuesday's are still beterr than mondays, but LONG way to go still");

//your code...

*/

    //let stringcontent - can come back to this later and use stringcontent 
    //to store true or false and output stringcontent but works so let's move on!
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



//your code...

let wordreplace = function (strval) {
let sentence = ["Learning", "JavaScript", "is", "fun", "!"]

sentence[3] = strval
let finalstr = (sentence[0] + " " + sentence[1] + " " + sentence[2] + " " + sentence[3]
 + sentence[4]);
console.log(finalstr)
//console.log(sentence);
}

    /*if(strval === ""){ 
        stringcontent=true;
        //return stringcontent;
        console.log("true");
    }else 
        //{strval=false;
        console.log("false")}*/

        wordreplace("amazing")


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five 
//and returns another array with the squared value of each number from 
//the first array. Use an arrow function and one of the built-in array methods. 



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



//your code...

arraycreate = () => {
    
    let array1 = [1, 3, 5, 7, 9, 1, 3, 5, ]
    let array2 = []
    let i = 0
    while (i < 8){ 
if (array1[i] > 3);
let container = array1[i]; 
array2.push(container)
console.log(array2);
    i++;

    } 
}
   

/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. 
//Write a JavaScript program that returns the sum of those numbers. 
//Use an arrow function and one of the built-in array methods. 



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
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...






/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    //your code...
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...
};




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    //code goes here
}


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