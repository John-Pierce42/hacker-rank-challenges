'use strict';

/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 **/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}

// function main() {
//     const parameterVariable = readLine();
//
//     greeting(parameterVariable);
// }

greeting("My name is John I'm here to Explore the awesome world of new Technologies!");

//==================================== 2nd challenge =======================================================

/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

    console.log(firstInteger + parseInt(secondInteger));
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

    console.log(firstDecimal + parseFloat(secondDecimal));
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}


function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();

    performOperation(secondInteger, secondDecimal, secondString);
}

//======================================================== 3rd challenge ==========================

/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
    // let area;
    // Write your code here

    return length * width;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
    // let perimeter;
    // Write your code here

    return 2 * (length + width);
}

console.log(getPerimeter(2,2));
console.log(getArea(2,2));

//================================================ 4th challenge =============================

// print each vowel in s on a new line. The English vowels are a, e, i, o, u and each vowel must be printed in the same
// order as it appeared in s.

function vowelsAndConsonants(s){
    // let vowels = ["a", "e", "i", "o", "u"];
    for(var i = 0; i < s.length; i++){
        // console.log(s[i]);


        if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
             console.log(s[i]);
        }
    }

    for(var j = 0; j < s.length; j++){
        if(s[j] !== "a" && s[j] !== "e" && s[j] !== "i" && s[j] !== "o" && s[j] !== "u"){
            console.log(s[j]);
        }
    }

//    =================================== another solution ====================================
//     using the includes

    let vowels = ["a", "e", "i", "o", "u"];

    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
    }

    for(let v of s) {
        if(!vowels.includes(v))
            console.log(v);
    }
}

vowelsAndConsonants("javascript");

// ======================================= 5th challenge =================================

function factorial(n){
    if(n < 0){
        return -1;
    } else if(n === 0){
        return 1;
    } else {
        return (n * (factorial(n -1)));
    }

}

console.log(factorial(4));

