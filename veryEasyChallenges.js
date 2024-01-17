//print "hello edabit.com" using return

function intro() {
    return "hello edibat.com";
}
console.log(intro());


/*   Challenge 01
Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and returns their sum.
*/

function addition(a, b) {
    return a + b;
}
var sum = addition(2, 9);
console.log(`The sum of the given two numbers are = ${sum}`);


/* Challenge 02
Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.
*/

function convertToSec(minutes) {
    return minutes * 60;
}
var minutes = 6;
console.log(`${minutes} minutes = ${convertToSec(minutes)} seconds`);


/* Challenge 03
Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result.
*/

function increments(number) {
    return number = number + 1;
}
var number = 34;
console.log(`The incremented value of ${number} is ${increments(number)}.`);


/* challenge 04
Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.
*/

function triArea(base, height) {
    return (base * height) / 2;
}

var base = 7;
var height = 4;

console.log(`The are of the given triangle is ${triArea(base, height)}`);


/* Challenge 05
Convert Age to Days
Create a function that takes the age in years and returns the age in days.
*/

function ageToDays(age) {
    return age * 365;
}

var age = 25;
console.log(`I am ${age} years old and have lived ${ageToDays(age)} days if I assue there are only 365 days every year.`);

/* Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). 
Look at the examples below to get an idea of what the function should do.
To calculate the cube of given number
function cubes(a) {
    retunr a ** 3
}
*/

function cubes(a) {
    return a ** 3
}
var a = 10;
console.log(`Cube of ${a}, is ${cubes(a)}.`);


/* Challenge 06
Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element.
*/

function giveFirstValue(arr) {
    return arr[0];
}
var arr = [2, 5, 9, 7];
console.log(`The first value in the given array is ${giveFirstValue(arr)}.`);


