//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//Original Code
/*
for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}*/
//Nancy's comnments: for loop explanation to enhance understanding:
//i = 0, 0 < 10 true, log 1 to console, i++
//i = 1, 0 < 10 true, log 1 to console, i++
//"
//"
//"
//i = 10, 10 < 10 false, exit the loop!

//your code...

//Nancy's modifications: fairly straightforward and will be very usefuL!

var i = 0;
while(i < 10) {
    console.log(" the value of i in the loop is : " + i);
    i++;
}  


/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to 
//the power of 2 use javascript to compute the value of the above statement. Each 
//individual operation needs to be a function expression. run all the functions 
//after defining them, and print the answer to the console.

//your code...
//Nancy's comments: I tried different approaches and this was VERY fun to figure out! 
//Good practice on using variables and math operators.

let add1 = function(num1, num2){

 add1 = (num1 + num2);
    
 console.log(add1)
 
}
add1 (30,2)

let multiply1 = function (add1){

multiply1 = (add1 * 20);

console.log(multiply1)

}
multiply1 (add1)


let divide1 = function (multiply1){

divide1 = (multiply1 / 10);

console.log(divide1)

}

divide1 (multiply1)

let powerof2 = function (divide1){
  
 powerof2  = (divide1 ** 2 );  

console.log(powerof2)
}

powerof2 (divide1)

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() 
//the value, whether the value is 'truthy' or 'falsy', along with your reasoning 
//why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""
//your code...
//Nancy's comments: I tried different approaches and really like using the 
//OR operator. It still needs some work but the logic is in place.

let findfalsey = [ 20, 0, "zero", "const zero = 20",
"null", "0", !"", {}, 125, "undefined", "" ];
{
    
     console.log(findfalsey)

for (let i = 0; i < findfalsey.length; i++)


console.log(findfalsey[i]);


if (findfalsey[i] == 0 || "0n" || "null", "undefined" || "false" || "Nan" ) 
    console.log(findfalsey[i] + "  is false");
 else 
    console.log(findfalsey[i] + " is true");

} 
findfalsey ()


/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:
/* 
Original:
const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}
*/
//Nancy's modification: changing code to use switch statement. 
//Nancy's comments: - Very straightforward and easy on the eyes.

const day = "friday";
switch (day) {
     case "monday":
     console.log("we got a long week ahead of us...");
     break;
     case "tuesday":
     console.log("tuesday's are still better than mondays, but LONG way to go still");
     break;
     case "wednesday":
     console.log("We are smack dab in the middle of the week");
     break;
     case "thursday":
     console.log("Thursday night... the mood is right");
     break;
     case "friday":
     console.log("TGIF.  Friday truly is the best day of the week!");
     break;
 default:    
    console.log("It's a weekend!");
}



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:

//Original
/*

const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}
*/

//Nancy's modifications:
//Nancy's comments: I learned two different ways so I did both :)

age > 21 ? console.log("adult") //if block
  :  console.log("minor");      //else block

  //or

  const age = age > 21 ? "adult" : "minor"
  console.log(age);

  //Original

/*if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};*/

//Nancy's modifications:
//Nancy's comments: I learned two different ways so I did both :)
age > 13 && age < 19 ? console.log('teen') //if block
   : console.log("not a teenager");        //else block

   //or

   const age = age > 13 && age < 19 ? 'teen' : 'not a teenager'
   console.log(age);

//Original

/*if (age > 65) console.log("retired"); else {
    console.log("still working...");
}*/

//Nancy's modifications:
//Nancy's comments: I learned two different ways so I did both :)

age > 65 ? console.log("retired") //if block
  :console.log("still working");  //else block

  //or

  const age = age > 65 ? "retired" : "still working"
   console.log(age);

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that
//appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value 
//of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
//student is the object. The left column is property names. The right column are values.
//Nancy comments: functions attached to objects are called methods.
//Definition for this keyword: The JavaScript "this" keyword refers to the object it 
//belongs to. It has different values depending on where it is used: In a method, 
//this refers to the owner object. Alone, this refers to the global object.

//Nancy's comments: I really am young at heart :) great exercise to reinforce concepts!

let student = { //student is the owner of the method
    firstName: 'Nancy',
    lastName: 'Golden',
    age: 'young at heart',
    gender: 'female',
    hobbies: ['bicycling', 'horsebackriding', 'table tennis'],
    profession: 'teacher',
    education: 'masters degree',
    learn: function(){ //function expression (method)
        return this.firstName + " " + this.lastName;}, //this means student
        
    learnmore: function(){ //function expression (method)
        return this.hobbies;
    } //this means student 
};
console.log(student.learn());
console.log(student.learnmore());

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...  
//Nancy's comments: Great property/values practice - love horses!
let horse = {
    barnNamename: 'Pistol',
    regName: 'Pistol Bar T', 
    breed: 'Quarterhorse',
    ownerlastName: 'Golden',
    ownerfirstName: 'Nancy',
    age: 14,
    gender: 'gelding',
    disciplines: ['trail riding', 'trail obstacles'],
    tack: 'western',
}

/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, 
//with a message explaining why you like that data type.

//your code...
//Nancy's comments: simple solution :)
let functionfun = function ( val1, val2, val3){

console.log(val1 + "' 'Numbers are noteworthy.")
console.log(val2 + "' 'Strings are sassy.")
console.log(val3 + "' 'Arrays are amazing.")

}

functionfun (54, 'horses', [3, 4, 6, 8])

/*************************************************************
 * Function Syntax Example from my last assignment for easy reference:
 * /*let add = function ( num1, num2 ) {
    var separated=wizards.split(' ');
    console.log(separated)
    var join=separated.join(' ');
    console.log(join)   

}

converttoarray("The five boxing wizards jump quickly.");*/

/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


