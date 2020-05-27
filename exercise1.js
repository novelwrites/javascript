//Complete the following problems: 

// Problem 1:
/* Part 1: Write a JavaScript function that converts the current temperature 
from Fahrenheit to Celsius. Declare a variable for the current temperature then 
store the Celsius temperature into a variable. Console log the variable.*/

//declare variable for current temperature in fahrenheit - user defines value
//your code...

//Nancy comment: Used prompt for user entry of temperature.

var currentTempf = prompt('What is the current temp (F)?');
console.log(currentTempf);

let conversionFC = function(currentTempf) {
console.log("conversion function")
     var celsius = (currentTempf - 32) * 5 / 9;
    console.log(celsius);   
}

conversionFC(currentTempf)


// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 
//your code...

//Nancy comment: I wanted to use initial celsius value obtained in Problem 1 but it comes up 
//undefined because it is outside of this new function so I set Celsius to a value of 45 for 
//test purposes.

var celsius = 45;
console.log(celsius);
let conversionCF = function(celsius) {
console.log("conversion function")
     const fahrenheit = (celsius * 9 / 5 ) + 32;
    console.log(fahrenheit);   
}

conversionCF(celsius)

/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. 
//Declare a variable for age and write a conditional statement for whether 
//that age is old enough to vote. Console log "yes" or "no"

//your code...

//Nancy comment: Also used prompt here so user can enter their age.

var age = prompt('What is your age?');
console.log(age);

let oldenough = function(age) {
    console.log("agecheck")
    if (age < 18){
        console.log("no");
    }
    else {
        console.log("yes");
    }
}
oldenough(age)

/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable
//with "The five boxing wizards jump quickly." Use the split() method to turn the 
//string into an array of strings. (Be sure you separate the string into words, not characters.) 
//After you have finished, use the join() method to change the array back into a string.

//your code...

//Nancy comment: (learning notes) code below creates the function. Stuff in parenthesis after 
//function are parameters and stuff in-between curly braces executes when function is called.

let converttoarray = function (wizards) {
    var separated=wizards.split(' ');
    console.log(separated)
    var join=separated.join(' ');
    console.log(join)   

}

converttoarray("The five boxing wizards jump quickly."); //more learning notes: calls the function; 
//values in () are arguments passed to the VREyeParameters.

/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. 
//Use the split() and join() methods from the previous problem as well as the toString() 
//method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

//Nancy comment:This is fun! learning how to use commands :)

let telephone = function (phoneNum) {
    var phoneArray=phoneNum.split('');
    var phoneReverse=phoneArray.reverse();
    console.log (phoneReverse)
}

telephone("9727866430")

/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. 
//Include the make, model, year, and color. Write a function to get the year, color, make, 
//and model in that order.

//your code...

//Nancy comment: good exercise in using object and value.

let mycar = function () {

    let mycar = {
        make: "Chevrolet",
        model: "Lumina",
        year: "1997",
        color: "maroon"
    }
    
    console.log(mycar.year);
    console.log(mycar.color);
    console.log(mycar.make);
    console.log(mycar.model);
}

mycar()



/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, 
//the for loop will check if the current number is odd or even and display the output.


//your code...

//Nancy comment: Very cool to learn how to use modulus - remainder check capability is powerful!

let loopCount = function(){
    for (let i = 0; i <=15; i++) {
        if(i%2==0){
            console.log('even')
        } else{
            console.log('odd')
        }
    }

}
loopCount()

/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. 
//For multiples of 3 print "TEK" instead of the number and for multiples 
//of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

//your code...

//Nancy comment: Didn't quite get there yet but I think I'm on the right track. Spent a lot of time
//on this one. Fascinating problem will return to.

let multipleFun = function(){
    
    for (let i = 1; i <=100; i++) {
        //console.log(i)
        var calculation=i/3;
        console.log(calculation)
        if(calculation%2==0){
        
        console.log('multiple of 3');
        }
        //else if () {
        //    console.log('multiple of 5');
       // }
  
        else {
            console.log('multiple of both')
        }
    
multipleFun()


/************************************************************* */
// Problem 8:
//const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

//your code...

//Nancy comment: I think I am close and that the logic is solid but I have a bug I need to 
//figure out.

let thirds = function (){
    var numArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (let i=0; i<numArray.length; i++){
    if (numArray[i]) === 0 || 3 || 6 || 9; 

    {console.log(numArray[i]);
}



thirds ()


// Problem 9:
//const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', 
//{school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  
//print the school variable to the console.

//Nancy comment: This one works but I still plan on experimenting with it.
let fooditems = function (){
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ]
const i = foodArray.length - 1
console.log(foodArray[i]);
school = [i];
console.log(foodArray[school.name]);
}
fooditems ()

//Nancy comment: Ran out of time - will return to this in our study group.
//const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is 
//singular or plural.  "Potatoes are salty", "Lemon is sour".

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
//const operations = [];
//function doMath() {};
