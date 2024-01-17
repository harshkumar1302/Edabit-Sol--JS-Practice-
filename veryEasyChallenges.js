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


/* Challeneg 07
Convert Hours into Seconds
Write a function that converts hours into seconds.
*/

function hoursToSec(hours) {
    return hours * 3600;
}

var hours = 5;
console.log(`${hours} hours = ${hoursToSec(hours)} seconds`);


/* Challenge 08
Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
*/

function nextEdge(side1, side2) {
    if (side1 > 0 && side2 > 0) {
        return (side1 + side2) - 1;
    } else {
        console.log("invalid numbers");
    }
}

console.log(nextEdge(9, 2));


/* Challenge 09
Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, 
possibly zero. Return that value.
*/

function remainder(x, y) {
    return x % y;
}

var x = 2;
var y = 8;
console.log(`The remainder of given parameters is ${remainder(x, y)}.`);

/* Challenge 10
Sum of Polygon Angles
Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
*/

function sumPolygon(n) {
    return (n - 2) * 180;
}
var n = 4;
console.log(`The sum of angles of ${n} sided polygon is ${sumPolygon(n)}.`);


/* Challenge 11
Basketball Points
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
find the final points for the team and return that value.
*/
function points(twoPointers, threePointers) {
    return (twoPointers * 2) + (threePointers * 3)
}

var twoPointers = 5;
var threePointers = 2;
console.log(`The score added by the 2 pointers and 3 pointers are ${points(twoPointers, threePointers)}.`);


/*Buggy Code (Part 7)
Mubashir wants to swap two given numbers!
It is not returning the right values. Can you help him fix it?
*/

function swapNum(a, b) {
    let c = a;
    a = b;
    b = c;
    return [a, b];
}

console.log(swapNum(45, 56));

/* Using the "&&" Operator
JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:
a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
The && operator will only return true for true && true.

Make a function using the && operator.
*/

function and(a, b) {
    if (a == true && b == true) {
        return true;
    } else {
        return false;
    }
}

console.log(and(true, true));