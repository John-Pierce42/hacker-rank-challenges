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

// isPositive(2);

//====================================== 9th challenge ====================================

// class Rectangle {
//     constructor(w , h){
//         this.w = w;
//         this.h = h;
//     }
// }

// Rectangle.prototype.area = function() {
//     return(this.w * this.h)
// }

// class Square extends Rectangle {
//     constructor(s) {
//         super(s);
//         this.h = s;
//         this.w = s;
//     }
// }

// ================================= 10th challenge =====================================

// this challenge looks to want me to create button using different files and bom and dom.
var count = 0;
var textHolder = document.getElementById("count");

var button = document.getElementById("btn");

    button.addEventListener( "click", function (){
          textHolder.innerHTML = ++count;
});
    //==================================== 11th challenge =================================

// Return the corresponding to the grade according tho the following rules:

function getGrade(score){
    let grade;
    if(score >= 25 && score <= 30){
        return grade = "A";
    } else if( score >= 20 && score < 25){
        return grade = "B";
    } else if( score >= 15 && score < 20){
        return grade = "C";
    } else if( score >= 10 && score < 15){
        return grade = "D";
    } else if( score >= 5 && score < 10){
        return grade = "E";
    } else if( score >= 0 && score < 5){
        return grade = "F"
    }

    return grade;

}

// console.log(getGrade(11));

// ======================================= 12th challenge =================================

function getLetter(s) {
    let letter;
     switch (true){
         case "aeiou".includes(s[0]):
             letter = "A";
             break;
         case "bcdfg".includes(s[0]):
             letter = "B";
             break;
         case "hjklm".includes(s[0]):
             letter = "C";
             break;
         case "npqrstvwxyz".includes(s[0]):
             letter = "D";
             break;
         //============================= another solution ======================
         // case /^[aeiou]/.test(s):
         //     letter = "A";
         //     break;
         // case /^[bcdfg]/.test(s):
         //     letter = "B";
         //     break;
         // case /^[hjklm]/.test(s):
         //     letter = "C";
         //     break;
         // case /^[npqrstvwxyz]/.test(s):
         //     letter = "D";
         //     break;
     }
     return letter;
}

// george.garcia@swri.org

// console.log(getLetter("fairlady z"));

// ======================================= 13th challenge ==============================================================
//Declare a constant variable, PI , and assign it the value Math.PI. You will not pass this challenge unless the variable
// is declared as a constant and named PI (uppercase).


//Read a number, r , denoting the radius of a circle from stdin.

// Use PI and r to calculate the area and perimeter of a circle having radius r.

//Print area as the first line of output and print perimeter as the second line of output.


function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const r = readLine();
    const PI = Math.PI;
    // Print the area of the circle:
    console.log(PI * r * r);
    // Print the perimeter of the circle:
    console.log(PI * 2 * r);
    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}

// console.log(main());

// ============================================ 14th challenge ========================================

function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }

        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}

// function getSecondLargest(nums){
//
//     let firstLargest = Math.max(nums);
//     let index = nums.indexOf(firstLargest);
//     nums.splice(index, 1);
//     let secondLargest = Math.max(nums);
//     return secondLargest
// }
//
// console.log(getSecondLargest([1,2,3,4,5]));

// ==================================== hacker rank coding test ===========================
//=== question 1 ===
/*
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findNumber(arr, k) {
    // Write your code here
    if(arr.includes(k)){
        return "YES"
    } else{
        return "NO"
    }
}

//======================================== 15th challenge ====================================


function getCount(objects){
    // let x = {};
    // let y = {};
    //
    //
    // if(x === y){
    //
    // }

    let n = 0;
    for(let o of objects) {
        n += (o.x === o.y);
    }
    return n;

//    another solution
//    return objects.filter(function(o){return o.x==o.y}).length
}

//==================================== 16th challenge =========================================

function Rectangle(a, b){
    // console.log(a);
    // console.log(b);
    // let length = a * 2;
    // let width = b * 2;
    // let perimeter = length + width;
    // console.log(perimeter);
    //
    // let area = a * b;
    // console.log(area);

//    ========== returning an Object =========

    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
}

// console.log(Rectangle(4,5));

//=================================== 17th challenge ========================================
function modifyArray(nums) {

    var something = function(n) {
        // return (n % 2 ===0) ? n * 2 : n * 3;

        //    another solution
        if(n % 2 === 0){
            return n * 2;
        } else{
            return n * 3;
        }
    }

    var newArray = nums.map(something);
    return newArray;

//    another solution
}
console.log(modifyArray([1,2,3,4,5]));