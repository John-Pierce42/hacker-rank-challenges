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

// greeting("My name is John I'm here to Explore the awesome world of new Technologies!");

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

// console.log(getPerimeter(2,2));
// console.log(getArea(2,2));

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

// vowelsAndConsonants("javascript");

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

// console.log(factorial(4));

// ==================================== 6th challenge ================================

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    //============= scratch code ===================

    // var re = {};
    // re.vowels = "a, e, i, o, u";
    // var startWith = re.vowels;
    // var endWith = re.vowels;
    //
    // if(/^[aeiou]$|^[aeiou].*[aeiou]$/ ){
    //     return true;
    // }
    // else{
    //     return false;
    //
    // }
    // return re;

//    ================ solution ===========================
    let re = /^([aeiou]).+\1$/;

    return re;

}

// console.log(regexVar("aba"))

//======================================== 7th challenge ================================================

// the reverseString function; it has one parameter, s. You must perform the following actions:

// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was
//  thrown, this should be the original string.

function reverseString(s){

    try {
        console.log(s.split("").reverse().join(""));
    } catch {
        console.log("s.split is not a function");
        console.log(s);
    }
}
// reverseString("1234");

//==================================== 8th challenge ============================================

// In this challenge, we practice using throw and catch statements to work with custom error messages.
// the isPositive function below. it has one integer parameter, a if the value of a is positive, it must return the
// string "YES". Otherwise, it must throw ans Error according to the following rules:

// if a is 0 throw and Error with message = Zero Error.
// if a is negative , trow and Error with message = Negative Error.
//

function isPositive(a) {
    // try {
    //     if (a > 0) {
    //         console.log("YES");
    //     }
    //
    // } catch{
    //     if (a === 0) {
    //         throw "Zero Error";
    //     }
    //     if (a < 0) {
    //         throw "Negative Error";
    //     }

    // ============================= solution ==============

    // if(a === 0){
    //     throw Error("Zero Error");
    // }
    // if(a < 0){
    //     throw Error("Negative Error");
    // }
    // return "YES"

//    ============================== another solution =================================

//         if(a > 0){
//             return "YES"
//         } else {
//             throw ( a === 0 ? new Error("Zero Error") : new Error("Negative Error"));
//         }

//        ========================== another solution ==================================

    if(a > 0){
        return "YES"
    }
    throw Error ( a ? "Negative Error" : "Zero Error");
}

isPositive(2);