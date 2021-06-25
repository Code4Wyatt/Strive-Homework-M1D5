/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/



const area = function (l1, l2) {
    return l1 * l2;
}
 
let result = area(2, 4)

console.log(result)


/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/



const crazySum = function(a, b) {
  
    
    if (a === b) {
        return a + b * 3;
    } 
     return a + b;
}
 let crazySumResult =crazySum(1, 2)
 console.log(crazySumResult)

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function(input) {
    if (input > 19) {
        return input * 3 
    }
    return input - 19;
   
}

console.log(crazyDiff(20))

console.log(crazyDiff(10))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary = function(n) {
    if (n >= 20 && n <= 100) {
    return true;
    }
    else if (n === 400) {
        return true;
    }
    else if (n > 100)
    return false;
}  

let boundaryResult = boundary(840)
console.log(boundaryResult)


/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(string) {
    if (string.startsWith("Strive")) {
        return string;
    } else {
        return "Strive" + string;
    }
}

//const strivify = (string) => (string.startsWith("Strive") ? string : "Strive" + string);  
console.log(strivify(" is great"));
    


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(posNum) {
    if (posNum % 3 === 0 || posNum % 7 === 0) {
        return "posNum is multiple of 3 or 7";
    } else {
        return "posNum is neither multiple of 3 nor 7";
    }
}

console.log(check3and7(4));

//I need help understanding the maths behind this, unsure how using a remainder can be used to check this but I understand the code

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
    var splitString = str.split("");  //turns string into an array
    var reverseArray = splitString.reverse(); //reverses the contents of the array
    var joinArray = reverseArray.join(""); // joins together the contents of the array

    return joinArray;  //returns input entered in reverseString("") in reverse
}
    console.log(reverseString("Helloooo"));


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(upperFirst("funtimes"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function(string) {
    return string.substring(1, 5); 
}

console.log(cutString("String"))

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/